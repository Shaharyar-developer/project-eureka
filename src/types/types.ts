export type Project = {
  name: string;
  description: string;
  startDate: string;
  notes?: ProjectNote[];
};
type ProjectNote = {
  note: string;
  date: string;
};
