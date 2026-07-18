import { Calendar } from "lucide-react";
import { RevealSection } from "@/components/RevealSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { workItems } from "@/lib/data/work";

export function Work() {
  return (
    <RevealSection
      id="trabajos"
      className="max-w-[1240px] mx-auto px-12 py-[110px] box-border border-t border-accent/[0.14]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12 mb-14">
        <SectionEyebrow>TRABAJOS REALIZADOS</SectionEyebrow>
        <h2 className="m-0 font-serif font-normal text-4xl leading-[1.1] text-ink">
          Proyectos
        </h2>
      </div>
      {workItems.length === 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="col-span-full flex flex-col items-center gap-4 border border-dashed border-accent/30 rounded-md py-[72px] px-8">
            <Calendar size={28} strokeWidth={1.5} className="text-primary" />
            <span className="font-mono text-sm tracking-[0.25em] text-accent">
              PRÓXIMAMENTE
            </span>
            <span className="text-base font-light text-accent-dim">
              Los primeros casos se publican acá.
            </span>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {workItems.map((item) => (
            <div
              key={item.slug}
              className="flex flex-col gap-3 bg-bg-mid/45 border border-accent/20 rounded-md p-7"
            >
              <h3 className="m-0 font-sans font-semibold text-xl text-ink">
                {item.titulo}
              </h3>
              <p className="m-0 text-base leading-relaxed font-light text-ink-muted text-justify">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      )}
    </RevealSection>
  );
}
