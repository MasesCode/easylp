import { FileText, Lock, Scale, ShieldCheck, Users, Wallet, type LucideIcon } from "lucide-react";
import type { CategoriaLegal } from "@/lib/centro-legal/tipos";

export const ICONES_LEGAIS: Readonly<Record<CategoriaLegal["icone"], LucideIcon>> = {
  FileText,
  Lock,
  Scale,
  ShieldCheck,
  Users,
  Wallet,
};
