import { RevealSection } from "@/components/RevealSection";
import { SectionEyebrow } from "@/components/SectionEyebrow";
import { skills } from "@/lib/data/skills";

export function Skills() {
  return (
    <RevealSection
      id="habilidades"
      className="max-w-[1240px] mx-auto px-12 py-[110px] box-border border-t border-accent/[0.14]"
    >
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-12">
        <SectionEyebrow>HABILIDADES TÉCNICAS</SectionEyebrow>
        <div>
          <h2 className="m-0 mb-10 font-serif font-normal text-4xl leading-[1.1] text-ink">
            Herramientas y{" "}
            <em className="italic text-accent">marcos de trabajo</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {skills.map((sk) => (
              <div
                key={sk.label}
                className="flex items-center gap-2.5 bg-bg-mid/45 border border-accent/[0.22] rounded-md px-4.5 py-2.5 text-base font-normal text-ink-soft transition-colors duration-250 ease-out hover:border-cyan/55 hover:text-ink"
              >
                <sk.icon
                  size={15}
                  strokeWidth={1.5}
                  className="text-accent shrink-0"
                />
                {sk.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
}
