import { useState } from "react";
import { useJsonStorage } from "../hooks/useJsonStorage";
import type { Project } from "../types/types";
import { Button } from "./ui/button";
import { DatePicker } from "./ui/datePicker";
import { Input } from "./ui/input";
export default function NewProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Date>(new Date());
  const { addProject } = useJsonStorage();

  const handleSubmit = () => {
    const project: Project = {
      name,
      description,
      startDate,
    };
    addProject(project);
  };

  return (
    <>
      <div className="flex gap-3 justify-center flex-col w-full">
        <Input
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          placeholder="Name"
          size={34}
        />
        <Input
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          placeholder="Description"
        />
        <DatePicker
          defaultDate={new Date()}
          onDateChange={(e) => {
            setStartDate(e);
          }}
        ></DatePicker>
        <Button onClick={handleSubmit} className="mx-1">
          Submit
        </Button>
      </div>
    </>
  );
}
