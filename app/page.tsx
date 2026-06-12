import Hero from "@/components/Hero";
import TlDr from "@/components/TlDr";
import FourAspects from "@/components/FourAspects";
import SystemSection from "@/components/SystemSection";
import Findings from "@/components/Findings";
import Implications from "@/components/Implications";
import Citation from "@/components/Citation";
import ScrollAnimations from "@/components/ScrollAnimations";

export default function Home() {
  return (
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
  );
}
