import { useState } from "react";

import type { Response } from "../../electron/main";
import type { Project } from "../types/types";
const useJsonStorage = (project?: Project) => {
  const [projects, setProjects] = useState<Project[]>();
  const getProjects = () => {
    window.ipcRenderer.send("getAllJsonFiles");
    window.ipcRenderer.on("response", (event, response: Response) => {
      if (response.success) {
        setProjects(response.data as Project[]);
        return projects;
      } else {
        console.error(response.error, event);
      }
    });
  };
  const addProject = () => {
    window.ipcRenderer.send("addProject", project);
    window.ipcRenderer.on("response", (event, response: Response) => {
      console.log(response, event);
    });
  };
  const deleteProject = () => {
    if (!project) {
      return;
    }
    window.ipcRenderer.send("deleteProject", project.name);
  };
  const updateProject = () => {};
  return {
    getProjects,
    addProject,
    deleteProject,
    updateProject,
    projects,
  };
};
export { useJsonStorage };
