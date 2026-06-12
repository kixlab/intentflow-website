"use client";

import { useState } from "react";

const DIS = [
  {
    tag: "DI1",
    text: "Externalize intents as the system's visible interpretation.",
    color: "#4FB293",
    tint: "#E4F2EC",
    inkDark: "#2E7D63",
    detail:
      "When AI systems make their interpretation of user intent explicit — through structured representations, goal summaries, or labeled intent components — users can verify alignment, correct misunderstandings before generation, and build an accurate mental model of the system. IntentFlow's Intent Panel, which decomposes each message into a goal and editable low-level intents, demonstrated this directly: users spent significantly less effort on post-hoc correction when they could review and adjust the system's interpretation upfront.",
  },
  {
    tag: "DI2",
    text: "Provide easily adjustable exploratory spaces for intents.",
    color: "#5B8FD6",
    tint: "#E3ECF8",
    inkDark: "#345F9E",
    detail:
      "Rigid text interfaces make exploration costly — every variation requires rewriting a prompt from scratch. Intent dimensions (radio buttons, sliders, tag selectors) lower this cost dramatically, enabling lightweight experimentation. The Adjust→Adjust loop (24.5%) — the dominant behavioral pattern in IntentFlow — emerged precisely because exploration became effortless. Systems should provide adjustable, structured parameters that let users try variations without fear of 'wasting' a prompt.",
  },
  {
    tag: "DI3",
    text: "Support versioning and curation of evolving intents.",
    color: "#8A6FD0",
    tint: "#E9E3F6",
    inkDark: "#5B439E",
    detail:
      "Intent communication is inherently iterative and cumulative — users don't know their full intent upfront; it crystallizes through interaction. Systems that support versioning let users build progressively toward an ideal rather than discarding work on every turn. In IntentFlow, rollback was repurposed from a failure-recovery tool into a curation mechanism: users generated variations deliberately, then selected the best output — transforming intent communication into a design process.",
  },
  {
    tag: "DI4",
    text: "Make the intent–output connection transparent.",
    color: "#BE7CCB",
    tint: "#F2E4F3",
    inkDark: "#8B4A99",
    detail:
      "Users need to understand which parts of the output resulted from which intents. Without this link, adjusting intents becomes guesswork. Linking intent elements to output segments — through hover highlighting, color coding, or diff views — closes the feedback loop, letting users learn how the system responds to specific intent changes. This matters especially as outputs grow longer, where the connection between prompt elements and generated text becomes impossible to infer mentally.",
  },
];

export default function Implications() {
  const [active, setActive] = useState<string | null>(null);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3F5BE8]">
            For designers and researchers
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a1a2e] font-[family-name:var(--font-ibm)] mb-4 tracking-tight">
          Design Implications
        </h2>
        <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
          These four aspects offer a{" "}
          <strong className="text-[#1a1a2e]">design lens</strong> for building LLM interfaces that
          better support how users actually communicate intent.
        </p>

        {/* DI cards */}
        <div className="space-y-3">
          {DIS.map((di) => {
            const isActive = active === di.tag;
            return (
              <div
                key={di.tag}
                onClick={() => setActive(isActive ? null : di.tag)}
                className={`group cursor-pointer rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isActive ? "border-2 shadow-lg" : "border border-gray-100 hover:border-gray-200 hover:shadow-md"
                }`}
                style={{
                  borderColor: isActive ? di.color : undefined,
                  background: isActive ? di.tint : "white",
                } as React.CSSProperties}
              >
                <div className="flex items-start gap-4 p-5">
                  <span
                    className="flex-shrink-0 inline-block text-xs font-bold tracking-widest px-2.5 py-1 rounded-lg text-white mt-0.5"
                    style={{ background: di.color }}
                  >
                    {di.tag}
                  </span>
                  <p
                    className="flex-1 text-base font-medium leading-relaxed"
                    style={{ color: "#1a1a2e" }}
                  >
                    {di.text}
                  </p>
                  <div
                    className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
                      isActive ? "rotate-180" : "group-hover:bg-gray-50"
                    }`}
                    style={{ color: di.color }}
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-4 h-4">
                      <path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>

                {/* Expanded detail */}
                <div
                  className={`transition-all duration-400 ease-in-out overflow-hidden ${
                    isActive ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className="px-5 pb-5 pl-[4.5rem] text-sm leading-relaxed"
                    style={{ color: di.inkDark }}
                  >
                    {di.detail}
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
