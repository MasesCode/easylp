"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { BotaoCta } from "@/components/ui/botao-cta";
import { COMO_FUNCIONA } from "@/lib/conteudo";
import { ICONES } from "@/lib/icones";

type Passo = (typeof COMO_FUNCIONA.passos)[number];

function PassoItem({ passo, indice, progresso }: { readonly passo: Passo; readonly indice: number; readonly progresso: MotionValue<number> }) {
  const limite = indice / COMO_FUNCIONA.passos.length;
  const ativo = useTransform(progresso, [limite, limite + 0.12], [0, 1]);
  const escala = useTransform(ativo, [0, 1], [0.85, 1]);
  const Icone = ICONES[passo.icone];

  return (
    <li className="cartao-organico relative">
      <div className="relative size-16">
        <span className="absolute inset-0 flex items-center justify-center rounded-pill bg-superficie font-heading text-lg font-extrabold text-marca">
          {passo.numero}
        </span>
        <motion.span
          style={{ opacity: ativo, scale: escala }}
          className="absolute inset-0 flex items-center justify-center rounded-pill bg-gradient-to-br from-apoio to-marca text-white"
        >
          <Icone className="size-6" aria-hidden />
        </motion.span>
      </div>
      <h3 className="mt-7 text-xl">{passo.titulo}</h3>
      <p className="mt-3 text-sm leading-relaxed text-tinta-suave">{passo.descricao}</p>
    </li>
  );
}

export function ComoFunciona() {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 55%"] });
  const linha = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="como-funciona" className="casca py-secao">
      <CabecalhoSecao
        sobrancelha={COMO_FUNCIONA.sobrancelha}
        titulo={COMO_FUNCIONA.titulo}
        subtitulo={COMO_FUNCIONA.subtitulo}
      />

      <div className="relative mt-16">
        <div aria-hidden className="absolute top-14 right-[12%] left-[12%] hidden h-1 rounded-pill bg-superficie-tint lg:block">
          <motion.div style={{ scaleX: linha }} className="h-full origin-left rounded-pill bg-gradient-to-r from-apoio to-marca" />
        </div>
        <ol ref={ref} className="relative grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {COMO_FUNCIONA.passos.map((passo, indice) => (
            <PassoItem key={passo.numero} passo={passo} indice={indice} progresso={scrollYProgress} />
          ))}
        </ol>
      </div>

      <div className="mt-14 text-center">
        <BotaoCta href="#precos">{COMO_FUNCIONA.cta}</BotaoCta>
      </div>
    </section>
  );
}
