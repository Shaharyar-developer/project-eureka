export type Projects = Project[];
export type Project = {
  id: string;
  name: string;
  description: string;
  startDate: Date;
  notes?: ProjectNote[];
};
type ProjectNote = {
  note: string;
  date: Date;
};
