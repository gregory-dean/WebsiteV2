export const site = {
  name: "Gregory Dean",
  title: "Gregory Dean — Cybersecurity Practitioner",
  description:
    "Personal portfolio of Gregory Dean, a cybersecurity practitioner sharing projects, research, and writing.",
  url: "https://gregory-dean.com",
  email: "gregdeancyber@proton.me",
  links: {
    github: "https://github.com/gregory-dean",
    linkedin: "https://www.linkedin.com/in/gregorydean-/",
  },
  focus:
    "Defending systems, clarifying risk, and building practical security work.",
} as const;

export const navLinks = [
  { href: "/work/", label: "Work" },
  { href: "/about/", label: "About" },
  { href: "/contact/", label: "Contact" },
] as const;
