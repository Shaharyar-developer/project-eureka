import { useState } from "react";

import { Plus } from "lucide-react";
import NewProject from "./newProject";
import { Button } from "./ui/button";
import Modal from "./ui/modal";
import type { option } from "./ui/select";
import InputSelect from "./ui/select";
export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const options: option[] = [
    {
      name: "Add Project",
      description: "Create a new project",
      callback() {
        setIsOpen(true);
      },
    },
  ];
  return (
    <nav className="w-full border-b py-3 flex gap-4 items-center justify-center px-4">
      <InputSelect options={options} />
      <Button
        variant={"outline"}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        <Plus />
      </Button>
      <Modal
        className={""}
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <NewProject />
      </Modal>
    </nav>
  );
}
