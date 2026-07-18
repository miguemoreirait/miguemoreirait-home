import {
  ShieldCheck,
  ClipboardList,
  BadgeCheck,
  Compass,
  Camera,
  Headset,
  Database,
  ChartColumn,
  Code2,
  GitBranch,
  Container,
  type LucideIcon,
} from "lucide-react";

export type Skill = {
  label: string;
  icon: LucideIcon;
};

export const skills: Skill[] = [
  { label: "Zero Trust y protección de infraestructuras críticas", icon: ShieldCheck },
  { label: "Análisis y gestión de riesgos (ISO 27005, MAGERIT)", icon: ClipboardList },
  { label: "ISO/IEC 27001 (SGSI)", icon: BadgeCheck },
  { label: "NIST Cybersecurity Framework (NIST CSF)", icon: Compass },
  { label: "Videovigilancia IP, CCTV, Dahua DSS", icon: Camera },
  { label: "Soporte técnico N1/N2", icon: Headset },
  { label: "SQL / MySQL Workbench", icon: Database },
  { label: "Power BI", icon: ChartColumn },
  { label: "Python", icon: Code2 },
  { label: "Git / GitHub", icon: GitBranch },
  { label: "Docker", icon: Container },
];
