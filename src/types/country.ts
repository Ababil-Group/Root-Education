// export type Study_Country = {
//   id: number;

//   country: string;

//   slug: string;

//   flag?: File | null | FileList | string;

//   photo?: File | null | FileList | string;

//   route_slug: string;

//   box1: Box1;

//   whystudy: Whystudy;

//   costofliving: Costofliving;

//   jobopportunity: Jobopportunity;

//   scholarship: Scholarship;

//   application_procedures: ApplicationProcedure;

//   admission_requirments: AdmissionRequirment;

//   visaprocedures: Visaprocedure;

//   cities: City[];

//   faq: Faq[];
// };
export type Box1 = {
  title: string;
  description: string;
};

export type Whystudy = {
  heading: string;
  content: string;
};

export type Costofliving = {
  heading: string;
  content: string;
};

export type Jobopportunity = {
  heading: string;
  content: string;
};

export type Scholarship = {
  heading: string;
  content: string;
};

export type ApplicationProcedure = {
  steps: string[];
};

export type AdmissionRequirment = {
  requirements: string[];
};

export type Visaprocedure = {
  steps: string[];
};

export type City = {
  name: string;
  population: number;
};

export type Faq = {
  question: string;
  answer: string;
};

export type Study_Country = {
  id: number;
  country: string;
  slug: string;
  flag?: File | null | FileList | string;
  photo?: File | null | FileList | string;
  route_slug: string;
  box1: Box1;
  whystudy: Whystudy;
  costofliving: Costofliving;
  jobopportunity: Jobopportunity;
  scholarship: Scholarship;
  application_procedures: ApplicationProcedure;
  admission_requirments: AdmissionRequirment;
  visaprocedures: Visaprocedure;
  cities: City[];
  faq: Faq[];
};

export type Whystudylist = {
  title: string;
  content: string;
};

export type List = {
  title: string;
  content: string;
};

export type Fee = {
  title: string;
  range: string;
};

export type List2 = {
  title: string;
  content: string;
};

export type Scholarshiplist = {
  name: string;
  criteria: string;
  coverage: string;
  deadline: string;
  process: string;
};

export type Applicationprocedureslist = {
  title: string;
  content: string;
};

export type List3 = {
  title: string;
  content: string;
};

export type List4 = {
  title: string;
  content: string;
};
