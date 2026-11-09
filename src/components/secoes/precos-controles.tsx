"use client";

import type { ReactNode } from "react";
import { Check, Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { ICONES, type NomeIcone } from "@/lib/icones";
import { formatarReais } from "@/lib/orcamento";
import { cn } from "@/lib/utils";

export function TituloEtapa({ children }: { readonly children: ReactNode }) {
  return <h3 className="font-heading text-xl font-extrabold md:text-2xl">{children}</h3>;
}

function rotuloAcrescimo(preco: number): string {
  return preco > 0 ? `+ ${formatarReais(preco, 0)}` : "Sem custo";
}

type CartaoOpcaoProps = {
  readonly selecionado: boolean;
  readonly aoEscolher: () => void;
  readonly icone: NomeIcone;
  readonly titulo: string;
  readonly detalhe: string;
  readonly selo?: string;
};

export function CartaoOpcao({ selecionado, aoEscolher, icone, titulo, detalhe, selo }: CartaoOpcaoProps) {
  const Icone = ICONES[icone];
  return (
    <button
      type="button"
      role="radio"
      aria-checked={selecionado}
      onClick={aoEscolher}
      className={cn(
        "relative flex h-full w-full items-start gap-3.5 rounded-[var(--radius-xl)] p-4 text-left outline-none transition-all duration-300 focus-visible:ring-3 focus-visible:ring-ring/50",
        selecionado ? "bg-gradient-to-br from-apoio to-marca text-white" : "bg-superficie-tint text-tinta hover:-translate-y-0.5 hover:bg-marca-suave",
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-pill transition-colors",
          selecionado ? "bg-white/20 text-white" : "bg-superficie text-marca",
        )}
      >
        <Icone className="size-5" aria-hidden />
      </span>
      <span className="grow leading-tight">
        <span className="block font-medium">{titulo}</span>
        <span className={cn("mt-1 block text-xs", selecionado ? "text-white/85" : "text-tinta-suave")}>{detalhe}</span>
      </span>
      {selo && (
        <span
          className={cn(
            "shrink-0 rounded-pill px-2 py-0.5 text-[0.7rem] font-medium",
            selecionado ? "bg-white/20 text-white" : "bg-marca-suave text-marca",
          )}
        >
          {selo}
        </span>
      )}
    </button>
  );
}

type OpcaoSegmentada<T extends string> = { readonly id: T; readonly rotulo: string; readonly preco: number };

type SegmentadoProps<T extends string> = {
  readonly rotulo: string;
  readonly grupo: string;
  readonly opcoes: readonly OpcaoSegmentada<T>[];
  readonly atual: T;
  readonly aoTrocar: (id: T) => void;
};

export function Segmentado<T extends string>({ rotulo, grupo, opcoes, atual, aoTrocar }: SegmentadoProps<T>) {
  return (
    <div>
      <p className="text-sm font-medium">{rotulo}</p>
      <div role="radiogroup" aria-label={rotulo} className="mt-3 flex gap-1.5 rounded-[var(--radius-xl)] bg-superficie-tint p-1.5">
        {opcoes.map((opcao) => {
          const ativa = opcao.id === atual;
          return (
            <button
              key={opcao.id}
              type="button"
              role="radio"
              aria-checked={ativa}
              onClick={() => aoTrocar(opcao.id)}
              className="relative flex-1 rounded-[var(--radius-lg)] px-2 py-2.5 text-center outline-none focus-visible:ring-3 focus-visible:ring-ring/50"
            >
              {ativa && (
                <motion.span
                  layoutId={`segmentado-${grupo}`}
                  className="absolute inset-0 rounded-[var(--radius-lg)] bg-tinta"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              <span className={cn("relative block text-sm font-medium transition-colors", ativa ? "text-white" : "text-tinta")}>
                {opcao.rotulo}
              </span>
              <span className={cn("relative block text-[0.7rem] transition-colors", ativa ? "text-white/70" : "text-tinta-suave")}>
                {rotuloAcrescimo(opcao.preco)}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

type ContadorProps = {
  readonly icone: NomeIcone;
  readonly rotulo: string;
  readonly preco: number;
  readonly valor: number;
  readonly maximo: number;
  readonly aoMudar: (valor: number) => void;
};

function BotaoContador({ rotulo, desabilitado, aoClicar, children }: {
  readonly rotulo: string;
  readonly desabilitado: boolean;
  readonly aoClicar: () => void;
  readonly children: ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={rotulo}
      disabled={desabilitado}
      onClick={aoClicar}
      className="flex size-8 items-center justify-center rounded-pill bg-superficie text-tinta outline-none transition-colors hover:bg-marca hover:text-white focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-35"
    >
      {children}
    </button>
  );
}

export function Contador({ icone, rotulo, preco, valor, maximo, aoMudar }: ContadorProps) {
  const Icone = ICONES[icone];
  return (
    <div role="group" aria-label={rotulo} className="flex items-center gap-3 rounded-[var(--radius-xl)] bg-superficie-tint p-3 pl-4">
      <Icone className="size-5 shrink-0 text-marca" aria-hidden />
      <span className="grow leading-tight">
        <span className="block text-sm font-medium">{rotulo}</span>
        <span className="block text-xs text-tinta-suave">{formatarReais(preco, 0)} cada</span>
      </span>
      <BotaoContador rotulo={`Remover ${rotulo.toLowerCase()}`} desabilitado={valor <= 0} aoClicar={() => aoMudar(valor - 1)}>
        <Minus className="size-4" aria-hidden />
      </BotaoContador>
      <motion.span
        key={valor}
        initial={{ y: -6, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="w-5 text-center font-heading text-lg font-extrabold tabular-nums"
        aria-live="polite"
      >
        {valor}
      </motion.span>
      <BotaoContador rotulo={`Adicionar ${rotulo.toLowerCase()}`} desabilitado={valor >= maximo} aoClicar={() => aoMudar(valor + 1)}>
        <Plus className="size-4" aria-hidden />
      </BotaoContador>
    </div>
  );
}

type AlternadorProps = {
  readonly icone: NomeIcone;
  readonly rotulo: string;
  readonly preco: number;
  readonly incluido: boolean;
  readonly aoAlternar: () => void;
};

export function Alternador({ icone, rotulo, preco, incluido, aoAlternar }: AlternadorProps) {
  const Icone = ICONES[icone];
  return (
    <button
      type="button"
      aria-pressed={incluido}
      onClick={aoAlternar}
      className={cn(
        "flex w-full items-center gap-3.5 rounded-[var(--radius-xl)] border p-3.5 text-left outline-none transition-all duration-300 focus-visible:ring-3 focus-visible:ring-ring/50",
        incluido ? "border-marca bg-marca-suave" : "border-border bg-superficie hover:border-marca/40",
      )}
    >
      <span
        className={cn(
          "flex size-10 shrink-0 items-center justify-center rounded-pill transition-colors",
          incluido ? "bg-marca text-white" : "bg-superficie-tint text-marca",
        )}
      >
        <Icone className="size-5" aria-hidden />
      </span>
      <span className="grow leading-tight">
        <span className="block text-sm font-medium">{rotulo}</span>
        <span className="mt-1 block text-sm text-apoio">{rotuloAcrescimo(preco)}</span>
      </span>
      <span
        className={cn(
          "flex size-7 shrink-0 items-center justify-center rounded-pill transition-colors",
          incluido ? "bg-marca text-white" : "bg-superficie-tint text-tinta-suave",
        )}
      >
        {incluido ? <Check className="size-4" strokeWidth={3} aria-hidden /> : <Plus className="size-4" aria-hidden />}
      </span>
    </button>
  );
}
