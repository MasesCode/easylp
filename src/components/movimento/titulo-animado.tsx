"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type TituloAnimadoProps = {
  readonly linhas: readonly { readonly texto: string; readonly className?: string }[];
  readonly className?: string;
};

export function TituloAnimado({ linhas, className }: TituloAnimadoProps) {
  let ordem = 0;
  return (
    <h1 className={className}>
      {linhas.map((linha) => (
        <span key={linha.texto} className="block">
          {linha.texto.split(" ").map((palavra) => {
            const atraso = 0.15 + ordem++ * 0.09;
            return (
              <span key={palavra + atraso} className="inline-block overflow-hidden pb-1 align-bottom">
                <motion.span
                  className={cn("inline-block", linha.className)}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.8, delay: atraso, ease: [0.22, 1, 0.36, 1] }}
                >
                  {palavra}&nbsp;
                </motion.span>
              </span>
            );
          })}
        </span>
      ))}
    </h1>
  );
}
