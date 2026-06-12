"use client";

import { useEffect, useRef, useState } from "react";

const CARDS = [
  {
    key: "f1",
    value: 0.5,
    baseline: 4.33,
    unit: undefined,
    label: "Correct actions (M)",
    note: "↓ fewer corrections",
    sig: "p < .001",
    direction: "down" as const,
    color: "#4FB293",
    tint: "#E4F2EC",
    inkDark: "#2E7D63",
    icon: "🔄",
    title: "From reactive correction to proactive refinement",
    detail:
      "With the baseline, the dominant pattern was Generate → Correct. With IntentFlow, it became Adjust → Adjust (24.5%) — an exploratory loop that rarely appeared in the baseline. Fewer Correct actions (M=0.50 vs. 4.33, p < .001) and more Adjust actions (M=4.50 vs. 1.17, p = .005) confirm a shift from fixing errors to actively steering output.",
  },
  {
    key: "f2",
    value: 4.5,
    baseline: 1.17,
    unit: undefined,
    label: "Adjust actions (M)",
    note: "↑ more refinements",
    sig: "p = .005",
    direction: "up" as const,
    color: "#5B8FD6",
    tint: "#E3ECF8",
    inkDark: "#345F9E",
    icon: "🔍",
    title: "Verification-driven intent refinement",
    detail:
      "IntentFlow enabled a new micro-cycle: Adjust → Generate → Verify → Adjust. Users leveraged intent-to-output linking to pinpoint exactly which segments changed, then adjusted immediately. All 11 subjective measures (M1–M11) were rated significantly higher (all p < .05), with gains in transparency, sense of control, and intent–output alignment.",
  },
  {
    key: "f3",
    value: 24.5,
    baseline: undefined,
    unit: "%",
    label: "Adjust→Adjust transition",
    note: "↑ dominant pattern",
    sig: "exploratory loop",
    direction: "up" as const,
    color: "#8A6FD0",
    tint: "#E9E3F6",
    inkDark: "#5B439E",
    icon: "↩️",
    title: "Rollback repurposed: from recovery to exploration",
    detail:
      "In the baseline, rollback was a breakdown-recovery tool. In IntentFlow, it became a deliberate exploration strategy — users generated multiple versions with different dimension values, compared via version history, and rolled back to the best match. This Adjust→Adjust loop (24.5%) was the dominant pattern in IntentFlow, rarely appearing in the baseline.",
  },
  {
    key: "f4",
    value: 15.67,
    baseline: 19.67,
    unit: undefined,
    label: "NASA-TLX workload (M)",
    note: "↓ lower workload",
    sig: "p = .004",
    direction: "down" as const,
    color: "#BE7CCB",
    tint: "#F2E4F3",
    inkDark: "#8B4A99",
    icon: "📌",
    title: "Persistent intents changed cross-turn behavior",
    detail:
      "Pinned intents persisted across turns, letting users build incrementally rather than re-specify constraints each time. Sessions shifted from long monolithic prompts to shorter, focused adjustments anchored by persistent state. NASA-TLX workload dropped significantly (M=15.67 vs. 19.67, p = .004), driven primarily by reduced Effort and Frustration subscales.",
  },
];

function AnimatedNumber({
  value,
  unit,
  duration = 1400,
}: {
  value: number;
  unit?: string;
  duration?: number;
}) {
  const [displayed, setDisplayed] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const animated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true;
          const start = performance.now();
          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setDisplayed(value * eased);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value, duration]);

  const formatted =
    value % 1 === 0 ? Math.round(displayed).toString() : displayed.toFixed(2);

  return (
    <span ref={ref} className="tabular-nums">
      {formatted}
      {unit}
    </span>
  );
}

export default function Findings() {
  const [flipped, setFlipped] = useState<Set<string>>(new Set());

  const toggle = (key: string) => {
    setFlipped((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <section className="py-20 px-4 bg-[#fafbff]">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3F5BE8]">
            Within-subjects study · N=12
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a1a2e] font-[family-name:var(--font-ibm)] mb-4 tracking-tight">
          Key Findings
        </h2>
        <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
          A counterbalanced within-subjects study comparing IntentFlow against a{" "}
          <strong className="text-[#1a1a2e]">conventional chat-based baseline</strong> (ChatGPT
          Canvas / Claude Artifact style), with action-level behavioral coding across all sessions.
          <span className="block mt-1 text-sm text-[#9ca3af]">Click each card to see the finding.</span>
        </p>

        {/* Flip cards grid */}
        <div className="grid grid-cols-2 gap-4 mb-14">
          {CARDS.map((card) => {
            const isFlipped = flipped.has(card.key);
            return (
              <div key={card.key} style={{ perspective: "1000px" }}>
                <div
                  className="relative cursor-pointer transition-transform duration-700"
                  style={{
                    transformStyle: "preserve-3d",
                    transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                    height: "220px",
                  }}
                  onClick={() => toggle(card.key)}
                >
                  {/* Front: stat */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-white border border-gray-100 p-5 flex flex-col items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow"
                    style={{ backfaceVisibility: "hidden" }}
                  >
                    <div
                      className="text-4xl font-bold font-[family-name:var(--font-ibm)] mb-1"
                      style={{ color: card.color }}
                    >
                      <AnimatedNumber value={card.value} unit={card.unit} />
                    </div>
                    {card.baseline !== undefined && (
                      <div className="text-xs text-gray-400 mb-1">
                        vs. {card.baseline} baseline
                      </div>
                    )}
                    <div className="text-xs font-semibold text-[#374151] leading-tight mb-2">
                      {card.label}
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <span
                        className={`text-xs font-medium px-2 py-0.5 rounded-full ${
                          card.direction === "down"
                            ? "bg-green-50 text-green-700"
                            : "bg-blue-50 text-blue-700"
                        }`}
                      >
                        {card.note}
                      </span>
                      <span className="text-[10px] text-gray-400">{card.sig}</span>
                    </div>
                    <div className="absolute bottom-2.5 right-3.5 text-[10px] text-gray-300 flex items-center gap-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      flip
                    </div>
                  </div>

                  {/* Back: finding */}
                  <div
                    className="absolute inset-0 rounded-2xl p-5 flex flex-col shadow-sm"
                    style={{
                      backfaceVisibility: "hidden",
                      transform: "rotateY(180deg)",
                      background: card.tint,
                      border: `1.5px solid ${card.color}66`,
                    }}
                  >
                    <div className="flex items-start gap-2 mb-2.5">
                      <span className="text-lg flex-shrink-0 mt-0.5">{card.icon}</span>
                      <h3
                        className="font-bold text-sm leading-snug"
                        style={{ color: card.inkDark }}
                      >
                        {card.title}
                      </h3>
                    </div>
                    <p className="text-xs text-[#374151] leading-relaxed flex-1 overflow-hidden">
                      {card.detail}
                    </p>
                    <div className="text-[10px] text-gray-400 text-right mt-1.5 flex items-center justify-end gap-0.5">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-3 h-3">
                        <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      flip back
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Discussion: Cyclic intent communication */}
        <div className="rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#faf5ff] border-2 border-[#a5b4fc] p-8 shadow-md">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-2xl">🔁</span>
            <h3 className="font-bold text-[#1a1a2e] text-xl font-[family-name:var(--font-ibm)]">
              Intent communication as a cyclic process
            </h3>
          </div>
          <p className="text-sm text-[#374151] leading-relaxed mb-4">
            A central finding is that intent communication is not a one-shot, linear exchange — it is
            a <strong className="text-[#3F5BE8]">cyclic, iterative process</strong>. Users begin with
            vague goals, articulate initial intents, explore variations, stabilize what works, and
            verify alignment — then loop back to refine. Each of the four aspects corresponds to a
            phase in this cycle:
          </p>
          <div className="grid sm:grid-cols-4 gap-3 mb-4">
            {[
              { label: "Articulate", desc: "Clarify vague intent into structured form", color: "#4FB293", icon: "✏️" },
              { label: "Explore", desc: "Expand toward new directions and variations", color: "#5B8FD6", icon: "🔭" },
              { label: "Stabilize", desc: "Curate and persist intent states that work", color: "#8A6FD0", icon: "📋" },
              { label: "Verify", desc: "Confirm that output reflects intended meaning", color: "#BE7CCB", icon: "🔗" },
            ].map((phase, i) => (
              <div key={phase.label} className="rounded-xl bg-white border border-gray-100 p-3 text-center">
                <div className="text-lg mb-1">{phase.icon}</div>
                <div className="text-xs font-bold mb-1" style={{ color: phase.color }}>
                  {i + 1}. {phase.label}
                </div>
                <div className="text-xs text-[#6B7280] leading-snug">{phase.desc}</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-[#374151] leading-relaxed">
            IntentFlow was designed to support all four phases in an integrated system, enabling
            this cycle to be <strong className="text-[#3F5BE8]">fast, low-cost, and fluid</strong>.
            The study confirmed that users who had access to all four aspects naturally fell into
            this cyclic pattern — whereas baseline users remained in a linear, correction-heavy
            loop. This suggests that supporting the full cycle, not just individual phases, is
            key to improving intent communication in generative AI.
          </p>
        </div>
      </div>
    </section>
  );
}
