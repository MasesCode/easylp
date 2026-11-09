"use client";

import { Check, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { SEGURANCA } from "@/lib/conteudo";
import { ICONES } from "@/lib/icones";

function Verificacao() {
  const { verificacao } = SEGURANCA;
  return (
    <Revelar className="relative overflow-hidden rounded-[var(--radius-2xl)] bg-tinta p-7 text-white md:p-10 lg:row-span-2">
      <span className="flex size-14 items-center justify-center rounded-pill bg-gradient-to-br from-apoio to-marca">
        <ShieldCheck className="size-7" aria-hidden />
      </span>
      <h3 className="mt-7 max-w-sm text-2xl md:text-3xl">{verificacao.titulo}</h3>
      <motion.ol
        className="mt-8 space-y-4"
        initial="oculto"
        whileInView="visivel"
        viewport={{ once: true, margin: "0px 0px -15% 0px" }}
        variants={{ visivel: { transition: { staggerChildren: 0.35, delayChildren: 0.3 } } }}
      >
        {verificacao.etapas.map((etapa) => (
          <motion.li
            key={etapa}
            className="flex items-center gap-4 text-sm"
            variants={{ oculto: { opacity: 0.35 }, visivel: { opacity: 1 } }}
          >
            <motion.span
              className="flex size-7 shrink-0 items-center justify-center rounded-pill bg-apoio"
              variants={{ oculto: { scale: 0 }, visivel: { scale: 1 } }}
              transition={{ type: "spring", stiffness: 420, damping: 18 }}
            >
              <Check className="size-4" strokeWidth={3} aria-hidden />
            </motion.span>
            {etapa}
          </motion.li>
        ))}
      </motion.ol>
      <p className="mt-9 inline-flex rounded-pill bg-white/10 px-4 py-2 text-sm text-white/85">{verificacao.aprovacao}</p>
    </Revelar>
  );
}

export function Seguranca() {
  return (
    <section id="seguranca" className="bg-superficie-tint py-secao">
      <div className="casca">
        <CabecalhoSecao sobrancelha={SEGURANCA.sobrancelha} titulo={SEGURANCA.titulo} subtitulo={SEGURANCA.subtitulo} />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.25fr_1fr_1fr]">
          <Verificacao />
          {SEGURANCA.itens.map((item, indice) => {
            const Icone = ICONES[item.icone];
            return (
              <Revelar
                key={item.titulo}
                atraso={(indice % 2) * 0.12}
                className="group rounded-[var(--radius-2xl)] bg-superficie p-6 transition-transform duration-500 hover:-translate-y-1.5 md:p-8"
              >
                <span className="flex size-12 items-center justify-center rounded-pill bg-apoio-suave text-apoio transition-transform duration-500 group-hover:rotate-12">
                  <Icone className="size-5" aria-hidden />
                </span>
                <h3 className="mt-6 text-lg">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-tinta-suave">{item.descricao}</p>
              </Revelar>
            );
          })}
        </div>
      </div>
    </section>
  );
}
