import { useEffect } from "react";

import TopBar from "./components/topBar";
import { ProjectCard } from "./components/projectCard";
import { useJsonStorage } from "./hooks/useJsonStorage";
import { Toaster } from "sonner";

export default function App() {
  const { getProjects, projects } = useJsonStorage();
  useEffect(() => {
    getProjects();
  }, []);
  useEffect(() => {
    console.log(projects);
  }, [projects]);
  return (
    <>
      <Toaster richColors />
      <TopBar />
      <div className="flex mt-12 gap-4 items-center justify-center container mx-auto">
        {projects?.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}
