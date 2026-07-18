"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { faqs } from "@/lib/data/faqs";

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <RevealSection
      id="preguntas"
      className="max-w-[1240px] mx-auto px-12 py-[110px] box-border border-t border-accent/[0.14] grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12"
    >
      <SectionEyebrow>PREGUNTAS FRECUENTES</SectionEyebrow>
      <div className="max-w-[720px]">
        {faqs.map((fq, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={fq.q} className="border-b border-accent/[0.18]">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex items-center justify-between gap-6 w-full bg-transparent border-none cursor-pointer py-5.5 text-left font-sans text-xl font-medium text-ink"
              >
                {fq.q}
                <Plus
                  size={16}
                  strokeWidth={1.5}
                  className="text-cyan shrink-0 transition-transform duration-250 ease-out"
                  style={{ transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                />
              </button>
              <div
                className="overflow-hidden transition-[max-height] duration-400 ease-out"
                style={{ maxHeight: isOpen ? "240px" : "0px" }}
              >
                <p className="m-0 pr-10 pb-6 text-lg leading-[1.65] font-light text-ink-muted text-justify">
                  {fq.a}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </RevealSection>
  );
}
