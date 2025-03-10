export interface JobTradcutionI {
  title: string;
  description: string;
  link: string;
  items: JobI[];
}
export interface JobI {
  company: string;
  position: string;
  period: string;
  title: string;
  description: string;
  location: string;
  image?: string;
}
