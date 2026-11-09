import type { ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Variante = "destaque" | "claro" | "contorno";

const VARIANTES: Record<Variante, string> = {
  destaque: "bg-destaque text-white hover:bg-marca-forte",
  claro: "bg-superficie text-tinta hover:bg-marca-suave",
  contorno: "border border-border bg-transparent text-tinta hover:border-tinta",
};

type BotaoCtaProps = {
  readonly children: ReactNode;
  readonly href: string;
  readonly variante?: Variante;
  readonly seta?: boolean;
  readonly className?: string;
};

export function BotaoCta({ children, href, variante = "destaque", seta = true, className }: BotaoCtaProps) {
  return (
    <a
      href={href}
      className={cn(
        "group/cta relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-pill px-8 py-4 font-heading text-base font-semibold transition-[background-color,border-color,transform] duration-300 outline-none hover:-translate-y-0.5 focus-visible:ring-3 focus-visible:ring-ring/50 active:translate-y-0",
        VARIANTES[variante],
        className,
      )}
    >
      <span className="relative block overflow-hidden">
        <span className="block transition-transform duration-300 ease-out group-hover/cta:-translate-y-full">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 block translate-y-full transition-transform duration-300 ease-out group-hover/cta:translate-y-0"
        >
          {children}
        </span>
      </span>
      {seta && (
        <ArrowRight className="size-4 transition-transform duration-300 group-hover/cta:translate-x-1" aria-hidden />
      )}
    </a>
  );
}
