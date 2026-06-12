"use client";

import { useState } from "react";
import { FiCopy, FiCheck } from "react-icons/fi";

const BIBTEX = `@inproceedings{kim2026intentflow,
  author    = {Kim, Yoonsu and Son, Kihoon and Kim, Seoyoung
               and Chin, Brandon and Kim, Juho},
  title     = {IntentFlow: Investigating Fluid Dynamics of Intent
               Communication in Generative AI},
  year      = {2026},
  isbn      = {979-8-4007-2563-0/26/06},
  publisher = {Association for Computing Machinery},
  address   = {New York, NY, USA},
  url       = {https://doi.org/10.1145/3800645.3812999},
  doi       = {10.1145/3800645.3812999},
  booktitle = {Proceedings of the Designing Interactive Systems
               Conference (DIS '26)},
  location  = {Singapore, Singapore},
  series    = {DIS '26}
}`;

export default function Citation() {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(BIBTEX);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-20 px-4 bg-[#fafbff]">
      <div className="mx-auto max-w-3xl">
        <div className="text-center mb-4">
          <span className="text-xs font-bold tracking-widest uppercase text-[#3F5BE8]">
            Cite this work
          </span>
        </div>
        <h2 className="text-center text-3xl sm:text-4xl font-bold text-[#1a1a2e] font-[family-name:var(--font-ibm)] mb-10 tracking-tight">
          BibTeX
        </h2>

        <div className="relative">
          <pre className="bibtex-block scrollbar-thin overflow-x-auto">{BIBTEX}</pre>
          <button
            onClick={copy}
            className={`absolute top-3 right-3 inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all duration-200 ${
              copied
                ? "bg-green-100 text-green-700"
                : "bg-white border border-[#dde2ff] text-[#3F5BE8] hover:bg-[#f0f4ff]"
            }`}
          >
            {copied ? <FiCheck className="w-3.5 h-3.5" /> : <FiCopy className="w-3.5 h-3.5" />}
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        {/* Footer logos */}
        <div className="flex justify-center items-center gap-10 mt-16 pt-10 border-t border-gray-100">
          <a href="https://kixlab.org" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/kixlab_logo.png"
              alt="KIXLAB"
              className="h-8 w-auto object-contain"
            />
          </a>
          <a href="https://kaist.ac.kr" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/kaist_logo.png"
              alt="KAIST"
              className="h-8 w-auto object-contain"
            />
          </a>
        </div>
        <p className="text-center text-xs text-gray-400 mt-4">
          © 2026 KIXLAB, KAIST · DIS '26 Singapore
        </p>
      </div>
    </section>
  );
}
