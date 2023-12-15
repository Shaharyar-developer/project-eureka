import TopBar from "./components/topBar";
import { useJsonStorage } from "./hooks/useJsonStorage";
import { useEffect } from "react";
import { Card } from "./components/ui/card";
export default function App() {
  const obj = {
    id: "1",
    name: "Something",
    description: "None",
    startDate: new Date(),
  };
  const { getProjects, projects } = useJsonStorage(obj);
  useEffect(() => {
    getProjects();
    console.log(projects);
  }, []);
  return (
    <>
      <TopBar />
    </>
  );
}
