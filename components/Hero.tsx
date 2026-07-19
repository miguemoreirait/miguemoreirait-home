"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, Download } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export function Hero() {
  return (
    <header
      id="top"
      className="relative overflow-hidden max-w-[1240px] mx-auto px-12 pt-[196px] pb-[140px] box-border"
    >
      <svg
        viewBox="0 0 1100 520"
        className="absolute top-[60px] -right-[60px] w-[900px] h-auto pointer-events-none opacity-[0.14]"
        aria-hidden="true"
      >
        <motion.polyline
          points="0,420 180,420 260,300 470,300 560,180 800,180 880,90 1100,90"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1.5}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3.2, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        />
        <motion.circle
          cx={260}
          cy={300}
          r={3}
          fill="#94B4D2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        <motion.circle
          cx={560}
          cy={180}
          r={3}
          fill="#94B4D2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.1 }}
        />
        <motion.circle
          cx={880}
          cy={90}
          r={3}
          fill="#00E5C7"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.9 }}
        />
      </svg>

      {siteConfig.disponible && (
        <div className="relative inline-flex items-center gap-2.5 border border-accent/30 rounded-full px-4 py-[7px] mb-9">
          <span className="w-[7px] h-[7px] rounded-full bg-cyan animate-mm-pulse" />
          <span className="font-mono text-xs tracking-[0.22em] text-accent">
            DISPONIBLE PARA CONSULTORÍA
          </span>
        </div>
      )}

      <div className="relative">
        <Image
          src="/logo/primary-dark.svg"
          alt="MigueMoreiraIT — Lic. Tecnología de la Información"
          width={487}
          height={96}
          priority
          className="w-[clamp(180px,55vw,420px)] md:w-[520px] h-auto"
        />
      </div>

      <p className="relative max-w-[58ch] mt-9 text-2xl leading-[1.6] font-light text-ink-muted text-left md:text-justify">
        Licenciado en Tecnología de la Información, orientado a{" "}
        <em className="font-serif italic text-[26px] text-accent">
          ciberseguridad
        </em>{" "}
        y seguridad de la información.
      </p>

      <div className="relative flex items-center gap-5 mt-11 flex-wrap">
        <motion.a
          href="#servicios"
          className="inline-flex items-center gap-3 font-sans font-medium text-lg text-cyan border border-cyan rounded px-8 py-4 bg-cyan/[0.03]"
          initial={{ borderColor: "#00E5C7" }}
          whileHover={{
            y: -4,
            backgroundColor: "rgba(0,229,199,0.1)",
            boxShadow: "0 10px 32px rgba(9,17,32,0.45)",
          }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          Ver servicios
          <ArrowDown size={16} strokeWidth={1.5} />
        </motion.a>
        <motion.a
          href={siteConfig.cvUrl}
          download
          className="inline-flex items-center gap-3 font-sans text-lg text-ink-muted border rounded px-8 py-4"
          initial={{ borderColor: "rgba(148,180,210,0.35)" }}
          whileHover={{
            y: -4,
            borderColor: "rgba(148,180,210,0.6)",
            color: "#E6EEF6",
            boxShadow: "0 10px 32px rgba(9,17,32,0.45)",
          }}
          transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
        >
          <Download size={16} strokeWidth={1.5} />
          Descargar CV
        </motion.a>
      </div>
    </header>
  );
}
