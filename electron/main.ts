import { app, BrowserWindow, ipcMain } from "electron";
import fs from "fs";
import path from "node:path";

import type { Project } from "../src/types/types";

process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;

const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.webContents.on("did-finish-load", () => {
    win?.webContents.send("main-process-message", new Date().toLocaleString());
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }
}

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

const dataDir = app.getPath("documents");
fs.mkdirSync(path.join(dataDir, "project_eureka"), { recursive: true });
const dir = path.join(dataDir, "project_eureka");

export type Response = {
  success: boolean;
  data?: Project[] | Project;
  error?: Error;
};

function sendResponse(event: Electron.IpcMainEvent, response: Response) {
  event.sender.send("response", response);
}

ipcMain.on("getAllJsonFiles", (event) => {
  try {
    const jsonFiles = fs.readdirSync(dir);
    const jsonData = jsonFiles.map((file) => {
      const filePath = path.join(dir, file);
      const fileData = fs.readFileSync(filePath, "utf-8");
      const data = JSON.parse(fileData) as Project;
      return data;
    });
    sendResponse(event, { success: true, data: jsonData } as Response);
  } catch (error) {
    sendResponse(event, { success: false, error } as Response);
  }
});
ipcMain.on("deleteProject", (event, args) => {
  try {
    fs.unlinkSync(path.join(dir, args));
    sendResponse(event, { success: true } as Response);
  } catch (error) {
    sendResponse(event, { success: false, error } as Response);
  }
});
ipcMain.on("addProject", (event, args: Project) => {
  try {
    fs.writeFileSync(path.join(dir, args.name), JSON.stringify(args));
    sendResponse(event, { success: true } as Response);
  } catch (error) {
    sendResponse(event, { success: false, error } as Response);
  }
});
app.whenReady().then(createWindow);
