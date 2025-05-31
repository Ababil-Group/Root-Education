import { Study_Country } from "@/types/country";
export const dummyCountries: Study_Country[] = [
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

export const dummyUniversities = [
  {
    id: 1,
    name: "Moscow State University",
    slug: "moscow-state-university",
    description:
      "Moscow State University is the leading institution of higher education in Russia.",
    short_info: {
      country: "Russia",
      university_type: "Public",
      total_students: 40000,
      launched: 1755,
    },
    photo: "/images/media/university_photos/1.jpg",
    logo: "/images/media/university_logos/25c7c3c3-927a-4166-a28f-e10923ddd59f_0_vFggDGm.png",
    video: "/public/Root education.mp4",
    thumbnail: "/images/university_thumbnails/universities/1-40.jpg",
    about_university: [
      {
        title: "History",
        description:
          "Founded in 1755, MSU is one of the oldest universities in Russia.",
      },
      {
        title: "Campus",
        description:
          "The campus features the famous Stalinist main building and modern facilities.",
      },
    ],
    programs: {
      undergraduate_programs: [
        { name: "Computer Science" },
        { name: "Mechanical Engineering" },
      ],
      postgraduate_programs: [
        { name: "Data Science" },
        { name: "Civil Engineering" },
      ],
      doctoral_programs: [
        { name: "Artificial Intelligence" },
        { name: "Quantum Physics" },
      ],
    },
    scholarship: {
      short_description:
        "MSU provides financial aid and merit-based scholarships for international students.",
      table: [
        {
          scholarship_name: "MSU Global Excellence",
          amount: "$5,000/year",
          eligibility_criteria: "Top 10% applicants, English Proficiency",
          provider: "MSU",
        },
        {
          scholarship_name: "Russian Government Grant",
          amount: "Full tuition + stipend",
          eligibility_criteria: "Merit and need-based",
          provider: "Russian Federation",
        },
      ],
      notes: [
        { title: "All scholarships require annual renewal" },
        { title: "Stipends may vary by program" },
      ],
    },
    application_guide: {
      short_description:
        "Follow the steps below to apply to Moscow State University.",
      guide_list: [
        {
          title: "Choose a Program",
          description: "Explore our catalog and pick the best match for you.",
        },
        {
          title: "Prepare Documents",
          description:
            "Submit transcripts, ID, proof of language proficiency, and application fee.",
        },
        {
          title: "Interview",
          description: "Some programs require an online interview.",
        },
      ],
      bottom_description:
        "You will be notified via email once your application is reviewed.",
    },
  },
  {
    id: 2,
    name: "University of Toronto",
    slug: "university-of-toronto",
    description: "One of Canada's top-ranked research universities.",
    short_info: {
      country: "Canada",
      university_type: "Public",
      total_students: 91000,
      launched: 1827,
    },
    photo: "/images/media/university_photos/2.jpg",
    logo: "/images/media/university_logos/uoft-logo.png",
    video: "/public/UofT-campus-tour.mp4",
    thumbnail: "/images/university_thumbnails/universities/2-40.jpg",
    about_university: [
      {
        title: "World Ranking",
        description:
          "Consistently ranked in the top 30 globally for innovation and research.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Psychology" }, { name: "Finance" }],
      postgraduate_programs: [{ name: "MBA" }, { name: "Biotech" }],
      doctoral_programs: [{ name: "Neuroscience" }],
    },
    scholarship: {
      short_description: "Offers many merit and need-based awards.",
      table: [
        {
          scholarship_name: "Lester B. Pearson Scholarship",
          amount: "Full tuition + living expenses",
          eligibility_criteria: "International students with leadership skills",
          provider: "UofT",
        },
      ],
      notes: [{ title: "Requires separate application" }],
    },
    application_guide: {
      short_description: "3-step online application process.",
      guide_list: [
        {
          title: "Apply Online",
          description: "Use the UofT portal to begin your application.",
        },
      ],
      bottom_description: "Submit documents before the deadline.",
    },
  },
  {
    id: 3,
    name: "University of Tokyo",
    slug: "university-of-tokyo",
    description: "Japan’s top university known for STEM excellence.",
    short_info: {
      country: "Japan",
      university_type: "Public",
      total_students: 28000,
      launched: 1877,
    },
    photo: "/images/media/university_photos/3.jpg",
    logo: "/images/media/university_logos/utokyo-logo.png",
    video: "/public/Tokyo-University.mp4",
    thumbnail: "/images/university_thumbnails/universities/3-40.jpg",
    about_university: [
      {
        title: "Global Excellence",
        description:
          "Collaborates with top institutions and companies globally.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Engineering" }],
      postgraduate_programs: [{ name: "Robotics" }],
      doctoral_programs: [{ name: "Applied Physics" }],
    },
    scholarship: {
      short_description: "MEXT and university-funded aid available.",
      table: [
        {
          scholarship_name: "MEXT Scholarship",
          amount: "$1,000/month + tuition",
          eligibility_criteria: "International students via embassy selection",
          provider: "Japanese Government",
        },
      ],
      notes: [{ title: "Apply through embassy" }],
    },
    application_guide: {
      short_description: "Steps differ for each program.",
      guide_list: [
        {
          title: "Embassy Nomination",
          description: "First step for MEXT applicants.",
        },
      ],
      bottom_description: "Contact department for detailed guide.",
    },
  },
  {
    id: 4,
    name: "Technical University of Munich",
    slug: "technical-university-of-munich",
    description: "TUM is a top European university for innovation.",
    short_info: {
      country: "Germany",
      university_type: "Public",
      total_students: 48000,
      launched: 1868,
    },
    photo: "/images/media/university_photos/4.jpg",
    logo: "/images/media/university_logos/tum-logo.png",
    video: "/public/TUM-video.mp4",
    thumbnail: "/images/university_thumbnails/universities/4-40.jpg",
    about_university: [
      {
        title: "Excellence Initiative",
        description:
          "TUM is part of Germany’s Excellence Strategy and offers elite programs.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Computer Engineering" }],
      postgraduate_programs: [{ name: "Machine Learning" }],
      doctoral_programs: [{ name: "Data Engineering" }],
    },
    scholarship: {
      short_description: "Numerous scholarships for EU and non-EU students.",
      table: [
        {
          scholarship_name: "DAAD Scholarship",
          amount: "Variable",
          eligibility_criteria: "Academic merit, motivation letter",
          provider: "DAAD",
        },
      ],
      notes: [{ title: "Check DAAD website for more info" }],
    },
    application_guide: {
      short_description: "Application is online and mostly in English.",
      guide_list: [
        {
          title: "Uni-Assist Process",
          description: "International students apply via Uni-Assist.",
        },
      ],
      bottom_description: "Interview for some master's programs.",
    },
  },
  {
    id: 5,
    name: "University of Melbourne",
    slug: "university-of-melbourne",
    description: "Australia's leading comprehensive university.",
    short_info: {
      country: "Australia",
      university_type: "Public",
      total_students: 54000,
      launched: 1853,
    },
    photo: "/images/media/university_photos/5.jpg",
    logo: "/images/media/university_logos/melbourne-logo.png",
    video: "/public/melbourne-university.mp4",
    thumbnail: "/images/university_thumbnails/universities/5-40.jpg",
    about_university: [
      {
        title: "Academic Reputation",
        description:
          "Ranked #1 in Australia and top 50 worldwide for academic strength.",
      },
    ],
    programs: {
      undergraduate_programs: [{ name: "Law" }, { name: "Architecture" }],
      postgraduate_programs: [{ name: "Public Health" }],
      doctoral_programs: [{ name: "Law & Policy" }],
    },
    scholarship: {
      short_description:
        "Generous scholarships for local and international students.",
      table: [
        {
          scholarship_name: "Melbourne International Scholarship",
          amount: "Up to $10,000",
          eligibility_criteria: "Academic excellence",
          provider: "University of Melbourne",
        },
      ],
      notes: [{ title: "Automatically considered when applying" }],
    },
    application_guide: {
      short_description: "Standard online process via university portal.",
      guide_list: [
        {
          title: "Register Online",
          description: "Create an account on the university website.",
        },
      ],
      bottom_description: "No application fee for some programs.",
    },
  },
]; 
