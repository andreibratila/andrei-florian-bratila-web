export interface CertificateI {
  title: string;
  titleBlue: string;
  description: string;
  tecnologias: string[];
  hours: string;
  url: string;
}

export interface CertificateTraductionI {
  title: string;
  description: string;
  link: string;

  items: CertificateI[];
}
