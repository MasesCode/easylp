"use client";

import { useEffect, useRef } from "react";
import { animate, useReducedMotion } from "framer-motion";
import { formatarReais } from "@/lib/orcamento";

type NumeroAnimadoProps = {
  readonly valor: number;
  readonly className?: string;
  readonly anunciar?: boolean;
  readonly casas?: number;
};

export function NumeroAnimado({ valor, className, anunciar = false, casas = 0 }: NumeroAnimadoProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const anterior = useRef(valor);
  const reduzir = useReducedMotion();

  useEffect(() => {
    const elemento = ref.current;
    if (!elemento) return;
    const inicio = anterior.current;
    anterior.current = valor;
    if (reduzir || inicio === valor) {
      elemento.textContent = formatarReais(valor, casas);
      return;
    }
    const controle = animate(inicio, valor, {
      duration: 0.6,
      ease: "easeOut",
      onUpdate: (atual) => {
        elemento.textContent = formatarReais(atual, casas);
      },
    });
    return () => controle.stop();
  }, [valor, reduzir, casas]);

  return (
    <span ref={ref} className={className} aria-live={anunciar ? "polite" : undefined}>
      {formatarReais(valor, casas)}
    </span>
  );
}
