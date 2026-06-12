"use client";

import { useState } from "react";

const ASPECTS = [
  {
    key: "articulation",
    label: "Intent Articulation",
    process: "Convergent Process",
    accent: "#4FB293",
    tint: "#E4F2EC",
    inkDark: "#2E7D63",
    desc: "Helping users turn vague, underspecified intents into concrete, actionable instructions.",
    detail:
      "Users often struggle to articulate what they want from an AI system. IntentFlow supports articulation by externalizing a user's prompt into a structured goal and editable low-level intents — making implicit expectations explicit so users can refine and communicate them precisely.",
    icon: "✏️",
  },
  {
    key: "exploration",
    label: "Intent Exploration",
    process: "Divergent Process",
    accent: "#5B8FD6",
    tint: "#E3ECF8",
    inkDark: "#345F9E",
    desc: "Helping users discover new, emerging intents beyond their initial scope.",
    detail:
      "Intent exploration lets users go beyond their initial idea. IntentFlow offers adjustable intent dimensions — radio buttons, sliders, and tag selectors — that invite users to try variations and discover directions they hadn't considered, turning a single prompt into a design space.",
    icon: "🔭",
  },
  {
    key: "management",
    label: "Intent Management",
    process: "Stabilizing Process",
    accent: "#8A6FD0",
    tint: "#E9E3F6",
    inkDark: "#5B439E",
    desc: "Helping users organize and curate intents as they evolve.",
    detail:
      "As intents evolve over a session, keeping track of them is critical. IntentFlow lets users pin important intents and dimension values so they persist across turns, and shows a version history of the output — enabling progressive curation rather than starting over each time.",
    icon: "📋",
  },
  {
    key: "synchronization",
    label: "Intent Synchronization",
    process: "Aligning Process",
    accent: "#BE7CCB",
    tint: "#F2E4F3",
    inkDark: "#8B4A99",
    desc: "Aligning user intents with AI output so users can verify each intent is realized as intended.",
    detail:
      "Misalignment between what a user intends and what the model produces is a key source of frustration. IntentFlow makes the intent–output connection transparent by linking each intent and dimension value to specific output segments — hovering on an intent highlights the corresponding text.",
    icon: "🔗",
  },
];

export default function FourAspects() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-[#fafbff]">
      <div className="mx-auto max-w-4xl">
        {/* Section header */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3F5BE8]">
            From literature review
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a1a2e] font-[family-name:var(--font-ibm)] mb-4 tracking-tight">
          Four Key Aspects of Intent Communication
        </h2>
        <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
          A user&apos;s <strong className="text-[#1a1a2e]">goal</strong> is explicit and stable, but
          underlying <strong className="text-[#1a1a2e]">intents</strong> — strategies, preferences,
          constraints — are far messier:{" "}
          <em>vague, fluid, and subconscious</em>.
        </p>

        {/* SLR note */}
        <p className="text-center text-[#6B7280] mb-10 max-w-xl mx-auto">
          We conducted a systematic literature review of{" "}
          <strong className="text-[#1a1a2e]">46 HCI papers</strong> on intent communication in
          AI-assisted systems. Across these papers, we identified{" "}
          <strong className="text-[#1a1a2e]">14 distinct interaction features</strong> and
          synthesized them into four core aspects — each capturing a different dimension of how
          users communicate intents with generative AI.
        </p>

        {/* Aspect cards */}
        <div className="space-y-3">
          {ASPECTS.map((a) => {
            const isActive = active === a.key;
            return (
              <div
                key={a.key}
                onClick={() => setActive(isActive ? null : a.key)}
                className={`group relative cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive
                    ? "border-2 shadow-lg"
                    : "border border-gray-100 hover:border-gray-200 hover:shadow-md"
                }`}
                style={{
                  borderColor: isActive ? a.accent : undefined,
                  background: isActive ? a.tint : "white",
                } as React.CSSProperties}
              >
                <div className="flex items-center gap-4 p-5">
                  {/* Icon */}
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center text-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: a.tint }}
                  >
                    {a.icon}
                  </div>

                  {/* Text */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="text-base font-bold"
                        style={{ color: a.inkDark }}
                      >
                        {a.label}
                      </span>
                      <span
                        className="text-xs font-semibold px-2 py-0.5 rounded-full"
                        style={{ background: a.tint, color: a.inkDark }}
                      >
                        {a.process}
                      </span>
                    </div>
                    <p className="text-sm text-[#6B7280] mt-0.5 leading-relaxed">{a.desc}</p>
                  </div>

                  {/* Chevron */}
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "rotate-180" : "group-hover:bg-gray-50"
                    }`}
                    style={{ color: a.accent }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Expanded detail */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isActive ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-5 pb-5 pl-20 text-sm text-[#374151] leading-relaxed">
                    {a.detail}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
