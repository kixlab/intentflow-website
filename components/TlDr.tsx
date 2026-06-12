"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

const ABSTRACT = `Generative AI shifts interaction toward intent-based outcome specification, despite inherently vague, fluid, and evolving intents. While HCI research has proposed diverse interaction techniques to support this process, how key aspects of intent communication interplay to shape users' workflows remains underexplored. To bridge this gap, we conduct a systematic literature review of 46 HCI papers and identify four core aspects of intent communication support: intent Articulation, Exploration, Management, and Synchronization. To investigate how these aspects interplay in practice, we developed IntentFlow, a research probe that embodies all four aspects for a writing task, and conducted a comparative study (N=12). Our action-level behavioral analysis reveals that comprehensive support enables verification-driven refinement and progressive intent curation, reduces cognitive effort, and improves users' sense of control and understanding of intent–output alignment.`;

export default function TlDr() {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="pt-8 pb-16 px-4 bg-white">
      <div className="mx-auto max-w-3xl">
        {/* TL;DR card */}
        <div className="rounded-2xl bg-gradient-to-br from-[#f0f4ff] to-[#faf5ff] border border-[#e2e8ff] p-8 shadow-sm">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-block text-xs font-bold tracking-widest uppercase text-[#3F5BE8] bg-[#e0e7ff] px-3 py-1 rounded-full">
              TL;DR
            </span>
          </div>
          <div className="space-y-3 text-[#374151] leading-relaxed">
            <p>
              Users' intents in generative AI are{" "}
              <strong className="text-[#1a1a2e]">vague, fluid, and often subconscious</strong> — yet
              today's chat interfaces offer little help in expressing, refining, and tracking them
              over time.
            </p>
            <p>
              From a review of{" "}
              <strong className="text-[#3F5BE8]">46 HCI papers</strong>, we distill four key aspects
              of intent communication —{" "}
              <strong className="text-[#4FB293]">Articulation</strong>,{" "}
              <strong className="text-[#5B8FD6]">Exploration</strong>,{" "}
              <strong className="text-[#8A6FD0]">Management</strong>, and{" "}
              <strong className="text-[#BE7CCB]">Synchronization</strong> — and build{" "}
              <strong className="text-[#1a1a2e]">IntentFlow</strong>, a writing probe that supports
              all four together.
            </p>
            <p>
              In a study (N=12), comprehensive support shifted users from{" "}
              <strong className="text-[#1a1a2e]">repetitive correction</strong> toward{" "}
              <strong className="text-[#1a1a2e]">verification-driven refinement</strong>, while
              lowering effort and frustration.
            </p>
          </div>

        </div>

        {/* Expandable abstract */}
        <div className="mt-6">
          <button
            onClick={() => setExpanded((v) => !v)}
            className="w-full flex items-center justify-between gap-2 px-4 py-3 rounded-xl text-sm font-medium text-[#6B7280] hover:text-[#3F5BE8] hover:bg-[#f5f7ff] transition-all duration-200 group"
          >
            <span>{expanded ? "Hide" : "Read full abstract"}</span>
            <FiChevronDown
              className={`w-4 h-4 transition-transform duration-300 group-hover:text-[#3F5BE8] ${
                expanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              expanded ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="px-4 pt-2 pb-4 text-[#374151] leading-relaxed text-sm">
              {ABSTRACT}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
