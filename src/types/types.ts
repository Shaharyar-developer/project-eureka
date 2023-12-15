export type Project = {
  name: string;
  description: string;
  startDate: Date;
  notes?: ProjectNote[];
};
type ProjectNote = {
  note: string;
  date: Date;
};
