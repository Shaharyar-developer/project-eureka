import { formatDate } from "../libs/utils";
import { Project } from "../types/types";
import { Card } from "./ui/card";
export const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <>
      <Card className="hover:bg-secondary relative hover:cursor-pointer scale-[1.01] active:scale-105 hover:scale-100 transition-all">
        <h1 className="text-2xl">{project.name}</h1>
        <h2 className="text-lg">{project.description}</h2>
        <h3 className="mt-6 text-sm">
          {formatDate(new Date(project.startDate))}
        </h3>
      </Card>
    </>
  );
};
