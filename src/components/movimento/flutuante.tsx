"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

type FlutuanteProps = {
  readonly children: ReactNode;
  readonly className?: string;
  readonly deslocamento?: number;
  readonly giro?: number;
};

export function Flutuante({ children, className, deslocamento = 80, giro = 25 }: FlutuanteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [deslocamento, -deslocamento]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-giro, giro]);

  return (
    <motion.div ref={ref} aria-hidden style={{ y, rotate }} className={className}>
      {children}
    </motion.div>
  );
}
