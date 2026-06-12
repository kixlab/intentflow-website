import Hero from "@/components/Hero";
import TlDr from "@/components/TlDr";
import FourAspects from "@/components/FourAspects";
import SystemSection from "@/components/SystemSection";
import Findings from "@/components/Findings";
import Implications from "@/components/Implications";
import Citation from "@/components/Citation";
import ScrollAnimations from "@/components/ScrollAnimations";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ScholarlyArticle",
  name: "IntentFlow: Investigating Fluid Dynamics of Intent Communication in Generative AI",
  headline:
    "IntentFlow: Investigating Fluid Dynamics of Intent Communication in Generative AI",
  description:
    "We conduct a systematic literature review of 46 HCI papers and identify four core aspects of intent communication: Articulation, Exploration, Management, and Synchronization. IntentFlow, a research probe, embodies all four for a writing task. A comparative study (N=12) shows comprehensive support reduces corrections, increases exploratory refinement, and lowers cognitive load.",
  url: "https://intentflow-kixlab.netlify.app",
  sameAs: [
    "https://arxiv.org/abs/2507.22134",
    "https://doi.org/10.1145/3800645.3812999",
  ],
  author: [
    {
      "@type": "Person",
      name: "Yoonsu Kim",
      affiliation: { "@type": "Organization", name: "KAIST" },
      url: "https://yoonsu0816.github.io/",
    },
    {
      "@type": "Person",
      name: "Kihoon Son",
      affiliation: { "@type": "Organization", name: "KAIST" },
      url: "https://kihoon-son.github.io/",
    },
    {
      "@type": "Person",
      name: "Seoyoung Kim",
      affiliation: { "@type": "Organization", name: "KAIST" },
    },
    {
      "@type": "Person",
      name: "Brandon Chin",
      affiliation: { "@type": "Organization", name: "UC Berkeley" },
    },
    {
      "@type": "Person",
      name: "Juho Kim",
      affiliation: { "@type": "Organization", name: "KAIST" },
      url: "https://juhokim.com",
    },
  ],
  datePublished: "2026",
  publisher: {
    "@type": "Organization",
    name: "ACM",
    url: "https://www.acm.org",
  },
  isPartOf: {
    "@type": "Event",
    name: "ACM Designing Interactive Systems Conference 2026 (DIS 2026)",
    location: { "@type": "Place", name: "Singapore" },
  },
  keywords:
    "intent communication, generative AI, LLM, HCI, DIS 2026, intent articulation, intent exploration, intent management, intent synchronization",
  image: "https://intentflow-kixlab.netlify.app/assets/img/teaser.png",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <ScrollAnimations />
        <Hero />
        <div className="animate-on-scroll">
          <TlDr />
        </div>
        <div className="animate-on-scroll">
          <FourAspects />
        </div>
        <div className="animate-on-scroll">
          <SystemSection />
        </div>
        <div className="animate-on-scroll">
          <Findings />
        </div>
        <div className="animate-on-scroll">
          <Implications />
        </div>
        <div className="animate-on-scroll">
          <Citation />
        </div>
      </main>
    </>
  );
}
