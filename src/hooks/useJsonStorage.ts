import type { Project } from "../types/types";
import type { Response } from "../../electron/main";
import { useState } from "react";
const useJsonStorage = (project?: Project) => {
  const [projects, setProjects] = useState<Response>();
  const getProjects = () => {
    window.ipcRenderer.send("getAllJsonFiles");
    window.ipcRenderer.on("response", (event, response: Response) => {
      if (response.success) {
        setProjects(response.data);
        return projects;
      } else {
        console.error(response.error);
      }
    });
  };
  const addProject = () => {};
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
