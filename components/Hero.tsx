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
          drifts when the paragraph reflows). Two forking clusters, each a
          trunk (1.5px) splitting into thinner derivative branches (1px)
          that share the trunk's endpoint, so it reads as one traced
          network rather than loose segments. */}
      <svg
        viewBox="0 0 1240 196"
        preserveAspectRatio="none"
        className="absolute top-0 inset-x-0 w-full h-[196px] pointer-events-none"
        aria-hidden="true"
      >
        {/* — desktop cluster 1 (right): trunk -> J1 -> branch A / branch B -> J1c -> branch B1 / B2 */}
        <motion.polyline
          points="1240,45 1000,45 1000,90"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1.5}
          strokeOpacity={0.15}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        />
        <motion.polyline
          points="1000,90 1000,150 870,150"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 1.6 }}
        />
        <motion.polyline
          points="1000,90 1110,90 1110,155"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 1.8 }}
        />
        <motion.circle
          cx={1000}
          cy={90}
          r={1}
          fill="#94B4D2"
          fillOpacity={0.1}
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.6 }}
        />
        <motion.polyline
          points="1110,155 1180,155 1180,120"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 2.6 }}
        />
        <motion.polyline
          points="1110,155 1110,190"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 2.8 }}
        />
        <motion.circle
          cx={1110}
          cy={155}
          r={1}
          fill="#94B4D2"
          fillOpacity={0.1}
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.6 }}
        />

        {/* — desktop cluster 2 (left corner): trunk -> J2 -> branch A / branch B */}
        <motion.polyline
          points="0,90 150,90"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1.5}
          strokeOpacity={0.14}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 0.65 }}
        />
        <motion.polyline
          points="150,90 150,155"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 1.75 }}
        />
        <motion.polyline
          points="150,90 220,90 220,140"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 1.95 }}
        />
        <motion.circle
          cx={150}
          cy={90}
          r={1}
          fill="#94B4D2"
          fillOpacity={0.1}
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.75 }}
        />

        {/* — mobile cluster: trunk -> M1 -> branch A / branch B */}
        <motion.polyline
          points="1240,50 950,50 950,90"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1.5}
          strokeOpacity={0.15}
          className="md:hidden"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 0.4 }}
        />
        <motion.polyline
          points="950,90 950,140"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="md:hidden"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 1.4 }}
        />
        <motion.polyline
          points="950,90 1050,90 1050,130"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="md:hidden"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 1.6 }}
        />
        <motion.circle
          cx={950}
          cy={90}
          r={1}
          fill="#94B4D2"
          fillOpacity={0.1}
          className="md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.4 }}
        />
      </svg>

      {/* Circuit pattern, gap strips — the fixed vertical margins between the
          badge/wordmark/copy/buttons rows (mb-9, mt-9, mt-11) are empty at
          full width regardless of viewport, so a horizontal trace through
          them reads as the network wrapping around the content blocks
          without ever crossing a glyph. */}
      <svg
        viewBox="0 0 1240 36"
        preserveAspectRatio="none"
        className="hidden md:block absolute inset-x-0 w-full h-[36px] pointer-events-none"
        style={{ top: 228 }}
        aria-hidden="true"
      >
        <motion.polyline
          points="500,18 1240,18"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.1, ease: [0.4, 0, 0.2, 1], delay: 1.1 }}
        />
      </svg>
      <svg
        viewBox="0 0 1240 36"
        preserveAspectRatio="none"
        className="hidden md:block absolute inset-x-0 w-full h-[36px] pointer-events-none"
        style={{ top: 367 }}
        aria-hidden="true"
      >
        <motion.polyline
          points="620,18 1240,18"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 1.35 }}
        />
      </svg>
      <svg
        viewBox="0 0 1240 44"
        preserveAspectRatio="none"
        className="hidden md:block absolute inset-x-0 w-full h-[44px] pointer-events-none"
        style={{ top: 483 }}
        aria-hidden="true"
      >
        <motion.polyline
          points="1000,22 1240,22"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 1.5 }}
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
        {/* — desktop cluster: trunk -> J3 -> branch A / branch B */}
        <motion.polyline
          points="1240,30 950,30 950,70"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1.5}
          strokeOpacity={0.15}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1], delay: 0.9 }}
        />
        <motion.polyline
          points="950,70 950,110 820,110"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 2.1 }}
        />
        <motion.polyline
          points="950,70 1060,70 1060,25"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 2.3 }}
        />
        <motion.circle
          cx={950}
          cy={70}
          r={1}
          fill="#94B4D2"
          fillOpacity={0.1}
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.1 }}
        />

        {/* — desktop cluster, bottom-left: trunk -> J5 -> branch A / branch B */}
        <motion.polyline
          points="0,60 130,60"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1.5}
          strokeOpacity={0.16}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, ease: [0.4, 0, 0.2, 1], delay: 1.15 }}
        />
        <motion.polyline
          points="130,60 130,20 210,20"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.1}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 2.15 }}
        />
        <motion.polyline
          points="130,60 130,110 60,110"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.1}
          className="hidden md:block"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1], delay: 2.35 }}
        />
        <motion.circle
          cx={130}
          cy={60}
          r={1}
          fill="#94B4D2"
          fillOpacity={0.1}
          className="hidden md:block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.15 }}
        />

        {/* independent accent line, bottom (mobile only) */}
        <motion.polyline
          points="0,90 130,90 130,30"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          className="md:hidden"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 0.65 }}
        />
      </svg>

      {/* Circuit pattern, wide-screen gutter accent — only enabled at xl
          (1280px+), where the paragraph has already hit its max-w-58ch cap
          and measured out to a genuine ~228px clear gutter to its right at
          this size (verified — narrower breakpoints don't have this margin,
          which is why the core pattern above never relies on it). */}
      <svg
        viewBox="0 0 1240 730"
        preserveAspectRatio="none"
        className="hidden xl:block absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      >
        <motion.polyline
          points="1050,200 1050,400"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1.5}
          strokeOpacity={0.13}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.3, ease: [0.4, 0, 0.2, 1], delay: 1.0 }}
        />
        <motion.polyline
          points="1050,300 1150,300 1150,450"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.9, ease: [0.4, 0, 0.2, 1], delay: 2.4 }}
        />
        <motion.polyline
          points="1050,400 1000,400 1000,480"
          fill="none"
          stroke="#94B4D2"
          strokeWidth={1}
          strokeOpacity={0.09}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1], delay: 2.6 }}
        />
        <motion.circle
          cx={1050}
          cy={300}
          r={1}
          fill="#94B4D2"
          fillOpacity={0.1}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.4 }}
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
