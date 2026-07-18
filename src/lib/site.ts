export const siteConfig = {
  name: "TechSpace",
  shortName: "TechSpace",
  tagline: "Building the Next Generation of Software Engineers at DIT.",
  description:
    "The official student technology community of the Dar es Salaam Institute of Technology. Practical engineering, real projects, and a path toward future AI innovators.",
  url: "https://techspace.tz",
  locale: "en_TZ",
  links: {
    github: "https://github.com/dit-techspace",
    linkedin: "https://www.linkedin.com/company/dit-techspace",
    instagram: "https://www.instagram.com/dit.techspace",
    email: "mailto:techspace@dit.ac.tz",
    join: "/#join",
  },
  nav: [
    { label: "About", href: "/#about" },
    { label: "Learning", href: "/#learning" },
    { label: "Projects", href: "/#projects" },
    { label: "Events", href: "/events" },
    { label: "Leadership", href: "/#leadership" },
    { label: "Join", href: "/#join" },
  ],
} as const;

export const vision =
  "A powerhouse of student innovation at DIT, shaping Africa's next generation of technology leaders.";

export const mission =
  "To equip DIT students with world-class software engineering skills, cultivate a culture of innovation and product development, and progressively prepare members for the future of Artificial Intelligence through practical learning, collaboration, and real-world projects.";

export const values = [
  {
    title: "Excellence",
    description:
      "We hold a high bar for craft, clarity, and the quality of everything we ship.",
  },
  {
    title: "Hands-on Learning",
    description:
      "Theory becomes skill through deliberate practice, code, and real product work.",
  },
  {
    title: "Collaboration",
    description:
      "We grow faster together through mentorship, reviews, and shared ownership.",
  },
  {
    title: "Innovation",
    description:
      "We solve meaningful problems with disciplined creativity and engineering rigor.",
  },
  {
    title: "Integrity",
    description:
      "We build with honesty, accountability, and respect for people and systems.",
  },
  {
    title: "Community",
    description:
      "TechSpace is a place where ambitious builders support one another to rise.",
  },
  {
    title: "Continuous Learning",
    description:
      "We stay curious, iterate often, and treat improvement as a permanent practice.",
  },
] as const;

export const pillars = [
  {
    title: "Learn",
    description: "Weekly software engineering sessions grounded in fundamentals and craft.",
    items: ["Software foundations", "Frontend & backend", "System design", "Code reviews"],
  },
  {
    title: "Build",
    description: "Real products that solve campus and community problems end to end.",
    items: ["Product teams", "MVP development", "Deployment", "Documentation"],
  },
  {
    title: "Collaborate",
    description: "Hackathons, mentorship, and open source as the culture of shared ownership.",
    items: ["Hackathons", "Mentorship", "Open Source", "Peer learning"],
  },
  {
    title: "Innovate",
    description:
      "Preparing for Artificial Intelligence, Cybersecurity, Robotics, and IoT once the engineering core is strong.",
    items: ["Artificial Intelligence", "Cybersecurity", "Robotics", "IoT"],
  },
] as const;

export const teamModel = {
  title: "Cross-functional teams that ship.",
  description:
    "TechSpace organizes builders into product teams — the same operating model used by serious engineering organizations. Members don't just learn in isolation. They design, implement, and deliver together.",
  rule: "Every team balances experienced members with new builders. Mentorship is structural, not optional.",
  roles: [
    {
      title: "Frontend",
      description: "Interfaces, accessibility, and product experience.",
    },
    {
      title: "Backend",
      description: "APIs, data models, and reliable systems.",
    },
    {
      title: "UI/UX",
      description: "Flows, usability, and visual clarity.",
    },
    {
      title: "Project Manager",
      description: "Scope, delivery rhythm, and coordination.",
    },
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

export const projects = [
  {
    title: "Smart Parking System",
    description:
      "A campus parking platform that tracks bay availability and streamlines vehicle flow in real time.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "IoT Sensors"],
    status: "In Progress",
    github: "https://github.com/dit-techspace",
    demo: "#",
  },
  {
    title: "Attendance System",
    description:
      "A reliable digital attendance solution built for classrooms, labs, and community sessions.",
    stack: ["Next.js", "Prisma", "QR Auth"],
    status: "Live",
    github: "https://github.com/dit-techspace",
    demo: "#",
  },
  {
    title: "Campus Navigation",
    description:
      "An interactive wayfinding app that helps students and visitors navigate DIT with clarity.",
    stack: ["React Native", "Maps API", "TypeScript"],
    status: "Prototype",
    github: "https://github.com/dit-techspace",
    demo: "#",
  },
  {
    title: "TechSpace Website",
    description:
      "The public face of TechSpace — designed to communicate engineering culture and ambition.",
    stack: ["Next.js", "Tailwind CSS", "Framer Motion"],
    status: "Live",
    github: "https://github.com/dit-techspace",
    demo: "#",
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

export const founders = [
  {
    name: "Alex Mwangi",
    title: "Founder",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Amina Hassan",
    title: "Founder",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
  },
] as const;

export const leadershipTeam = [
  {
    name: "Daniel Okello",
    title: "President",
    responsibility: "Sets strategic direction and represents TechSpace across DIT.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Grace Kimaro",
    title: "Vice President",
    responsibility: "Supports operations and ensures programs run with consistency.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Brian Chacha",
    title: "Chief Technology Officer (CTO)",
    responsibility: "Leads the technical direction of TechSpace.",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Neema Juma",
    title: "Project Manager",
    responsibility: "Coordinates product delivery across member engineering teams.",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Joseph Mushi",
    title: "Club Coordinator",
    responsibility: "Organizes sessions, logistics, and day-to-day community flow.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Sarah Lyimo",
    title: "Social Media Manager",
    responsibility: "Shapes TechSpace's public voice across digital channels.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80",
  },
] as const;
