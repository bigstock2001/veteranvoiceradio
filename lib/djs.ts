// lib/djs.ts
export type DJ = {
  name: string;
  slug: string;
  stationSlug: "semper-fi-country" | "ranger-rockwave";
  showName: string;
  scheduleText: string; // e.g. "Mon–Fri • 6–10 AM CT"
  bio: string;
};

export type ShowSlot = {
  title: string;
  stationSlug: "semper-fi-country" | "ranger-rockwave";
  hosts: string; // simple for now
  scheduleText: string;
  description: string;
};

export const FALLBACK_DJS: DJ[] = [
  // Ranger Rockwave
  {
    name: "Tank and Lexi",
    slug: "tank-and-lexi",
    stationSlug: "ranger-rockwave",
    showName: "The Wake-Up Pit",
    scheduleText: "Schedule: TBD",
    bio: "High-energy mornings with veteran-style banter, music, and station updates.",
  },
  {
    name: "Sierra",
    slug: "sierra",
    stationSlug: "ranger-rockwave",
    showName: "Barracks Brunch",
    scheduleText: "Schedule: TBD",
    bio: "Midday vibes, veteran community shoutouts, and music that keeps you moving.",
  },
  {
    name: "Kodiak",
    slug: "kodiak",
    stationSlug: "ranger-rockwave",
    showName: "Recon Rockline",
    scheduleText: "Schedule: TBD",
    bio: "Rock deep-cuts, new finds, and a no-BS sound built for the long haul.",
  },
  {
    name: "Diesel",
    slug: "diesel",
    stationSlug: "ranger-rockwave",
    showName: "Motorpool Mixdown",
    scheduleText: "Schedule: TBD",
    bio: "Heavy rotation, workout fuel, and late-day reset with full-throttle energy.",
  },

  // Semper Fi Country
  {
    name: "Buck and Cassie",
    slug: "buck-and-cassie",
    stationSlug: "semper-fi-country",
    showName: "Reveille and Coffee",
    scheduleText: "Schedule: TBD",
    bio: "Morning show built on real conversation — stories, laughs, and country with backbone.",
  },
  {
    name: "Blaze Matthews",
    slug: "blaze-matthews",
    stationSlug: "semper-fi-country",
    showName: "Freedom and Firepower",
    scheduleText: "Schedule: TBD",
    bio: "Patriot energy, proud country cuts, and a voice that brings the heat.",
  },
  {
    name: "Charlie Rae",
    slug: "charlie-rae",
    stationSlug: "semper-fi-country",
    showName: "The Midday Report",
    scheduleText: "Schedule: TBD",
    bio: "Midday update style with music, community focus, and easy listening for the grind.",
  },
  {
    name: "Gunny",
    slug: "gunny",
    stationSlug: "semper-fi-country",
    showName: "Boots, Flag, Country",
    scheduleText: "Schedule: TBD",
    bio: "Tradition, pride, and country favorites — anchored by that unmistakable Gunny edge.",
  },
];

export const FALLBACK_SHOWS: ShowSlot[] = [
  // Ranger Rockwave
  {
    title: "The Wake-Up Pit",
    stationSlug: "ranger-rockwave",
    hosts: "Tank and Lexi",
    scheduleText: "Schedule: TBD",
    description: "Morning rock + banter + promos. Start the day loud.",
  },
  {
    title: "Barracks Brunch",
    stationSlug: "ranger-rockwave",
    hosts: "Sierra",
    scheduleText: "Schedule: TBD",
    description: "Midday rock with a laid-back pulse and community shoutouts.",
  },
  {
    title: "Recon Rockline",
    stationSlug: "ranger-rockwave",
    hosts: "Kodiak",
    scheduleText: "Schedule: TBD",
    description: "Music intel, deep cuts, and listener favorites.",
  },
  {
    title: "Motorpool Mixdown",
    stationSlug: "ranger-rockwave",
    hosts: "Diesel",
    scheduleText: "Schedule: TBD",
    description: "Hard-hitting sets for the afternoon grind and beyond.",
  },

  // Semper Fi Country
  {
    title: "Reveille and Coffee",
    stationSlug: "semper-fi-country",
    hosts: "Buck and Cassie",
    scheduleText: "Schedule: TBD",
    description: "Conversational mornings — real talk, laughs, and country.",
  },
  {
    title: "Freedom and Firepower",
    stationSlug: "semper-fi-country",
    hosts: "Blaze Matthews",
    scheduleText: "Schedule: TBD",
    description: "High-energy country with patriot edge.",
  },
  {
    title: "The Midday Report",
    stationSlug: "semper-fi-country",
    hosts: "Charlie Rae",
    scheduleText: "Schedule: TBD",
    description: "Midday rhythm with station updates and strong country rotation.",
  },
  {
    title: "Boots, Flag, Country",
    stationSlug: "semper-fi-country",
    hosts: "Gunny",
    scheduleText: "Schedule: TBD",
    description: "Classic and modern country rooted in service and pride.",
  },
];
