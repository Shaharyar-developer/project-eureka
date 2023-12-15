import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { DatePicker } from "./ui/datePicker";
import { useJsonStorage } from "../hooks/useJsonStorage";
import { useState } from "react";
export default function NewProject() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState<Date>();
  const { addProject } = useJsonStorage();

  const handleSubmit = () => {
    return;
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
