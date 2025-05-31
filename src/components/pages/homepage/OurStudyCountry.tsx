import Section from "@/components/common/Section";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import StudyCountryCard from "./StudyCountryCard";
import FadeInUpWithSlowBounce from "@/animation_wrappers/FadeInUpWithSlowBounce";
// import { getAllCountries } from "@/services/getAllCountries";
import { Study_Country } from "@/types/country";

const dummyCountries: Study_Country[] = [
  {
    id: 1,
    country: "Russia",
    slug: "russia",
    flag: "/images/media/flags/Russia_Flag.svg",
    photo:
      "/images/media/city/22f1b6aa-f124-45f3-b29a-23fd0e464879_0_MFqiqf8.png",
    route_slug: "study-in-canada",
    box1: {
      title: "Top Education",
      description:
        "Russia offers top-ranked universities with affordable tuition.",
    },
    whystudy: {
      heading: "Why Study in Canada?",
      content: "Russia provides world-class education with diverse culture.",
    },
    costofliving: {
      heading: "Cost of Living",
      content: "Living costs vary by city but are generally moderate.",
    },
    jobopportunity: {
      heading: "Job Opportunities",
      content: "Plenty of part-time jobs and post-graduation work options.",
    },
    scholarship: {
      heading: "Scholarships",
      content: "Russia offers various government and university scholarships.",
    },
    application_procedures: {
      steps: ["Choose a program", "Apply online", "Get your acceptance letter"],
    },
    admission_requirments: {
      requirements: [
        "High school diploma",
        "IELTS/TOEFL",
        "Statement of Purpose",
      ],
    },
    visaprocedures: {
      steps: ["Get acceptance", "Apply for visa", "Attend biometric"],
    },
    cities: [
      { name: "Toronto", population: 2700000 },
      { name: "Vancouver", population: 675000 },
    ],
    faq: [
      {
        question: "Can I work while studying?",
        answer: "Yes, up to 20 hours/week.",
      },
    ],
  },
  {
    id: 2,
    country: "Canada",
    slug: "canada",
    flag: "/images/media/flags/Canada_Flag.svg",
    photo: "/images/media/city/canada-city.jpg",
    route_slug: "study-in-canada",
    box1: {
      title: "World-Class Education",
      description:
        "Canada offers top-ranked universities with affordable tuition.",
    },
    whystudy: {
      heading: "Why Study in Canada?",
      content:
        "Canada provides world-class education with diverse culture and safe environment.",
    },
    costofliving: {
      heading: "Cost of Living",
      content:
        "Living costs vary by city but are generally reasonable for students.",
    },
    jobopportunity: {
      heading: "Job Opportunities",
      content:
        "International students can work up to 20 hours per week during studies.",
    },
    scholarship: {
      heading: "Scholarships",
      content:
        "Various scholarships available for international students in Canada.",
    },
    application_procedures: {
      steps: [
        "Choose your program",
        "Prepare documents",
        "Submit application",
        "Receive letter of acceptance",
      ],
    },
    admission_requirments: {
      requirements: [
        "Academic transcripts",
        "English proficiency (IELTS/TOEFL)",
        "Statement of Purpose",
        "Letters of recommendation",
      ],
    },
    visaprocedures: {
      steps: [
        "Get acceptance letter",
        "Apply for study permit",
        "Submit biometrics",
        "Receive approval",
      ],
    },
    cities: [
      { name: "Toronto", population: 2930000 },
      { name: "Vancouver", population: 675000 },
      { name: "Montreal", population: 1780000 },
    ],
    faq: [
      {
        question: "Can I work in Canada after graduation?",
        answer: "Yes, through the Post-Graduation Work Permit Program.",
      },
    ],
  },
  {
    id: 3,
    country: "Australia",
    slug: "australia",
    flag: "/images/media/flags/Australia_Flag.svg",
    photo: "/images/media/city/australia-city.jpg",
    route_slug: "study-in-australia",
    box1: {
      title: "Innovative Learning",
      description:
        "Australia offers cutting-edge education in a vibrant environment.",
    },
    whystudy: {
      heading: "Why Study in Australia?",
      content:
        "Australia has world-renowned universities and excellent quality of life.",
    },
    costofliving: {
      heading: "Cost of Living",
      content: "Costs vary by city, with options for different budgets.",
    },
    jobopportunity: {
      heading: "Job Opportunities",
      content: "Students can work up to 40 hours per fortnight during studies.",
    },
    scholarship: {
      heading: "Scholarships",
      content: "Many scholarships available for international students.",
    },
    application_procedures: {
      steps: [
        "Select course and institution",
        "Check entry requirements",
        "Apply to institution",
        "Receive offer letter",
      ],
    },
    admission_requirments: {
      requirements: [
        "Academic qualifications",
        "English language proficiency",
        "Genuine Temporary Entrant requirement",
        "Health insurance",
      ],
    },
    visaprocedures: {
      steps: [
        "Receive Confirmation of Enrollment",
        "Apply for student visa",
        "Health examination",
        "Visa decision",
      ],
    },
    cities: [
      { name: "Sydney", population: 5312000 },
      { name: "Melbourne", population: 5078000 },
      { name: "Brisbane", population: 2480000 },
    ],
    faq: [
      {
        question: "What is the weather like in Australia?",
        answer:
          "Australia has varied climates, generally warm with distinct seasons.",
      },
    ],
  },
  {
    id: 4,
    country: "United Kingdom",
    slug: "uk",
    flag: "/images/media/flags/UK_Flag.svg",
    photo: "/images/media/city/uk-city.jpg",
    route_slug: "study-in-uk",
    box1: {
      title: "Historic Excellence",
      description:
        "The UK is home to some of the world's oldest and most prestigious universities.",
    },
    whystudy: {
      heading: "Why Study in UK?",
      content:
        "UK degrees are recognized worldwide with shorter course durations.",
    },
    costofliving: {
      heading: "Cost of Living",
      content: "Costs vary significantly between London and other cities.",
    },
    jobopportunity: {
      heading: "Job Opportunities",
      content:
        "Students can work part-time during studies and full-time during vacations.",
    },
    scholarship: {
      heading: "Scholarships",
      content:
        "Many scholarships and bursaries available for international students.",
    },
    application_procedures: {
      steps: [
        "Choose course and university",
        "Prepare application",
        "Submit through UCAS",
        "Receive offer",
      ],
    },
    admission_requirments: {
      requirements: [
        "Academic transcripts",
        "English language proficiency",
        "Personal statement",
        "References",
      ],
    },
    visaprocedures: {
      steps: [
        "Receive CAS from university",
        "Prepare financial evidence",
        "Apply online",
        "Biometrics appointment",
      ],
    },
    cities: [
      { name: "London", population: 8900000 },
      { name: "Manchester", population: 547000 },
      { name: "Edinburgh", population: 488000 },
    ],
    faq: [
      {
        question: "How long does a UK student visa take?",
        answer: "Typically 3 weeks from outside the UK.",
      },
    ],
  },
  {
    id: 5,
    country: "United States",
    slug: "usa",
    flag: "/images/media/flags/USA_Flag.svg",
    photo: "/images/media/city/usa-city.jpg",
    route_slug: "study-in-usa",
    box1: {
      title: "Diverse Opportunities",
      description:
        "The US offers the widest range of educational options worldwide.",
    },
    whystudy: {
      heading: "Why Study in USA?",
      content:
        "US universities lead global rankings with cutting-edge research facilities.",
    },
    costofliving: {
      heading: "Cost of Living",
      content:
        "Varies greatly by location, from affordable to very expensive cities.",
    },
    jobopportunity: {
      heading: "Job Opportunities",
      content: "OPT program allows 1-3 years of work after graduation.",
    },
    scholarship: {
      heading: "Scholarships",
      content: "Many merit-based and need-based scholarships available.",
    },
    application_procedures: {
      steps: [
        "Research schools",
        "Take standardized tests",
        "Prepare application package",
        "Submit applications",
      ],
    },
    admission_requirments: {
      requirements: [
        "Academic records",
        "Standardized test scores",
        "Essays",
        "Letters of recommendation",
      ],
    },
    visaprocedures: {
      steps: [
        "Receive I-20 form",
        "Pay SEVIS fee",
        "Complete DS-160",
        "Schedule visa interview",
      ],
    },
    cities: [
      { name: "New York", population: 8419000 },
      { name: "Los Angeles", population: 3929000 },
      { name: "Boston", population: 689000 },
    ],
    faq: [
      {
        question: "Can I stay in the US after graduation?",
        answer: "Yes, through Optional Practical Training (OPT) program.",
      },
    ],
  },
];

const OurStudyCountry = async () => {
  const countries: Study_Country[] = dummyCountries; // ✅ Ensure proper typing

  return (
    <Section
      sectionName="Our Study Country"
      title="Explore top global study destinations"
      className="pb-[100px]"
    >
      <FadeInUpWithSlowBounce className="container px-20">
        <Carousel
          opts={{
            align: "start",
          }}
        >
          <CarouselContent>
            {countries.map((country: Study_Country) => (
              <CarouselItem
                className="basis-full md:basis-1/2 xl:basis-1/3"
                key={country.id}
              >
                <StudyCountryCard country={country} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </FadeInUpWithSlowBounce>
    </Section>
  );
};

export default OurStudyCountry;
