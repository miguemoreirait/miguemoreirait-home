"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { ContactForm } from "@/components/ContactForm";
import { WhatsAppIcon, InstagramIcon, LinkedInIcon } from "@/components/icons/BrandIcons";
import { siteConfig, whatsappHref, emailHref } from "@/lib/site-config";

const contacts = [
  { label: "WhatsApp", href: whatsappHref, Icon: WhatsAppIcon },
  { label: "Instagram", href: siteConfig.instagram, Icon: InstagramIcon },
  { label: "LinkedIn", href: siteConfig.linkedin, Icon: LinkedInIcon },
  { label: "Email", href: emailHref, Icon: Mail },
];

export function Contact() {
  return (
    <RevealSection
      id="contacto"
      className="max-w-[1240px] mx-auto px-12 pt-[110px] pb-[130px] box-border border-t border-accent/[0.14] text-center"
    >
      <div className="rounded-2xl border-2 border-cyan/50 bg-cyan/[0.04] px-8 py-16 md:px-16 md:py-20 shadow-[0_0_60px_rgba(0,229,199,0.08)]">
        <div className="inline-flex items-baseline gap-3.5 mb-7">
          <span className="w-7 h-px bg-primary -translate-y-1" />
          <span className="font-mono text-xs tracking-[0.22em] text-accent">
            CONTACTO
          </span>
          <span className="w-7 h-px bg-primary -translate-y-1" />
        </div>
        <h2 className="m-0 font-serif font-normal text-[56px] leading-[1.05] text-ink">
          ¿<em className="italic text-accent">Hablamos</em>?
        </h2>
        <p className="mx-auto mt-5 mb-12 max-w-[44ch] text-lg leading-[1.6] font-light text-ink-muted">
          Contame tu situación y coordinamos el mejor camino.
        </p>
        <div className="flex justify-center flex-wrap gap-4">
          {contacts.map(({ label, href, Icon }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-3 border rounded px-6.5 py-3.5 font-sans text-base font-normal text-ink-soft"
              initial={{ borderColor: "rgba(148,180,210,0.3)" }}
              whileHover={{
                scale: 1.06,
                borderColor: "#00E5C7",
                color: "#E6EEF6",
                boxShadow: "0 10px 28px rgba(9,17,32,0.4)",
              }}
              transition={{ duration: 0.25, ease: [0.4, 0, 0.2, 1] }}
            >
              <Icon size={17} strokeWidth={1.5} className="text-accent" />
              {label}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4 max-w-[640px] mx-auto my-12">
          <span className="h-px flex-1 bg-accent/20" />
          <span className="font-mono text-xs tracking-[0.18em] uppercase text-accent-dim whitespace-nowrap">
            o completá el formulario
          </span>
          <span className="h-px flex-1 bg-accent/20" />
        </div>

        <ContactForm />
      </div>
    </RevealSection>
  );
}
