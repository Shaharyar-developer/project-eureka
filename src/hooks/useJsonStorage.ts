import { useState } from "react";

import type { Response } from "../../electron/main";
import type { Project } from "../types/types";
/**
 * Custom hook for managing JSON storage of projects.
 * @param project Optional project object.
 * @returns An object containing functions for managing projects and the current list of projects.
 */
const useJsonStorage = () => {
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
  const addProject = (project: Project) => {
    window.ipcRenderer.send("addProject", project);
    window.ipcRenderer.on("response", (event, response: Response) => {
      console.log(response, event);
    });
  };
  const deleteProject = (project: Project) => {
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
