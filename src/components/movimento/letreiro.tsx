import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type LetreiroProps = {
  readonly children: ReactNode;
  readonly reverso?: boolean;
  readonly duracao?: number;
  readonly className?: string;
};

export function Letreiro({ children, reverso = false, duracao = 40, className }: LetreiroProps) {
  return (
    <div className={cn("letreiro group flex overflow-hidden", className)}>
      {[0, 1].map((copia) => (
        <div
          key={copia}
          aria-hidden={copia === 1 || undefined}
          className={cn("letreiro-faixa flex shrink-0 items-center", reverso && "letreiro-reverso")}
          style={{ animationDuration: `${duracao}s` }}
        >
          {children}
        </div>
      ))}
    </div>
  );
}
