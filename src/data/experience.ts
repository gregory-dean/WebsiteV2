export type ExperienceNode = {
  id: string;
  title: string;
  org?: string;
  period: string;
  summary?: string;
  children?: ExperienceNode[];
};

/**
 * Edit this file to update the Experience tree on the homepage.
 * Add a completed project as a child under a role, or as a new top-level node.
 */
export const experience: ExperienceNode[] = [
  {
    id: "kd-roofing",
    title: "Business Systems Analyst",
    org: "KD Roofing",
    period: "2026 — Present",
    summary:
      "Bridge business needs and technology — improving systems, processes, and how teams use tools day to day.",
  },
  {
    id: "evolve-security",
    title: "Cybersecurity Apprentice",
    org: "Evolve Security Academy",
    period: "2025",
    summary:
      "Hands-on cybersecurity training covering defensive and offensive fundamentals in a structured academy program.",
  },
  {
    id: "soiltech-wireless",
    title: "IT Technician",
    org: "Soiltech Wireless",
    period: "2024 — 2026",
    summary:
      "Supported systems, users, and wireless infrastructure — troubleshooting, maintenance, and day-to-day IT operations.",
  },
];
