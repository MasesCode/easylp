"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

type ImagemParallaxProps = {
  readonly src: string;
  readonly alt: string;
  readonly sizes: string;
  readonly className?: string;
  readonly intensidade?: number;
  readonly prioridade?: boolean;
  readonly classeImagem?: string;
};

export function ImagemParallax({ src, alt, sizes, className, intensidade = 60, prioridade = false, classeImagem }: ImagemParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-intensidade, intensidade]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <motion.div style={{ y, top: -intensidade, bottom: -intensidade }} className="absolute inset-x-0">
        <Image src={src} alt={alt} fill sizes={sizes} priority={prioridade} className={cn("object-cover", classeImagem)} />
      </motion.div>
    </div>
  );
}
