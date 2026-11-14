// The entire site, as one object. Pages render from this.

export const shine = {
  meta: {
    title: "shine tomista",
    description:
      "3rd year CS @ UP Diliman, building at the edge of e-commerce and fintech.",
    email: "tinatomista@gmail.com",
  },

  nav: {
    logo: "shine tomista",
    links: [
      { label: "projects", href: "/projects" },
      { label: "experience", href: "/experience" },
      { label: "about", href: "/about" },
    ],
    contact: { label: "contact()", href: "mailto:tinatomista@gmail.com" },
  },

  hero: {
    wordmark: "shine",
    tagline:
      "3rd year CS @ UP Diliman, building at the edge of e-commerce and fintech.",
    ctas: [
      { label: "See projects →", href: "/projects", variant: "solid" },
      { label: "Say hi", href: "mailto:tinatomista@gmail.com", variant: "outline" },
    ],
    photo: "/images/hero.png",
    object: {
      roles: ["builder", "founder", "speaker"],
      school: "CS @ UP Diliman",
      into: ["e-commerce", "fintech"],
      status: "open to work",
    },
  },

  projects: [
    {
      index: 0,
      name: "UP Diliman OFA - AFA Platform",
      description:
        "A website for academic field activities applications, made for the University of the Philippines Office of Field Activities.",
    },
    {
      index: 1,
      name: "upcursor.com",
      description:
        "The revamped organization website of UP Association of Computer Science Majors (UP CURSOR)",
    },
    {
      index: 2,
      name: "UP CURSOR Eng’g O-week 2026 Booth Programming Challenge",
      description: "An online judge for programming challenges for freshmen",
    },
    {
      index: 3,
      name: "Kayu",
      description:
        "An escrow e-commerce marketplace app for the Philippines secondhand market",
    },
  ],

  experience: [
    {
      index: 0,
      role: "ACADEMIC AFFAIRS COMMITTEE HEAD",
      organization: "UP Association of Computer Science Majors (UP CURSOR)",
      years: "May 2026 - PRESENT",
      description:
        "Executive Committee member in charge of leading the Academic Affairs Committee, which implements the academic initiatives of the organization. Officer-in-charge for teams improving the academic welfare of the members (e.g. Review Sessions, Skills#, Website Development)",
      photos: [
        "/images/experience-0-1.png",
        "/images/experience-0-2.png",
        "/images/experience-0-3.png",
      ],
    },
    {
      index: 1,
      role: "FOUNDER & OWNER",
      organization:
        "kasushihouse / Crafty Cubs / Dainty Doll Boutique / Shai Vanille Rentals",
      years: "May 2025 - May 2026",
      description:
        "Scaled multiple small hobby businesses to ~₱50,000 in monthly revenue while a full-time student. Procured from international suppliers. Managed multiple business operations.",
      photos: [
        "/images/experience-1-1.png",
        "/images/experience-1-2.png",
        "/images/experience-1-3.png",
      ],
    },
    {
      index: 2,
      role: "TECHNICAL MANAGER",
      organization: "UST-SHS El Tigre Robotica",
      years: "September 2023 - May 2024",
      description:
        "Headed the Production, Web Development, and Inventory Committees. Taught Python and VEX IQ Programming to UST-SHS students.",
      photos: [
        "/images/experience-2-1.png",
        "/images/experience-2-2.jpg",
        "/images/experience-2-3.png",
      ],
    },
  ],

  about: {
    portrait: "/images/about-portrait.png",
    bio: "Hi! I’m Shine. I’m a person with a lot of interests, but my first love has always been Computer Science. I build new systems that solve problems. I love leading people and introducing change.",
    likes: [
      "Business",
      "E-commerce",
      "Artificial Intelligence",
      "Mathematics",
      "Software Development",
      "中文",
    ],
    currently: [
      "Building the AFA Platform for UPD OFA",
      "Revamping the UP CURSOR Website",
      "Planning for Kayu",
    ],
    gallery: [
      { src: null, aspect: "320 / 240" },
      { src: null, aspect: "373 / 240" },
      { src: null, aspect: "373 / 280" },
      { src: null, aspect: "373 / 240" },
      { src: null, aspect: "320 / 373" },
      { src: null, aspect: "373 / 280" },
    ],
  },

  undefined: {
    message: "Cannot read property of undefined",
    detail: "shine.undefined — this page does not exist on the object.",
  },
} as const;

export type Shine = typeof shine;
