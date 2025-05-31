import Section from "@/components/common/Section";
import UniversityCard from "@/components/common/UniversityCard";
import { Button } from "@/components/ui/Button";
// import { getAllUniversities } from "@/services/getAllUniversities";
import Link from "next/link";

const dummyUniversities = [
  {
    id: 1,
    name: "Oxford University",
    description: "A prestigious university in the UK.",
    slug: "oxford-university",
    photo: "/images/media/university_photos/1-40.jpg",
    logo: "/images/media/university_logos/aas_logo.png",
    short_info: {
      country: "United Kingdom",
      university_type: "Public",
      total_students: 24000,
      launched: 1096,
    },
  },
  {
    id: 2,
    name: "Harvard University",
    description: "An Ivy League university in the USA.",
    slug: "harvard-university",
    photo: "/images/media/university_photos/1.jpg",
    logo: "/images/media/university_logos/25c7c3c3-927a-4166-a28f-e10923ddd59f_0_vFggDGm.png",
    short_info: {
      country: "USA",
      university_type: "Private",
      total_students: 21000,
      launched: 1636,
    },
  },
  {
    id: 3,
    name: "University of Tokyo",
    description: "Leading university in Japan.",
    slug: "university-of-tokyo",
    photo: "/images/media/university_photos/1806-img_1002.jpg",
    logo: "/images/media/university_logos/1732009253_floordeepcleaning_2O39XSI.jpg",
    short_info: {
      country: "Japan",
      university_type: "Public",
      total_students: 28000,
      launched: 1877,
    },
  },
  // Add more universities as needed...
];
const OurPartnersUniversity = async () => {
  // const universityData = await getAllUniversities({ limit: 6 });

  // const universities = universityData.results;

  const universities = dummyUniversities;

  return (
    <Section
      sectionName="Our Partners University"
      title="World-Class Educational Collaborations"
    >
      <div className="container grid grid-cols-1 gap-x-10 gap-y-10 lg:grid-cols-2 2xl:grid-cols-3">
        {universities?.map(
          (university: {
            id: number;
            name: string;
            description: string;
            slug: string;
            photo: string;
            logo: string;
            short_info: {
              country: string;
              university_type: string;
              total_students: number;
              launched: number;
            };
          }) => <UniversityCard key={university.id} university={university} />,
        )}
      </div>
      <div className="mt-10 flex items-center justify-center">
        <Link href="/universities">
          <Button>View All Universities</Button>
        </Link>
      </div>
    </Section>
  );
};

export default OurPartnersUniversity;
