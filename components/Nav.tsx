"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/lib/data/nav";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-3.5 transition-[background,border-color] duration-250 ease-out"
      style={{
        background: scrolled || menuOpen ? "rgba(19,32,58,0.72)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled || menuOpen ? "blur(14px)" : "none",
        borderBottom: `1px solid ${scrolled || menuOpen ? "rgba(148,180,210,0.14)" : "transparent"}`,
      }}
    >
      <a
        href="#top"
        aria-label="MigueMoreiraIT"
        className="flex items-center justify-center w-10 h-10 shrink-0"
        onClick={() => setMenuOpen(false)}
      >
        <Image
          src="/logo/monogram-dark.svg"
          alt="MigueMoreiraIT"
          width={40}
          height={40}
          priority
        />
      </a>

      <div className="hidden md:flex items-center gap-8">
        {navLinks.map((lnk) => (
          <a
            key={lnk.href}
            href={lnk.href}
            className="group relative font-mono text-xs tracking-[0.18em] uppercase whitespace-nowrap text-accent pb-1 hover:text-ink transition-colors duration-200"
          >
            {lnk.label}
            <span className="absolute left-0 bottom-0 h-px w-full bg-cyan origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
          </a>
        ))}
        <a
          href="#contacto"
          className="font-mono text-xs tracking-[0.18em] uppercase text-cyan border border-cyan/55 rounded px-4.5 py-2.5 hover:bg-cyan/8 hover:border-cyan transition-colors duration-200"
        >
          Contacto
        </a>
      </div>

      <button
        type="button"
        aria-label={menuOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((v) => !v)}
        className="md:hidden flex items-center justify-center w-10 h-10 text-accent"
      >
        {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            className="md:hidden absolute top-full left-0 right-0 flex flex-col gap-1 px-6 py-6 border-b border-accent/[0.14]"
            style={{ background: "rgba(19,32,58,0.96)", backdropFilter: "blur(14px)" }}
          >
            {navLinks.map((lnk) => (
              <a
                key={lnk.href}
                href={lnk.href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-sm tracking-[0.18em] uppercase text-accent hover:text-ink transition-colors duration-200 py-3 border-b border-accent/10"
              >
                {lnk.label}
              </a>
            ))}
            <a
              href="#contacto"
              onClick={() => setMenuOpen(false)}
              className="mt-4 text-center font-mono text-sm tracking-[0.18em] uppercase text-cyan border border-cyan/55 rounded px-4.5 py-3 hover:bg-cyan/8 transition-colors duration-200"
            >
              Contacto
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
