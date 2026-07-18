export function SectionEyebrow({ children }: { children: string }) {
  return (
    <div className="flex items-baseline gap-3.5">
      <span className="w-7 h-px bg-primary -translate-y-1" />
      <span className="font-mono text-xs tracking-[0.22em] text-accent">
        {children}
      </span>
    </div>
  );
}
