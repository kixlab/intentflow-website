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

export const metadata: Metadata = {
  metadataBase: new URL("https://kixlab.github.io/prj-intentflow-website"),
  title: "IntentFlow — DIS 2026",
  description:
    "IntentFlow: Investigating Fluid Dynamics of Intent Communication in Generative AI. DIS 2026, Singapore.",
  openGraph: {
    title: "IntentFlow: Investigating Fluid Dynamics of Intent Communication in Generative AI",
    description:
      "A research probe integrating Articulation, Exploration, Management, and Synchronization to support fluid intent communication with generative AI. DIS 2026.",
    images: [{ url: "/assets/img/teaser.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
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
