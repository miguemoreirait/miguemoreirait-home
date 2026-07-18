import { FileText, MessageCircle, Presentation, type LucideIcon } from "lucide-react";
import { siteConfig, whatsappHref } from "@/lib/site-config";

export type Service = {
  titulo: string;
  desc: string;
  cta: string;
  href: string;
  target?: "_blank";
  icon: LucideIcon;
};

export const services: Service[] = [
  {
    titulo: "Revisión de Perfil Técnico",
    desc: "CV y LinkedIn evaluados con foco en roles de IT y ciberseguridad.",
    cta: "Comentá QUIERO en Instagram",
    href: siteConfig.instagram,
    target: "_blank",
    icon: FileText,
  },
  {
    titulo: "Asesoría 1:1",
    desc: "30 minutos de consulta directa para tu camino hacia IT o ciberseguridad.",
    cta: "Coordinar por WhatsApp",
    href: whatsappHref,
    target: "_blank",
    icon: MessageCircle,
  },
  {
    titulo: "Charla de Concientización",
    desc: "Capacitación de 90 minutos para que tu equipo reconozca amenazas reales.",
    cta: "Ver más",
    href: "https://concientizacion.vercel.app",
    target: "_blank",
    icon: Presentation,
  },
];
