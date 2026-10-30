export const photos: Record<string, { src: string; alt: string }> = {
  "black-star-run": {
    src: "/images/black-star-run.jpg",
    alt: "A green Black Star Run 10K poster fixed to a weathered wall on a street in Accra",
  },
  "auntie-ama": {
    src: "/images/auntie-ama.jpg",
    alt: "Auntie Ama at her Kaneshie waakye stall, with a painted sign above bowls of rice, shito, eggs, and gari",
  },
  "clay-and-loom": {
    src: "/images/clay-and-loom.jpg",
    alt: "Clay bowls, folded kente cloth, and a Clay & Loom paper bag on a wooden shop table",
  },
  "osu-table": {
    src: "/images/osu-table.jpg",
    alt: "A printed Osu Table menu beside grilled tilapia, jollof, and sobolo in the restaurant",
  },
  "sika-circle": {
    src: "/images/sika-circle.jpg",
    alt: "A Sika Circle savings passbook and Ghana cedi notes held across a wooden table",
  },
  "green-mile": {
    src: "/images/green-mile.jpg",
    alt: "A farmer beside cocoa sacks labelled Green Mile Farms at a weighing shed in Ghana",
  },
};

export function getPhoto(slug: string) {
  return photos[slug] ?? photos["clay-and-loom"];
}
