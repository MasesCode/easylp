"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

type Direcao = "baixo" | "esquerda" | "direita" | "escala";

const ORIGEM: Record<Direcao, { x?: number; y?: number; scale?: number }> = {
  baixo: { y: 36 },
  esquerda: { x: -48 },
  direita: { x: 48 },
  escala: { scale: 0.92 },
};

type RevelarProps = {
  readonly children: ReactNode;
  readonly atraso?: number;
  readonly direcao?: Direcao;
  readonly className?: string;
  readonly como?: "div" | "li";
};

export function Revelar({ children, atraso = 0, direcao = "baixo", className, como = "div" }: RevelarProps) {
  const Elemento = como === "li" ? motion.li : motion.div;
  return (
    <Elemento
      className={className}
      initial={{ opacity: 0, ...ORIGEM[direcao] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "0px 0px -12% 0px" }}
      transition={{ duration: 0.7, delay: atraso, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </Elemento>
  );
}
