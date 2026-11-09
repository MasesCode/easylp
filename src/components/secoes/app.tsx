"use client";

import { useEffect, useState } from "react";
import { Smartphone } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ImagemParallax } from "@/components/movimento/imagem-parallax";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { APP } from "@/lib/conteudo";
import { ICONES } from "@/lib/icones";
import { cn } from "@/lib/utils";

function useEtapaCiclica(total: number, intervalo: number): number {
  const [etapa, setEtapa] = useState(0);
  const reduzir = useReducedMotion();

  useEffect(() => {
    if (reduzir) return;
    const temporizador = window.setInterval(() => setEtapa((atual) => (atual + 1) % total), intervalo);
    return () => window.clearInterval(temporizador);
  }, [reduzir, total, intervalo]);

  return reduzir ? total - 1 : etapa;
}

function Celular() {
  const etapa = useEtapaCiclica(APP.linhaDoTempo.length, 2200);
  const atual = APP.linhaDoTempo[etapa];
  const IconeAtual = ICONES[atual.icone];

  return (
    <div className="relative w-full max-w-[280px] rounded-[44px] bg-tinta p-3">
      <div className="overflow-hidden rounded-[34px] bg-superficie-tint">
        <div className="bg-gradient-to-br from-apoio to-marca px-5 pt-8 pb-14 text-white">
          <p className="text-xs text-white/80">Sábado, 14 de novembro</p>
          <p className="mt-1 font-heading text-lg font-extrabold">Sua faxina de hoje</p>
        </div>
        <div className="-mt-9 px-4 pb-6">
          <div className="rounded-[var(--radius-lg)] bg-superficie p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={atual.titulo}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3 }}
                className="flex items-center gap-3"
              >
                <span className="flex size-10 items-center justify-center rounded-pill bg-marca-suave text-marca">
                  <IconeAtual className="size-5" aria-hidden />
                </span>
                <div className="leading-tight">
                  <p className="text-sm font-medium">{atual.titulo}</p>
                  <p className="text-xs text-tinta-suave">{atual.detalhe}</p>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 h-1.5 overflow-hidden rounded-pill bg-superficie-tint">
              <motion.div
                className="h-full rounded-pill bg-gradient-to-r from-apoio to-marca"
                animate={{ width: `${((etapa + 1) / APP.linhaDoTempo.length) * 100}%` }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
            </div>
          </div>

          <ol className="mt-5 space-y-1">
            {APP.linhaDoTempo.map((item, indice) => {
              const Icone = ICONES[item.icone];
              const feito = indice <= etapa;
              return (
                <li key={item.titulo} className="flex items-center gap-3 rounded-[var(--radius-md)] px-2 py-2">
                  <span
                    className={cn(
                      "flex size-8 shrink-0 items-center justify-center rounded-pill transition-colors duration-500",
                      feito ? "bg-apoio text-white" : "bg-superficie text-tinta-suave",
                    )}
                  >
                    <Icone className="size-4" aria-hidden />
                  </span>
                  <span className={cn("text-xs transition-colors duration-500", feito ? "text-tinta" : "text-tinta-suave")}>
                    {item.titulo}
                  </span>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export function App() {
  return (
    <section id="app" className="casca py-secao">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Revelar direcao="escala" className="relative overflow-hidden rounded-[var(--radius-3xl)] px-6 pt-60 pb-10 sm:py-12">
          <ImagemParallax
            src={APP.imagem.src}
            alt={APP.imagem.alt}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="!absolute inset-0"
            classeImagem="object-[15%_15%] sm:object-[15%_center]"
          />
          <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-tinta/50 via-tinta/10 to-transparent" />
          <div className="relative flex justify-center sm:justify-end sm:pr-4">
            <Celular />
          </div>
        </Revelar>

        <div>
          <CabecalhoSecao alinhamento="esquerda" sobrancelha={APP.sobrancelha} titulo={APP.titulo} subtitulo={APP.texto} />
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {APP.recursos.map((recurso, indice) => {
              const Icone = ICONES[recurso.icone];
              return (
                <Revelar como="li" key={recurso.titulo} atraso={indice * 0.08} className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-pill bg-marca-suave text-marca">
                    <Icone className="size-5" aria-hidden />
                  </span>
                  <div>
                    <p className="font-medium">{recurso.titulo}</p>
                    <p className="mt-1 text-sm text-tinta-suave">{recurso.descricao}</p>
                  </div>
                </Revelar>
              );
            })}
          </ul>
          <Revelar atraso={0.2} className="mt-10 flex flex-wrap gap-3">
            {APP.lojas.map((loja) => (
              <a
                key={loja}
                href="#app"
                className="inline-flex items-center gap-3 rounded-pill bg-tinta px-6 py-3.5 text-sm font-medium text-white transition-transform hover:-translate-y-0.5"
              >
                <Smartphone className="size-5" aria-hidden />
                {loja}
              </a>
            ))}
          </Revelar>
        </div>
      </div>
    </section>
  );
}
