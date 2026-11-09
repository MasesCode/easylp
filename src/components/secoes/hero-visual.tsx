"use client";

import { useState, type PointerEvent } from "react";
import Image from "next/image";
import { Building2, CalendarDays, MapPin, ShieldCheck, Star } from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform, type MotionValue } from "framer-motion";
import { Bolha, Brilho } from "@/components/marca/decoracoes";
import { NumeroAnimado } from "@/components/movimento/numero-animado";
import { HERO, type IdServico } from "@/lib/conteudo";
import { buscarServico, calcularOrcamento, PEDIDO_INICIAL } from "@/lib/orcamento";
import { cn } from "@/lib/utils";

function useProfundidade(eixo: MotionValue<number>, intensidade: number): MotionValue<number> {
  return useTransform(eixo, [-0.5, 0.5], [-intensidade, intensidade]);
}

export function HeroVisual() {
  const ponteiroX = useMotionValue(0);
  const ponteiroY = useMotionValue(0);
  const x = useSpring(ponteiroX, { stiffness: 120, damping: 18 });
  const y = useSpring(ponteiroY, { stiffness: 120, damping: 18 });
  const girarX = useProfundidade(y, -8);
  const girarY = useProfundidade(x, 10);
  const chipX = useProfundidade(x, 26);
  const chipY = useProfundidade(y, 26);
  const chipXInverso = useProfundidade(x, -20);
  const chipYInverso = useProfundidade(y, -20);
  const [servicoId, setServicoId] = useState<IdServico>(HERO.agendamento.servicos[0].id);
  const servico = buscarServico(servicoId);
  const { total } = calcularOrcamento({ ...PEDIDO_INICIAL, servico: servicoId });

  function aoMover(evento: PointerEvent<HTMLDivElement>) {
    const area = evento.currentTarget.getBoundingClientRect();
    ponteiroX.set((evento.clientX - area.left) / area.width - 0.5);
    ponteiroY.set((evento.clientY - area.top) / area.height - 0.5);
  }

  function aoSair() {
    ponteiroX.set(0);
    ponteiroY.set(0);
  }

  const { agendamento, chips } = HERO;

  return (
    <motion.div
      onPointerMove={aoMover}
      onPointerLeave={aoSair}
      initial={{ opacity: 0, scale: 0.94 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex min-h-[520px] items-center justify-center py-16 [perspective:1200px] lg:self-stretch"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--radius-2xl)]">
        <motion.div style={{ x: chipXInverso, y: chipYInverso, scale: 1.08 }} className="absolute inset-0">
          <Image src={HERO.imagem.src} alt={HERO.imagem.alt} fill priority sizes="(min-width: 1024px) 560px, 100vw" className="object-cover" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-br from-apoio/40 via-transparent to-marca/55" />
      </div>
      <Brilho className="flutuar absolute top-6 left-8 size-8 text-white/80" />
      <Brilho className="flutuar-lento absolute right-10 bottom-16 size-5 text-white/70" />
      <Bolha className="flutuar absolute right-6 top-14 size-14 text-white/70" />
      <Bolha className="flutuar-lento absolute bottom-6 left-14 size-9 text-white/60" />

      <motion.div
        style={{ rotateX: girarX, rotateY: girarY }}
        className="relative w-full max-w-[340px] rounded-[var(--radius-2xl)] bg-superficie p-6 text-tinta [transform-style:preserve-3d]"
      >
        <div className="flex items-center justify-between">
          <p className="font-heading text-lg font-extrabold">{agendamento.titulo}</p>
          <span className="rounded-pill bg-apoio-suave px-3 py-1 text-xs font-medium text-apoio">Hoje</span>
        </div>

        <div role="radiogroup" aria-label="Tipo de faxina" className="mt-5 flex gap-2 rounded-pill bg-superficie-tint p-1">
          {agendamento.servicos.map((opcao) => (
            <button
              key={opcao.id}
              type="button"
              role="radio"
              aria-checked={servicoId === opcao.id}
              onClick={() => setServicoId(opcao.id)}
              className="relative flex-1 rounded-pill px-2 py-2 text-xs font-medium outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              {servicoId === opcao.id && (
                <motion.span
                  layoutId="hero-servico"
                  className="absolute inset-0 rounded-pill bg-gradient-to-r from-apoio to-marca"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className={cn("relative transition-colors", servicoId === opcao.id ? "text-white" : "text-tinta-suave")}>
                {opcao.rotulo}
              </span>
            </button>
          ))}
        </div>

        <ul className="mt-5 space-y-3 text-sm">
          <li className="flex items-center gap-3 text-tinta-suave">
            <Building2 className="size-4 text-marca" aria-hidden />
            {agendamento.imovel}
          </li>
          <li className="flex items-center gap-3 text-tinta-suave">
            <CalendarDays className="size-4 text-marca" aria-hidden />
            {agendamento.data}
          </li>
          <li className="flex items-center gap-3 text-tinta-suave">
            <MapPin className="size-4 text-marca" aria-hidden />
            {agendamento.endereco}
          </li>
        </ul>

        <div className="mt-5 flex items-center gap-3 rounded-[var(--radius-lg)] bg-superficie-tint p-3">
          <Image
            src={agendamento.profissional.foto}
            alt={`Foto de ${agendamento.profissional.nome}`}
            width={44}
            height={44}
            className="size-11 rounded-pill object-cover"
          />
          <div className="grow leading-tight">
            <p className="text-sm font-medium">{agendamento.profissional.nome}</p>
            <p className="text-xs text-tinta-suave">{agendamento.profissional.atendimentos}</p>
          </div>
          <span className="flex items-center gap-1 text-sm font-medium">
            <Star className="size-4 fill-destaque text-destaque" aria-hidden />
            {agendamento.profissional.nota}
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between">
          <div>
            <p className="text-xs text-tinta-suave">
              {servico.titulo} · {servico.horas}h
            </p>
            <NumeroAnimado valor={total} casas={2} className="block font-heading text-2xl font-extrabold" />
            <p className="text-[0.7rem] text-tinta-suave">{agendamento.taxaInclusa}</p>
          </div>
          <a
            href="#precos"
            className="rounded-pill bg-destaque px-4 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-marca-forte"
          >
            {agendamento.cta}
          </a>
        </div>
      </motion.div>

      <motion.div
        style={{ x: chipX, y: chipY }}
        className="absolute top-4 -left-2 flex items-center gap-3 rounded-[var(--radius-lg)] bg-superficie px-4 py-3 sm:left-0"
      >
        <span className="pulsar relative flex size-3 text-apoio">
          <span className="relative size-3 rounded-pill bg-apoio" />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-medium">{chips.caminho.titulo}</p>
          <p className="text-xs text-tinta-suave">{chips.caminho.detalhe}</p>
        </div>
      </motion.div>

      <motion.div
        style={{ x: chipXInverso, y: chipYInverso }}
        className="absolute -right-2 bottom-6 flex items-center gap-3 rounded-[var(--radius-lg)] bg-superficie px-4 py-3 sm:right-0"
      >
        <span className="flex size-9 items-center justify-center rounded-pill bg-marca-suave text-marca">
          <ShieldCheck className="size-5" aria-hidden />
        </span>
        <div className="leading-tight">
          <p className="text-sm font-medium">{chips.protegido.titulo}</p>
          <p className="text-xs text-tinta-suave">{chips.protegido.detalhe}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}
