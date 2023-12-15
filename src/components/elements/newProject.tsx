import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { DatePicker } from "../ui/datePicker";
import { formatDate } from "../../libs/utils";
import { useJsonStorage } from "../../hooks/useJsonStorage";
export default function NewProject() {
  const { addProject } = useJsonStorage();
  return (
    <>
      <div className="flex gap-3 justify-center flex-col w-full">
        <Input placeholder="Name" size={34} />
        <Input placeholder="Description" />
        <DatePicker
          onDateChange={(e) => {
            console.log(formatDate(e));
          }}
        >
          Start Date
        </DatePicker>
        <Button className="mx-1">Submit</Button>
      </div>
    </>
  );
}
