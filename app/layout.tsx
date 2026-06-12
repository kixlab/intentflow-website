import type { Metadata } from "next";
import { IBM_Plex_Sans, Lato } from "next/font/google";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const SITE_URL = "https://intentflow-kixlab.netlify.app";
const TITLE =
  "IntentFlow: Investigating Fluid Dynamics of Intent Communication in Generative AI";
const DESCRIPTION =
  "We conduct a systematic literature review of 46 HCI papers and identify four core aspects of intent communication: Articulation, Exploration, Management, and Synchronization. IntentFlow, a research probe, embodies all four for a writing task. A comparative study (N=12) shows comprehensive support reduces corrections, increases exploratory refinement, and lowers cognitive load. DIS 2026.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "IntentFlow — DIS 2026",
  description: DESCRIPTION,
  keywords: [
    "intent communication",
    "generative AI",
    "large language models",
    "LLM interface",
    "HCI",
    "human-computer interaction",
    "DIS 2026",
    "intent articulation",
    "intent exploration",
    "intent management",
    "intent synchronization",
    "writing support",
    "AI writing tool",
    "KIXLAB",
    "KAIST",
  ],
  authors: [
    { name: "Yoonsu Kim", url: "https://yoonsu0816.github.io/" },
    { name: "Kihoon Son", url: "https://kihoon-son.github.io/" },
    { name: "Seoyoung Kim" },
    { name: "Brandon Chin" },
    { name: "Juho Kim", url: "https://juhokim.com" },
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "IntentFlow",
    images: [
      {
        url: "/assets/img/teaser.png",
        width: 1200,
        height: 630,
        alt: "IntentFlow system interface showing Chat Panel, Intent Panel, and Output Panel",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/assets/img/teaser.png"],
  },
  other: {
    // Google Scholar indexing meta tags
    citation_title: TITLE,
    citation_author: [
      "Kim, Yoonsu",
      "Son, Kihoon",
      "Kim, Seoyoung",
      "Chin, Brandon",
      "Kim, Juho",
    ],
    citation_publication_date: "2026",
    citation_conference_title:
      "Proceedings of the 2026 ACM Designing Interactive Systems Conference",
    citation_doi: "10.1145/3800645.3812999",
    citation_arxiv_id: "2507.22134",
    citation_pdf_url: `${SITE_URL}/assets/intentflow_paper.pdf`,
    citation_abstract: DESCRIPTION,
    citation_language: "en",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${ibmPlexSans.variable} ${lato.variable}`}>
      <body
        className="min-h-full bg-white text-[#1a1a2e] antialiased"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
