import type { Metadata } from "next";
import { DM_Sans, Source_Serif_4, Syne } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Nav } from "@/components/Nav";
import { site } from "@/lib/site";
import "./globals.css";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  weight: ["400", "600"],
});

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  metadataBase: new URL(site.url),
  openGraph: {
    title: site.title,
    description: site.description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${dmSans.variable} ${sourceSerif.variable} h-full antialiased`}
    >
      <body className="relative flex min-h-full flex-col bg-paper text-ink">
        <Grain />
        <Nav />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
