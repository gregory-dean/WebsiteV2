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
      "Drive operational improvements by bridging business processes and technology. Design internal software, perform IT and security assessments, streamline workflows, and help teams adopt more effective systems.",
  },
  {
    id: "evolve-security",
    title: "Cybersecurity Apprentice",
    org: "Evolve Security Academy",
    period: "2025",
    summary:
      "Completed immersive, hands-on training in offensive and defensive cybersecurity through real-world labs covering penetration testing, threat detection, incident response, Active Directory, and security operations.",
  },
  {
    id: "soiltech-wireless",
    title: "IT Technician",
    org: "Soiltech Wireless",
    period: "2024 — 2026",
    summary:
      "Provided technical support for users, systems, and wireless infrastructure. Diagnosed hardware and software issues, maintained IT equipment, and ensured reliable day-to-day operations.",
  },
];
