import Image from "next/image";
import { Award } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { credentials } from "@/lib/data/credentials";

export function AboutMe() {
  return (
    <RevealSection
      id="sobre-mi"
      className="max-w-[1240px] mx-auto px-12 py-[110px] box-border border-t border-accent/[0.14]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 mb-14">
        <SectionEyebrow>SOBRE MÍ</SectionEyebrow>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-12 md:items-center">
        <div className="relative mx-auto md:mx-0 w-[220px] md:w-full aspect-[5/6] rounded-lg overflow-hidden border border-accent/25">
          <Image
            src="/foto-perfil.png"
            alt="Miguel Moreira"
            fill
            sizes="(max-width: 768px) 220px, 400px"
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="m-0 max-w-[62ch] text-2xl leading-[1.65] font-light text-ink-soft text-left md:text-justify">
            Profesional en Tecnología de la Información con más de 10 años de
            experiencia en soporte técnico, infraestructura y sistemas de
            videovigilancia, dentro de la Superintendencia de Comunicaciones
            de la Policía Federal Argentina, en entornos de infraestructura
            crítica.
          </p>
          <p className="mt-6 max-w-[62ch] text-2xl leading-[1.65] font-light text-ink-muted text-left md:text-justify">
            Hoy orientado a{" "}
            <em className="font-serif italic text-[26px] text-accent">
              ciberseguridad
            </em>
            : formación en seguridad de la información, análisis de riesgos y
            modelos de seguridad basados en Zero Trust. La experiencia
            operativa real y la formación específica se combinan en un mismo
            perfil.
          </p>
        </div>
      </div>

      <p className="mt-6 max-w-[80ch] text-2xl leading-[1.65] font-light text-ink-muted text-left md:text-justify">
        Actualmente ayudo a personas que buscan dar el salto a IT o
        ciberseguridad — mejorando su CV, su LinkedIn y su presencia
        profesional para que la experiencia que ya tienen se traduzca en
        oportunidades reales. También trabajo con equipos y pymes en charlas
        de concientización en ciberseguridad, para que la seguridad deje de
        ser un tema abstracto y se vuelva parte de cómo trabajan todos los
        días.
      </p>

      <div className="flex flex-wrap gap-3 mt-11">
        {credentials.map((cred) => (
          <div
            key={cred.titulo}
            className="flex items-center gap-3 border border-accent/25 rounded-md px-4.5 py-3 transition-colors duration-250 ease-out hover:border-cyan/50"
          >
            <Award
              size={18}
              strokeWidth={1.5}
              className="text-accent shrink-0"
            />
            <div>
              <div className="text-base font-medium text-ink">
                {cred.titulo}
              </div>
              <div className="font-mono text-xs tracking-[0.15em] uppercase text-accent-dim mt-0.5">
                {cred.inst}
              </div>
            </div>
          </div>
        ))}
      </div>
    </RevealSection>
  );
}
