"use client";

import { useState } from "react";

const ASPECT_SUPPORT = [
  {
    key: "articulation",
    label: "Intent Articulation",
    process: "Convergent Process",
    accent: "#4FB293",
    tint: "#E4F2EC",
    inkDark: "#2E7D63",
    icon: "✏️",
    panel: "Intent Panel",
    features: [
      "Automatically parses your chat message into a high-level goal and editable low-level intents",
      "Implicit intent elements are surfaced explicitly — letting you verify what the system understood",
      "Edit or remove any intent before generation to align the system's interpretation with yours",
    ],
  },
  {
    key: "exploration",
    label: "Intent Exploration",
    process: "Divergent Process",
    accent: "#5B8FD6",
    tint: "#E3ECF8",
    inkDark: "#345F9E",
    icon: "🔭",
    panel: "Intent Panel",
    features: [
      "Each intent has adjustable dimensions — structured parameters like Tone, Length, or Style",
      "Dimensions use radio buttons, sliders, or tag selectors to encourage low-effort variation",
      "Vary dimension values freely to generate different outputs without rewriting prompts from scratch",
    ],
  },
  {
    key: "management",
    label: "Intent Management",
    process: "Stabilizing Process",
    accent: "#8A6FD0",
    tint: "#E9E3F6",
    inkDark: "#5B439E",
    icon: "📋",
    panel: "Intent Panel · Output Panel",
    features: [
      "Pin important intents and dimension values to persist them across conversation turns",
      "Version history sidebar shows how the output has evolved throughout the session",
      "Roll back to any previous version in one click — enabling progressive curation, not starting over",
    ],
  },
  {
    key: "synchronization",
    label: "Intent Synchronization",
    process: "Aligning Process",
    accent: "#BE7CCB",
    tint: "#F2E4F3",
    inkDark: "#8B4A99",
    icon: "🔗",
    panel: "Output Panel",
    features: [
      "Each intent and dimension value is linked to specific segments in the generated output",
      "Hover on an intent to highlight the corresponding text in the output — and vice versa",
      "Diff view marks exactly what changed between versions, making intent–output alignment visible",
    ],
  },
];

export default function SystemSection() {
  const [flipped, setFlipped] = useState(false);

  return (
    <section className="py-20 px-4 bg-white">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3F5BE8]">
            Research Probe
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a1a2e] font-[family-name:var(--font-ibm)] mb-4 tracking-tight">
          The IntentFlow System
        </h2>
        <p className="text-center text-[#6B7280] max-w-2xl mx-auto mb-12 leading-relaxed">
          IntentFlow is a research probe that embodies all four aspects in a single LLM-based writing
          workflow, organized into a{" "}
          <strong className="text-[#1a1a2e]">Chat Panel</strong>,{" "}
          <strong className="text-[#1a1a2e]">Intent Panel</strong>, and{" "}
          <strong className="text-[#1a1a2e]">Output Panel</strong>.
        </p>

        {/* Flip card: Demo video ↔ Pipeline */}
        <div className="mb-4" style={{ perspective: "1200px" }}>
          <div
            className="relative w-full transition-transform duration-700"
            style={{
              transformStyle: "preserve-3d",
              transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
              aspectRatio: "16/9",
            }}
          >
            {/* Front: Demo video */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-gray-100"
              style={{ backfaceVisibility: "hidden" }}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                poster="/assets/img/interface_demo_poster.jpg"
                className="w-full h-full object-cover"
              >
                <source src="/assets/img/interface_demo.mp4" type="video/mp4" />
                <source src="/assets/img/interface_demo.webm" type="video/webm" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/assets/img/Fig7_interface.png"
                  alt="IntentFlow interface"
                  className="w-full h-full object-cover"
                />
              </video>
            </div>

            {/* Back: Pipeline */}
            <div
              className="absolute inset-0 rounded-2xl overflow-hidden shadow-xl border border-[#e2e8ff] bg-[#f8f9ff] flex items-center justify-center p-6"
              style={{
                backfaceVisibility: "hidden",
                transform: "rotateY(180deg)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/assets/img/pipeline.png"
                alt="IntentFlow internal pipeline of modular LLM components"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Flip toggle button */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setFlipped((v) => !v)}
            className="inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-xl border border-[#dde2ff] text-[#3F5BE8] bg-white hover:bg-[#f0f4ff] transition-all duration-200"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
              <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {flipped ? "← View Demo" : "View Pipeline →"}
          </button>
        </div>

        {/* How each aspect is supported */}
        <div className="grid sm:grid-cols-2 gap-5 mb-0">
          {ASPECT_SUPPORT.map((a) => (
            <div
              key={a.key}
              className="rounded-2xl border p-6 hover:shadow-md transition-shadow duration-200"
              style={{ background: a.tint, borderColor: a.accent + "44" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{a.icon}</span>
                <div>
                  <div className="font-bold text-sm" style={{ color: a.inkDark }}>
                    {a.label}
                  </div>
                  <div className="text-xs font-medium text-[#9ca3af]">
                    {a.process} · {a.panel}
                  </div>
                </div>
              </div>
              <ul className="space-y-2">
                {a.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[#374151] leading-relaxed">
                    <span
                      className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full"
                      style={{ background: a.accent }}
                    />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
