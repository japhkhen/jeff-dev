export const profile = {
  name: "Jeff Dev",
  role: "Graphic designer",
  location: "East Legon, Accra, Ghana",
  address: "12 Lagos Avenue, East Legon, Accra",
  email: "hello@jeffdev.studio",
  availability: "Taking new projects from November",
  phones: [
    { display: "025 620 6383", href: "tel:+233256206383" },
    { display: "055 314 0985", href: "tel:+233553140985" },
  ],
  whatsapp: {
    display: "055 314 0985",
    href: "https://wa.me/233553140985",
  },
  socials: [
    { label: "Instagram", href: "https://instagram.com/jeffdev.accra" },
    { label: "Behance", href: "https://www.behance.net/jeffdevgh" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/jeffdevgh" },
    { label: "GitHub", href: "https://github.com/jeffdevgh" },
  ],
  cv: "/jeff-dev-cv.pdf",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Me" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
] as const;

export type Skill = {
  name: string;
  level: number;
  group: "Design" | "Development";
  featured?: boolean;
};

export const skills: Skill[] = [
  { name: "Brand identity", level: 94, group: "Design", featured: true },
  { name: "Visual design", level: 91, group: "Design", featured: true },
  { name: "Typography", level: 88, group: "Design", featured: true },
  { name: "Figma", level: 93, group: "Design", featured: true },
  { name: "Illustrator", level: 86, group: "Design", featured: true },
  { name: "Photoshop", level: 80, group: "Design", featured: true },
  { name: "Next.js", level: 88, group: "Development" },
  { name: "TypeScript", level: 84, group: "Development" },
  { name: "React", level: 90, group: "Development" },
  { name: "Tailwind CSS", level: 92, group: "Development" },
  { name: "Node.js", level: 74, group: "Development" },
  { name: "Accessibility", level: 78, group: "Development" },
];

export type TimelineItem = {
  period: string;
  title: string;
  org: string;
  place: string;
  detail: string;
};

export const experience: TimelineItem[] = [
  {
    period: "2023 — Present",
    title: "Graphic designer",
    org: "Jeff Dev Studio",
    place: "East Legon, Accra",
    detail:
      "Independent practice for shops, startups, and community groups. I lead the brand, the interface, and the frontend, and I stay until the work is live.",
  },
  {
    period: "2021 — 2023",
    title: "Product designer",
    org: "Palm & Pixel",
    place: "Airport City, Accra",
    detail:
      "Designed marketing sites and in-app flows for fintech and logistics clients. Introduced a shared component library and sat with engineers through the build.",
  },
  {
    period: "2019 — 2021",
    title: "Junior frontend developer",
    org: "Makers Ghana",
    place: "Labone, Accra",
    detail:
      "Built marketing pages and dashboards in React. Learned to design for mid-range Android phones and patchy networks, which still shapes how I ship work.",
  },
  {
    period: "2018",
    title: "Design intern",
    org: "Studio Labone",
    place: "Labone, Accra",
    detail:
      "Supported packaging and social campaigns for food brands. First serious practice with type, colour, and print that has to survive a market stall.",
  },
];

export const education: TimelineItem[] = [
  {
    period: "2016 — 2020",
    title: "BSc Information Technology",
    org: "University of Ghana",
    place: "Legon, Accra",
    detail:
      "Software engineering, databases, and human-computer interaction. I took design jobs for student groups between lectures.",
  },
  {
    period: "2021",
    title: "Certificate in Visual Communication",
    org: "Design & Technology Institute",
    place: "Accra",
    detail:
      "A focused programme on identity systems, layout, and presenting work to a client who has to make a decision that week.",
  },
];

export type Category = "Development" | "Branding" | "Product design";

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  category: Category;
  location: string;
  role: string;
  summary: string;
  overview: string;
  challenge: string;
  work: string[];
  outcome: string;
  technologies: string[];
  featured: boolean;
  palette?: string[];
};

export const projects: Project[] = [
  {
    slug: "sika-circle",
    title: "Sika Circle",
    client: "Sika Circle Susu",
    year: "2025",
    category: "Development",
    location: "Kumasi and Accra",
    role: "Product design and frontend",
    summary:
      "A mobile-first ledger for a susu group, so members can see contributions without chasing a screenshot in WhatsApp.",
    overview:
      "Sika Circle collects weekly savings from members in Kumasi and a smaller circle in Accra. Treasurers were keeping paper books and photographing the pages. A smudged figure was enough to start an argument.",
    challenge:
      "The people collecting the money are not accountants. Many members open the link on a small Android phone, outdoors, on a prepaid data bundle.",
    work: [
      "Sat with two treasurers on a Saturday and sketched the flow on paper before opening Figma.",
      "Designed three screens: this week, my balance, and the group total.",
      "Built the interface in Next.js so it opens in the browser, with no app store and no account wall for a first look.",
      "Kept the type large and the contrast high for use in bright sun.",
    ],
    outcome:
      "Treasurers send one link after each collection. Members check their own balance, and the end-of-month dispute has mostly gone quiet.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    featured: true,
    palette: ["#12352a", "#0e6b3f", "#f3efe6", "#161412"],
  },
  {
    slug: "clay-and-loom",
    title: "Clay & Loom",
    client: "Clay & Loom",
    year: "2024",
    category: "Branding",
    location: "Osu, Accra",
    role: "Identity and packaging",
    summary:
      "A full identity for a home shop selling ceramics and woven goods, from the wordmark to the sticker on the tissue paper.",
    overview:
      "Clay & Loom opened a small shop off Oxford Street, selling stoneware from Aburi and cloth from weaving towns nearby. The founder had a good eye and no system. Every Instagram post looked like a different shop.",
    challenge:
      "The brand had to feel handmade without looking unfinished, and it had to hold together on a paper bag, a tiny sticker, and a phone screen.",
    work: [
      "Drew a wordmark that pairs a quiet serif with a plain sans for the smaller lines.",
      "Set the palette from clay, leaf, coal, and unbleached paper.",
      "Designed stickers, bag stamps, and a set of post templates the founder can edit herself.",
      "Wrote a four-page guide so a new member of staff can post without guessing.",
    ],
    outcome:
      "The shop reads as one place now. Wholesale buyers recognise the bag before they read the name.",
    technologies: ["Illustrator", "Photoshop", "Figma", "Brand guidelines"],
    featured: true,
    palette: ["#a34b32", "#0e6b3f", "#161412", "#f3efe6"],
  },
  {
    slug: "osu-table",
    title: "Osu Table",
    client: "Osu Table",
    year: "2025",
    category: "Product design",
    location: "Osu, Accra",
    role: "Brand, menu, and website",
    summary:
      "A neighbourhood restaurant's name, printed menu, and a site light enough to open while you are already in the queue.",
    overview:
      "The owners were renaming a tired chop bar and wanted something warmer than a generic grill. They also needed a menu guests could open when the paper copies had run out.",
    challenge:
      "The food is the point. The design could not look like a hotel brochure, and the site could not depend on a heavy photo gallery.",
    work: [
      "Set the tone on one page: wood, palm green, and the price in plain figures.",
      "Designed a one-fold menu and a matching set of Instagram covers.",
      "Built a short Next.js site with today's menu, a map pin, and a WhatsApp button.",
      "Compressed every photograph so the page stays kind to mobile data.",
    ],
    outcome:
      "Guests read the menu from their phones. When a dish changes, the studio updates the page the same day.",
    technologies: ["Figma", "Next.js", "Tailwind CSS", "Illustrator"],
    featured: true,
    palette: ["#0e6b3f", "#f3efe6", "#8c4a24", "#161412"],
  },
  {
    slug: "green-mile",
    title: "Green Mile Farms",
    client: "Green Mile Farms",
    year: "2024",
    category: "Development",
    location: "Eastern Region and Accra",
    role: "Interface design and frontend",
    summary:
      "A delivery board for a cocoa cooperative, so clerks in town and the buyer in Accra look at the same numbers.",
    overview:
      "Green Mile buys cocoa from farmers around Suhum and Koforidua and sells to a buyer in Accra. Clerks were texting weights. The Accra office retyped them into a spreadsheet, and the two lists drifted apart every week.",
    challenge:
      "The clerks share a few phones. The interface had to be obvious in bright sun, with large tap targets and almost no training.",
    work: [
      "Mapped the real day: weigh, record the farmer, mark the sack, confirm in Accra.",
      "Designed a board for four towns, with a clear state for sacks not yet received.",
      "Built the frontend in Next.js and TypeScript against a simple data shape the cooperative can replace later.",
      "Tested the screens with a clerk in Koforidua, then enlarged the type.",
    ],
    outcome:
      "The Accra buyer checks one board instead of a chain of messages. A missing sack shows up the same day.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    featured: false,
    palette: ["#e7f2ea", "#0e6b3f", "#161412", "#f3efe6"],
  },
  {
    slug: "black-star-run",
    title: "Black Star Run",
    client: "Black Star Run",
    year: "2023",
    category: "Branding",
    location: "Accra",
    role: "Event identity and landing page",
    summary:
      "The name, poster, bib, and signup page for a 10K that raises money for a children's ward.",
    overview:
      "A group of nurses and old Legon friends wanted a race on Independence weekend, starting near Black Star Square and finishing toward Osu. They had a cause and a route. They did not have a mark anyone would wear on a shirt.",
    challenge:
      "It had to feel like Accra, not a downloaded sports template, and it had to stay readable on a bib at arm's length.",
    work: [
      "Built the identity around one gold star on a deep green field.",
      "Drew the poster, the bib, and a volunteer sticker from the same lockup.",
      "Designed and built a one-page site with the route, the start time, and a clear place to register interest.",
    ],
    outcome:
      "They filled the first wave of bibs. The poster was still on noticeboards in Osu a month later.",
    technologies: ["Illustrator", "Figma", "Next.js", "Print"],
    featured: false,
    palette: ["#10241c", "#d7c39a", "#f3efe6", "#0e6b3f"],
  },
  {
    slug: "auntie-ama",
    title: "Auntie Ama Waakye",
    client: "Auntie Ama Waakye",
    year: "2023",
    category: "Branding",
    location: "Kaneshie, Accra",
    role: "Stall identity and packaging",
    summary:
      "A stall sign, sauce labels, and a takeaway sleeve for a waakye seller who was tired of being known only as the one near the taxi rank.",
    overview:
      "Auntie Ama has sold waakye in Kaneshie for years. The food had a following. The stall had a handwritten board that washed out in the rain. She wanted office workers to send a rider for her by name.",
    challenge:
      "Print had to survive steam, oil, and a sign writer who would reproduce the board by hand if the file was too fussy.",
    work: [
      "Set a bold name in a face a sign writer can follow.",
      "Limited the colours to red, gold, and cream so the paint could be matched.",
      "Designed a shito label and a paper sleeve with the name large enough to read across the rank.",
      "Left a measured grid so the painter could scale the sign on site.",
    ],
    outcome:
      "Riders ask for Auntie Ama by name. The sleeve is the thing people photograph.",
    technologies: ["Illustrator", "Photoshop", "Print", "Signage"],
    featured: false,
    palette: ["#8c2f2f", "#e2b15a", "#fffaf3", "#161412"],
  },
];

export const categories = [
  "All",
  "Development",
  "Branding",
  "Product design",
] as const;

export type Filter = (typeof categories)[number];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}

export const services = [
  {
    title: "Brand identity",
    text: "Names, marks, colour, and type that stay recognisable on a bag, a signboard, and a phone.",
  },
  {
    title: "Print and signage",
    text: "Posters, menus, labels, and stall signs drawn so a printer or a sign writer can reproduce them cleanly.",
  },
  {
    title: "Websites",
    text: "A site in the same type and colour as the print, so the brand does not change when it goes online.",
  },
];

export const steps = [
  {
    number: "01",
    title: "A real conversation",
    text: "In the studio, on a call, or over WhatsApp. I want the constraint: budget, deadline, and who the customer is.",
  },
  {
    number: "02",
    title: "A short direction",
    text: "Type, colour, and one screen, before any long deck. You should be able to say yes or no in a sitting.",
  },
  {
    number: "03",
    title: "Design and build",
    text: "I do both, so the site does not drift away from the brand once the file leaves Figma.",
  },
  {
    number: "04",
    title: "Handover",
    text: "Launch, a walkthrough, and the files. A text change should not require a new contract.",
  },
];

export const testimonials = [
  {
    quote:
      "Jeff gave the restaurant a name we were proud to put on the sign, then built the menu site the same week. Guests still mention the colours.",
    name: "Ama Serwaa Boateng",
    role: "Owner, Osu Table",
  },
  {
    quote:
      "Our treasurers used to argue over WhatsApp screenshots. The Sika Circle ledger ended that. He designed it with the people who actually collect the money.",
    name: "Kwame Asare",
    role: "Coordinator, Sika Circle",
  },
];

export const principles = [
  {
    title: "Design for the phone people own",
    text: "If it only looks right on a new laptop in a dark room, it is not finished. Most of my clients' customers are on a mid-range Android.",
  },
  {
    title: "One decision, not two vendors",
    text: "The brand and the website should look like they were chosen together. That is why I design and build in the same studio.",
  },
  {
    title: "Plain language",
    text: "A client in Accra needs a clear recommendation, not a deck full of jargon. I say what I would do, and why.",
  },
];
