import { formatDate } from "../libs/utils";
import { Project } from "../types/types";
import { Popover } from "./ui/popover";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { triggerToast } from "../libs/utils";
import { useJsonStorage } from "../hooks/useJsonStorage";
export const ProjectCard = ({ project }: { project: Project }) => {
  const { deleteProject } = useJsonStorage();
  return (
    <>
      <Popover
        className="flex flex-col border p-2 rounded-md border-muted-foreground/30  gap-2 justify-center items-center"
        content={
          <>
            <div className="grid grid-cols-2 gap-1">
              <Button variant={"outline"} className="bg-secondary">
                Modify
              </Button>
              <Button
                onClick={() => {
                  triggerToast(
                    "Confirm Deletion?",
                    "warning",
                    () => {
                      deleteProject(project);
                    },
                    "Delete"
                  );
                }}
                variant={"destructive"}
                className="bg-secondary"
              >
                Delete
              </Button>
            </div>
            <Button className="w-full">Notes</Button>
          </>
        }
      >
        <Card className="hover:bg-secondary relative hover:cursor-pointer scale-[1.01] active:scale-105 hover:scale-100 transition-all">
          <h1 className="text-2xl">{project.name}</h1>
          <h2 className="text-lg">{project.description}</h2>
          <h3 className="mt-6 text-sm">
            {formatDate(new Date(project.startDate))}
          </h3>
        </Card>
      </Popover>
    </>
  );
};
