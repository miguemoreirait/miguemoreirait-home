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
      {/* Circuit pattern, top strip — pinned to the header's own pt-[196px],
          a fixed-height band that is guaranteed empty above the badge at
          any viewport width (unlike a content-relative gutter, this never
          drifts when the paragraph reflows). */}
      <svg
        viewBox="0 0 1240 196"
        preserveAspectRatio="none"
        className="absolute top-0 inset-x-0 w-full h-[196px] pointer-events-none"
        aria-hidden="true"
      >
        <motion.polyline
          points="1240,50 1075,50 1075,145 920,145"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.07}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        />
        <motion.polyline
          points="0,80 150,80 150,150"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.07}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.65 }}
        />
        <motion.polyline
          points="1240,55 950,55 950,150"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.07}
          className="md:hidden"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        />

        {/* static junction node (desktop) */}
        <motion.circle
          cx={1075}
          cy={145}
          r={3}
          fill="#00E5C7"
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
        />
        {/* pulsing terminal node (desktop) — the only continuous loop */}
        <motion.circle
          cx={920}
          cy={145}
          r={3}
          fill="#00E5C7"
          className="hidden md:block"
          style={{ originX: 0.5, originY: 0.5 }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0.5, 0], scale: [1, 2.8] }}
          transition={{
            duration: 10,
            delay: 2.5,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.circle
          cx={920}
          cy={145}
          r={3.5}
          fill="#00E5C7"
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.1 }}
        />

        {/* pulsing terminal node (mobile) */}
        <motion.circle
          cx={950}
          cy={150}
          r={3}
          fill="#00E5C7"
          className="md:hidden"
          style={{ originX: 0.5, originY: 0.5 }}
          initial={{ opacity: 0, scale: 1 }}
          animate={{ opacity: [0.5, 0], scale: [1, 2.8] }}
          transition={{
            duration: 10,
            delay: 2.3,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
        <motion.circle
          cx={950}
          cy={150}
          r={3.5}
          fill="#00E5C7"
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.9 }}
        />
      </svg>

      {/* Circuit pattern, bottom strip — pinned to the header's own
          pb-[140px], same guarantee as the top strip but below the buttons. */}
      <svg
        viewBox="0 0 1240 140"
        preserveAspectRatio="none"
        className="absolute bottom-0 inset-x-0 w-full h-[140px] pointer-events-none"
        aria-hidden="true"
      >
        <motion.polyline
          points="1240,40 1080,40 1080,95 900,95"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.07}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 0.9 }}
        />
        <motion.polyline
          points="0,85 160,85 160,25"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.07}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, ease: [0.4, 0, 0.2, 1], delay: 1.15 }}
        />
        <motion.polyline
          points="0,100 130,100 130,30"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.07}
          className="md:hidden"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.65 }}
        />

        {/* static junction node (desktop) */}
        <motion.circle
          cx={900}
          cy={95}
          r={3}
          fill="#00E5C7"
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 2.6 }}
        />
        {/* static junction node (mobile) */}
        <motion.circle
          cx={130}
          cy={30}
          r={3}
          fill="#00E5C7"
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.95 }}
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
