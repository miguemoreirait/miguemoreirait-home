"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { services } from "@/lib/data/services";

export function Services() {
  return (
    <RevealSection
      id="servicios"
      className="max-w-[1240px] mx-auto px-12 py-[110px] box-border border-t border-accent/[0.14]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 mb-14">
        <SectionEyebrow>SERVICIOS</SectionEyebrow>
        <h2 className="m-0 font-serif font-normal text-4xl leading-[1.1] text-ink">
          En qué puedo <em className="italic text-accent">ayudarte</em>
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {services.map((srv) => (
          <motion.div
            key={srv.titulo}
            className="relative flex flex-col gap-4.5 bg-bg-mid/45 border rounded-md p-8"
            initial={{ borderColor: "rgba(148,180,210,0.2)" }}
            whileHover={{
              y: -4,
              borderColor: "#00E5C7",
              boxShadow: "0 10px 32px rgba(9,17,32,0.45)",
            }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
          >
            <srv.icon size={26} strokeWidth={1.5} className="text-accent" />
            <h3 className="m-0 font-sans font-semibold text-xl text-ink">
              {srv.titulo}
            </h3>
            <p className="m-0 text-base leading-[1.6] font-light text-ink-muted flex-1 text-left md:text-justify">
              {srv.desc}
            </p>
            <a
              href={srv.href}
              target={srv.target}
              rel={srv.target ? "noopener" : undefined}
              className="group inline-flex items-center gap-2 self-start font-mono text-xs tracking-[0.16em] uppercase text-cyan pb-1 after:absolute after:inset-0 after:content-['']"
            >
              <span className="relative">
                {srv.cta}
                <span className="absolute left-0 -bottom-1 h-px w-full bg-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </span>
              <ArrowRight size={12} strokeWidth={1.5} />
            </a>
          </motion.div>
        ))}
      </div>
    </RevealSection>
  );
}
