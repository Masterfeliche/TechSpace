// How TechSpace works: the manifesto, the builder loop, the three layers, the rhythm,
// the council and the products. This file is the single source for that content —
// the home page, /manifesto, /products and /join all read from it, and
// docs/MANIFESTO.md mirrors the manifesto for print and onboarding.

export const manifesto = {
  title: "The TechSpace Manifesto",
  lede:
    "TechSpace is where DIT students become people who ship products that real people use.",
  preamble: [
    "Silicon Valley is not a place. It is a loop: people build things, some of them work, and the people who succeed come back to teach, hire and back the next ones. Every turn of that loop makes the next one faster.",
    "We are building that loop at the Dar es Salaam Institute of Technology. Not by copying an address, but by copying the habits: build in public, ship to real users, teach what you learn, and lift the next builder up.",
  ],
  principles: [
    {
      title: "Shipped beats perfect.",
      body:
        "A live product with fifty users outranks a polished repository nobody ran. We measure work by what reaches people, not by what sits on a laptop.",
    },
    {
      title: "Real users, real problems.",
      body:
        "We build for DIT and Dar es Salaam first — timetables, parking, attendance, payments, the things we live next to every day. Problems we can touch are problems we can solve.",
    },
    {
      title: "Learn in public.",
      body:
        "Code, demos, write-ups and post-mortems are shared by default. Hoarded knowledge dies with the person who holds it; shared knowledge compounds.",
    },
    {
      title: "Pay it forward.",
      body:
        "Every builder who has shipped teaches one who hasn't yet. Mentorship is not a favour here — it is the price of membership, and the engine of everything else.",
    },
    {
      title: "Earn your seat by contribution.",
      body:
        "Status comes from what you shipped and who you helped, not from your year of study or your title. Anyone can rise; nobody coasts.",
    },
    {
      title: "Fail fast, fail safely, say so.",
      body:
        "Most products will not work. That is the point of trying. We end experiments honestly, write down why, and make the next attempt better.",
    },
  ],
  commitments: [
    "Show something working at demo day, every week you are on a team.",
    "Keep your code public unless there is a real reason not to.",
    "Mentor at least one newer member each semester once you have shipped.",
    "Tell the truth about what failed — in demos, post-mortems and reviews.",
    "Leave TechSpace stronger than you found it, and come back when you can.",
  ],
  closing:
    "We are not a club that talks about technology. We are a place that builds it. If that is what you want to do, you belong here.",
} as const;

/** The builder loop — every activity should move someone one step along it. */
export const flywheel = [
  { step: "Learn", body: "Open sessions and bootcamps build real fundamentals." },
  { step: "Build", body: "Small product teams turn skills into working software." },
  { step: "Ship", body: "Products go live with a URL, a repo and real users." },
  { step: "Teach", body: "Builders who shipped mentor the next cohort." },
  { step: "Lift", body: "Alumni hire, refer and back the builders behind them." },
] as const;

/** Three layers: open at the bottom, selective as you move up. */
export const layers = [
  {
    name: "Learn",
    tag: "Open to every DIT student",
    summary:
      "Weekly sessions along an engineering roadmap — every session ends with something you built, not just something you heard.",
    you: ["Attend weekly sessions", "Follow the roadmap at your pace", "Ship a first mentored mini-project"],
    output: "Junior builders with real fundamentals",
  },
  {
    name: "Build",
    tag: "By application",
    summary:
      "Cross-functional product teams of 4–6 — frontend, backend, design and a lead — with a mentor, a public repo, a live URL and one metric they own.",
    you: ["Join a product team", "Demo every Friday", "Ship to real users"],
    output: "Contributors with shipped work in their portfolio",
  },
  {
    name: "Launch",
    tag: "For products with traction",
    summary:
      "Products people actually use get incubated: pilots with DIT departments or local businesses, introductions to alumni, partners and funders.",
    you: ["Run a pilot", "Pitch at the showcase", "Grow it — or hand it on"],
    output: "Products and founders the community can stand behind",
  },
] as const;

/** The rhythm that keeps the community alive. */
export const rhythm = [
  {
    cadence: "Every week",
    items: [
      { title: "Demo Day", body: "Every team shows something working — five minutes, no slides required. The heartbeat of TechSpace." },
      { title: "Build Night", body: "Open working session: code together, unblock each other, pair with a mentor." },
      { title: "Teach-back", body: "One member teaches something they learned that week." },
    ],
  },
  {
    cadence: "Every quarter",
    items: [
      { title: "Hackathon", body: "A weekend sprint; the strongest ideas can become real product teams." },
      { title: "Open House", body: "New members join, teams recruit, and the roadmap restarts." },
      { title: "Post-mortem Night", body: "Teams share what failed and what they learned from it." },
    ],
  },
  {
    cadence: "Every year",
    items: [
      { title: "Showcase", body: "Live products, real users, invited partners and alumni." },
      { title: "State of TechSpace", body: "A public report: what shipped, who it served, what's next." },
    ],
  },
] as const;

/**
 * Leadership is a set of roles with clear responsibilities, held by members and rotated.
 * Add real people with `holder` (name) once they are confirmed — the site never shows
 * invented names or stock photos of people.
 */
export const council: {
  title: string;
  responsibility: string;
  holder?: string;
}[] = [
  { title: "Founder", responsibility: "Guards the culture, removes blockers and plans the handover so TechSpace outlives any one generation." },
  { title: "Council (3–5 members)", responsibility: "Decides which products get resources and who joins the Build layer. Seats rotate every semester." },
  { title: "Product Leads", responsibility: "Each owns one product: delivery, quality, the team's demo and its one metric." },
  { title: "Mentors", responsibility: "Senior members, alumni and lecturers who give a fixed two hours a week to teams." },
  { title: "Learning Lead", responsibility: "Runs the open Learn layer: sessions, roadmap and the first mentored projects." },
  { title: "Community Lead", responsibility: "Runs the rhythm — demo days, hackathons, open houses — and tells the community's story." },
];

export type ProductStatus = "Live" | "Building" | "Recruiting" | "Idea";

/**
 * Products built by TechSpace teams. Only list a `url` or `repo` that really works.
 * `metric` is the one number the team owns.
 */
export const products: {
  name: string;
  problem: string;
  status: ProductStatus;
  stack: string[];
  metric?: string;
  url?: string;
  repo?: string;
  flagship?: boolean;
}[] = [
  {
    name: "Kairos",
    problem:
      "The DIT teaching timetable is a 160-page PDF. Kairos turns it into a fast, mobile-first timetable with live class status, reschedules and venue heads-ups from class reps.",
    status: "Live",
    stack: ["Next.js", "FastAPI", "PostgreSQL"],
    metric: "Weekly active students",
    url: "https://kairos.deploy.tz",
    repo: "https://github.com/Masterfeliche/kairos",
    flagship: true,
  },
  {
    name: "Smart Parking",
    problem: "Find a free parking bay on campus before you arrive, instead of circling.",
    status: "Recruiting",
    stack: ["Next.js", "IoT sensors"],
  },
  {
    name: "Attendance",
    problem: "Fast, fair digital attendance for classes, labs and community sessions.",
    status: "Idea",
    stack: ["QR", "Mobile-first web"],
  },
  {
    name: "Campus Navigation",
    problem: "Help new students and visitors find any room at DIT on their phone.",
    status: "Idea",
    stack: ["Maps", "Mobile-first web"],
  },
];

/** The questions asked by the /join application. */
export const applicationTracks = [
  { value: "learn", label: "Learn — I'm starting out and want the roadmap" },
  { value: "build", label: "Build — I want to join a product team" },
  { value: "mentor", label: "Mentor — I've shipped and want to teach" },
  { value: "partner", label: "Partner — I represent a company, lab or department" },
] as const;
