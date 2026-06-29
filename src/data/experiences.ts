import { Experience } from "@/types/experience";

const categories = ["Adventure", "Culture", "Food", "Nature", "Wellness"];
const destinations = [
  "Kyoto",
  "Marrakech",
  "Reykjavik",
  "Lisbon",
  "Cusco",
  "Cape Town",
  "Bali",
  "Vancouver",
  "Queenstown",
  "Tbilisi",
];
const descriptors = [
  "Sunrise",
  "Midnight",
  "Hidden",
  "Coastal",
  "Golden",
  "Wild",
  "Lantern",
  "Summit",
  "Salt",
  "Harvest",
];
const formats = [
  "Trail",
  "Table",
  "Retreat",
  "Circuit",
  "Expedition",
  "Studio",
  "Escape",
  "Journey",
  "Camp",
  "Walk",
];
const seasons = ["Spring", "Summer", "Autumn", "Winter"];
const groupSizes = ["Up to 6 guests", "Up to 10 guests", "Up to 12 guests", "Private group"];

export const experiences: Experience[] = Array.from({ length: 100 }, (_, index) => {
  const category = categories[index % categories.length];
  const destination = destinations[index % destinations.length];
  const descriptor = descriptors[index % descriptors.length];
  const format = formats[Math.floor(index / 10) % formats.length];
  const season = seasons[index % seasons.length];
  const durationDays = 2 + (index % 7);
  const price = 180 + (index % 10) * 35 + Math.floor(index / 10) * 12;
  const rating = Number((4.2 + (index % 8) * 0.09).toFixed(1));
  const title = `${descriptor} ${destination} ${format}`;

  return {
    id: index + 1,
    title,
    category,
    destination,
    durationDays,
    price,
    rating,
    summary: `${category} experience in ${destination} with local hosts, small-group pacing, and carefully planned moments.`,
    description: `${title} is designed for travelers who want a focused itinerary with enough flexibility to explore independently. Expect a balance of guided highlights, local food, neighborhood discoveries, and time to absorb the atmosphere of ${destination}.`,
    season,
    groupSize: groupSizes[index % groupSizes.length],
    highlights: [
      `Guided ${category.toLowerCase()} itinerary through ${destination}`,
      `Signature meal and neighborhood recommendations curated for ${season.toLowerCase()} travel`,
      `${durationDays}-day pace with small-group coordination and local insight`,
    ],
  };
});
