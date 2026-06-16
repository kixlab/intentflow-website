"use client";

import Image from "next/image";
import { useRef, useCallback } from "react";
import { FiFileText, FiExternalLink } from "react-icons/fi";
import { SiAcm } from "react-icons/si";

const AUTHORS = [
  {
    name: "Yoonsu Kim",
    affiliation: "KAIST",
    website: "https://yoonsu0816.github.io/",
    img: "/assets/img/yoonsu.png",
  },
  {
    name: "Kihoon Son",
    affiliation: "KAIST",
    website: "https://kihoon-son.github.io/",
    img: "/assets/img/kihoon.jpeg",
  },
  {
    name: "Seoyoung Kim",
    affiliation: "KAIST",
    website: "https://sites.google.com/view/seoyoung",
    img: "/assets/img/seoyoung.jpg",
  },
  {
    name: "Brandon Chin",
    affiliation: "UC Berkeley",
    website: undefined,
    img: "/assets/img/brandonchin.jpg",
  },
  {
    name: "Juho Kim",
    affiliation: "KAIST, SkillBench",
    website: "https://juhokim.com",
    img: "/assets/img/juho.jpg",
  },
];

type Button = {
  label: string;
  href: string;
  icon: React.ReactNode;
  soon?: boolean;
};

const BUTTONS: Button[] = [
  {
    label: "Paper",
    href: "/assets/intentflow_paper.pdf",
    icon: <FiFileText className="w-4 h-4" />,
  },
  {
    label: "ACM DL",
    href: "https://doi.org/10.1145/3800645.3812999",
    icon: <SiAcm className="w-4 h-4" />,
  },
  {
    label: "arXiv",
    href: "https://arxiv.org/abs/2507.22134",
    icon: <FiExternalLink className="w-4 h-4" />,
  },
  
];

const SPARKLE_CHARS = ["✦", "✧", "⋆", "✶", "◆", "✿"];
const SPARKLE_COLORS = ["#7FB2FF", "#3D7BFF", "#2B4FE0", "#a78bfa", "#60a5fa"];

export default function Hero() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  const handleTitleMouseMove = useCallback((e: React.MouseEvent<HTMLHeadingElement>) => {
    const el = titleRef.current;
    if (!el) return;
    if (Math.random() > 0.35) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const spark = document.createElement("span");
    spark.textContent = SPARKLE_CHARS[Math.floor(Math.random() * SPARKLE_CHARS.length)];
    const tx = (Math.random() - 0.5) * 80;
    const ty = (Math.random() - 0.5) * 80;
    const rot = Math.random() * 360;
    const color = SPARKLE_COLORS[Math.floor(Math.random() * SPARKLE_COLORS.length)];

    spark.style.cssText = `
      position: absolute;
      left: ${x}px;
      top: ${y}px;
      font-size: ${12 + Math.random() * 10}px;
      color: ${color};
      pointer-events: none;
      user-select: none;
      --tx: ${tx}px;
      --ty: ${ty}px;
      --rot: ${rot}deg;
      animation: sparkle-burst 0.7s ease-out forwards;
      z-index: 10;
    `;

    el.style.position = "relative";
    el.appendChild(spark);
    spark.addEventListener("animationend", () => spark.remove());
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f4ff] to-white pt-20 pb-8 px-4">
      {/* Background decorative blobs */}
      <div
        className="pointer-events-none absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, #7FB2FF, transparent)" }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 w-[400px] h-[400px] rounded-full opacity-15 blur-3xl"
        style={{ background: "radial-gradient(circle, #8A6FD0, transparent)" }}
      />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Conference badge */}
        <div className="inline-flex items-center gap-2 rounded-full bg-white border border-[#c7d2fe] px-4 py-1.5 text-sm font-medium text-[#3F5BE8] shadow-sm mb-8">
          <span className="inline-block w-2 h-2 rounded-full bg-[#3F5BE8] animate-pulse" />
          DIS 2026 · Singapore
        </div>

        {/* Title */}
        <h1
          ref={titleRef}
          onMouseMove={handleTitleMouseMove}
          className="wordmark-gradient font-[family-name:var(--font-ibm)] text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4 cursor-default select-none leading-none"
          style={{ letterSpacing: "-0.02em" }}
        >
          <span style={{ fontSize: "1.2em" }}>I</span>NTENT<wbr /><span style={{ fontSize: "1.2em" }}>F</span>LOW
          <span
            style={{ WebkitTextFillColor: "initial" } as React.CSSProperties}
            className="ml-2 text-3xl sm:text-4xl md:text-5xl"
          >
            🌀
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mx-auto max-w-2xl text-xl sm:text-2xl text-[#4a5568] font-bold mb-2 leading-snug font-[family-name:var(--font-ibm)]">
          Supporting Interactive and Fluid Intent Communication with LLMs
        </p>
        <p className="text-sm text-[#718096] mb-10">
          Proceedings of the Designing Interactive Systems Conference (DIS &#39;26)
        </p>

        {/* Action buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {BUTTONS.map((btn) => (
            <a
              key={btn.label}
              href={btn.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200 ${
                btn.soon
                  ? "bg-white border border-gray-200 text-gray-400 cursor-not-allowed pointer-events-none"
                  : "bg-[#3F5BE8] text-white hover:bg-[#3348cc] hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 active:translate-y-0"
              }`}
            >
              {btn.icon}
              {btn.label}
              {btn.soon && (
                <span className="text-xs bg-gray-100 text-gray-400 px-1.5 py-0.5 rounded-md">
                  soon
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Authors */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10">
          {AUTHORS.map((author) => (
            <div key={author.name} className="group flex flex-col items-center gap-3">
              <div className="relative">
                <div className="w-24 h-24 rounded-full overflow-hidden ring-2 ring-white shadow-md group-hover:ring-[#3F5BE8] group-hover:shadow-lg group-hover:shadow-blue-100 transition-all duration-300">
                  {author.website ? (
                    <a href={author.website} target="_blank" rel="noopener noreferrer">
                      <Image
                        src={author.img}
                        alt={author.name}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </a>
                  ) : (
                    <Image
                      src={author.img}
                      alt={author.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
              </div>
              <div className="text-center">
                {author.website ? (
                  <a
                    href={author.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-base font-semibold text-[#1a1a2e] hover:text-[#3F5BE8] transition-colors"
                  >
                    {author.name}
                  </a>
                ) : (
                  <span className="block text-base font-semibold text-[#1a1a2e]">
                    {author.name}
                  </span>
                )}
                <span className="block text-sm text-[#718096] mt-0.5">{author.affiliation}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
