export class Job {
  JobId!: number;
  JobName!: string;
  CreatedDate = new Date();
  EmployerId!: number;
  Experience!: string;
  Package!: string;
  Location!: string;
  JobDescription!: string;
  IsActive = true;
  CategoryId!: string;
}
