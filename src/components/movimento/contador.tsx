"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

type ContadorProps = {
  readonly valor: number;
  readonly casas?: number;
  readonly prefixo?: string;
  readonly sufixo?: string;
  readonly className?: string;
};

function formatar(valor: number, casas: number): string {
  return valor.toLocaleString("pt-BR", { minimumFractionDigits: casas, maximumFractionDigits: casas });
}

export function Contador({ valor, casas = 0, prefixo = "", sufixo = "", className }: ContadorProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const visivel = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const reduzir = useReducedMotion();

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento || !visivel) return;
    if (reduzir) {
      elemento.textContent = prefixo + formatar(valor, casas) + sufixo;
      return;
    }
    const controle = animate(0, valor, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (atual) => {
        elemento.textContent = prefixo + formatar(atual, casas) + sufixo;
      },
    });
    return () => controle.stop();
  }, [visivel, reduzir, valor, casas, prefixo, sufixo]);

  return (
    <span ref={ref} className={className}>
      {prefixo + formatar(valor, casas) + sufixo}
    </span>
  );
}
