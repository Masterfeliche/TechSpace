export const siteConfig = {
  name: "TechSpace",
  shortName: "TechSpace",
  tagline: "Build things people actually use.",
  description:
    "TechSpace is the builder community of the Dar es Salaam Institute of Technology: students learn, build in product teams, ship to real users, and teach the next builder.",
  url: "https://techspace.tz",
  locale: "en_TZ",
  links: {
    github: "https://github.com/dit-techspace",
    linkedin: "https://www.linkedin.com/company/dit-techspace",
    instagram: "https://www.instagram.com/dit.techspace",
    email: "mailto:techspace@dit.ac.tz",
    // Replace with your TechSpace WhatsApp community invite URL
    whatsapp: "https://chat.whatsapp.com/techspace-dit",
    join: "/join",
  },
  nav: [
    { label: "Manifesto", href: "/manifesto" },
    { label: "How it works", href: "/#how-it-works" },
    { label: "Products", href: "/products" },
    { label: "Events", href: "/events" },
    { label: "Leadership", href: "/#leadership" },
  ],
} as const;

export const roadmap = [
  {
    title: "Software Foundations",
    description:
      "Programming fundamentals, data structures, version control, and problem-solving discipline.",
  },
  {
    title: "Frontend Engineering",
    description:
      "Modern interfaces with React, accessibility, performance, and thoughtful product UX.",
  },
  {
    title: "Backend Engineering",
    description:
      "APIs, databases, authentication, reliability, and clean service architecture.",
  },
  {
    title: "Cloud Engineering",
    description:
      "Deployments, CI/CD, observability, and scalable infrastructure for real products.",
  },
  {
    title: "Artificial Intelligence",
    description:
      "Applied AI for engineers who already understand systems, data, and production software.",
  },
] as const;

export const events = [
  {
    title: "Weekly Sessions",
    description:
      "Hands-on sessions covering software craft, architecture, and collaborative building.",
    cadence: "Every week",
  },
  {
    title: "Virtual Coding",
    description:
      "Remote pair programming and focused build nights for members across schedules.",
    cadence: "Bi-weekly",
  },
  {
    title: "Monthly Hackathons",
    description:
      "Intense product sprints where teams ship working demos under real constraints.",
    cadence: "Monthly",
  },
  {
    title: "Tech Talks",
    description:
      "Talks from builders, alumni, and industry practitioners on engineering and product.",
    cadence: "Ongoing",
  },
] as const;

/** Set to an event object to feature it, or null for the empty state. */
export const upcomingEvent: {
  title: string;
  description: string;
  dateLabel: string;
  location: string;
  href?: string;
} | null = null;

export const pastEvents = [
  {
    title: "Fullstack Development Bootcamp",
    summary:
      "A six-week hands-on program where members built end-to-end web applications — from frontend interfaces to backend APIs and deployment.",
    category: "Bootcamp",
    period: "6 weeks",
    status: "Completed",
    highlights: ["Frontend", "Backend", "Deployment", "Team projects"],
    image: {
      src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1200&q=80",
      alt: "Students collaborating on laptops during a fullstack development bootcamp",
    },
  },
  {
    title: "Data Safari AI Sessions",
    summary:
      "Weekly Artificial Intelligence learning sessions running across two semesters — building intuition, practice, and community around applied AI.",
    category: "Series",
    period: "2 semesters",
    status: "Completed",
    highlights: ["AI fundamentals", "Weekly practice", "Peer learning"],
    image: {
      src: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",
      alt: "Developers exploring artificial intelligence concepts in a collaborative workshop",
    },
  },
  {
    title: "Campus Hackathon Sprint",
    summary:
      "A focused product sprint where teams shipped working demos under real constraints and presented outcomes to the community.",
    category: "Hackathon",
    period: "Weekend",
    status: "Completed",
    highlights: ["Prototyping", "Teamwork", "Demos"],
    image: {
      src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
      alt: "Teams collaborating intensely during a campus hackathon",
    },
  },
  {
    title: "Engineering Tech Talk Night",
    summary:
      "An evening of talks from builders and practitioners on software craft, product thinking, and careers in technology.",
    category: "Talk",
    period: "Evening series",
    status: "Completed",
    highlights: ["Industry insights", "Q&A", "Community"],
    image: {
      src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1200&q=80",
      alt: "Speaker presenting at a technology talk event",
    },
  },
] as const;

export const heroImage = {
  src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1600&q=80",
  alt: "Software engineers collaborating around laptops in a modern workspace",
} as const;

export const eventsPageHeroImage = {
  src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1600&q=80",
  alt: "Community members collaborating during a TechSpace learning session",
} as const;
