import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

export function WhatsAppIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 3a8 8 0 00-6.9 12l-1.1 4 4.1-1a8 8 0 103.9-15zM8.5 9.5c.5 2.5 3.5 5 5.5 5.5l1.5-1.5-2-1.5-1 .7c-1-.5-2.2-1.7-2.7-2.7l.7-1-1.5-2-1.5 1.5z" />
    </svg>
  );
}

export function InstagramIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="3.5" />
      <path d="M17.2 6.8h.01" />
    </svg>
  );
}

export function LinkedInIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <circle cx="7.5" cy="8" r="0.75" fill="currentColor" stroke="none" />
      <path d="M7.5 11v6" />
      <path d="M11.5 17v-6.5c0-1.5 1-2.5 2.5-2.5s2.5 1 2.5 2.5V17" />
    </svg>
  );
}
