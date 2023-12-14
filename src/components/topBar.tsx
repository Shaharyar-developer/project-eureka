import { Button } from "./ui/button";
import InputSelect from "./ui/select";
import type { option } from "./ui/select";
import { useState } from "react";
import Modal from "./ui/modal";
export default function TopBar() {
  const [isOpen, setIsOpen] = useState(false);

  const options: option[] = [
    {
      name: "Home",
      description: "Go to home page",
      callback() {
        console.log("Home");
      },
    },
    {
      name: "About",
      description: "Go to about page",
      callback() {
        console.log("About");
      },
    },
    {
      name: "Contact",
      description: "Go to contact page",
      callback() {
        console.log("Contact");
      },
    },
  ];
  return (
    <nav className="w-full border-b py-3 flex gap-4 items-center justify-center px-4">
      <InputSelect options={options} />
      <Button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        New Project
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        Content
      </Modal>
    </nav>
  );
}
