import Image from "next/image";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-accent/[0.14] bg-[rgba(9,17,32,0.35)]">
      <div className="max-w-[1240px] mx-auto px-12 py-10 box-border flex items-center justify-between flex-wrap gap-4">
        <Image
          src="/logo/monogram-dark.svg"
          alt="MigueMoreiraIT"
          width={30}
          height={30}
        />
        <div className="font-mono text-xs tracking-[0.16em] text-accent-dim">
          © {year} MIGUEMOREIRAIT
        </div>
      </div>
    </footer>
  );
}
