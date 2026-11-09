"use client";

import { Clock } from "lucide-react";
import { NumeroAnimado } from "@/components/movimento/numero-animado";
import { PRECOS } from "@/lib/conteudo";
import { formatarReais, type Orcamento } from "@/lib/orcamento";

type ResumoPrecoProps = {
  readonly orcamento: Orcamento;
  readonly servico: string;
  readonly quantidadeAdicionais: number;
};

function Linha({ rotulo, valor }: { readonly rotulo: string; readonly valor: number }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-white/70">{rotulo}</dt>
      <dd className="tabular-nums">{formatarReais(valor)}</dd>
    </div>
  );
}

export function ResumoPreco({ orcamento, servico, quantidadeAdicionais }: ResumoPrecoProps) {
  const { resumo, taxas } = PRECOS;
  return (
    <aside aria-label={resumo.titulo} className="sticky top-28 rounded-[var(--radius-2xl)] bg-tinta p-7 text-white md:p-8">
      <div className="flex items-center justify-between gap-4">
        <p className="font-heading text-xl font-extrabold">{resumo.titulo}</p>
        <span className="flex items-center gap-1.5 rounded-pill bg-white/10 px-3 py-1 text-xs">
          <Clock className="size-3.5" aria-hidden />
          {orcamento.horas}h
        </span>
      </div>
      <dl className="mt-6 space-y-3 text-sm">
        <Linha rotulo={servico} valor={orcamento.base} />
        <Linha rotulo={resumo.imovel} valor={orcamento.imovel} />
        {orcamento.material > 0 && <Linha rotulo={resumo.material} valor={orcamento.material} />}
        {quantidadeAdicionais > 0 && <Linha rotulo={`${resumo.adicionais} (${quantidadeAdicionais})`} valor={orcamento.adicionais} />}
        <div className="border-t border-white/15 pt-3">
          <Linha rotulo={resumo.subtotal} valor={orcamento.subtotal} />
        </div>
        <Linha rotulo={`${resumo.taxaPlataforma} (${taxas.plataforma}%)`} valor={orcamento.taxaPlataforma} />
        {orcamento.taxaEmpresa > 0 && <Linha rotulo={`${resumo.taxaEmpresa} (${taxas.empresa}%)`} valor={orcamento.taxaEmpresa} />}
      </dl>
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-white/15 pt-6">
        <span className="text-sm text-white/70">{resumo.total}</span>
        <NumeroAnimado valor={orcamento.total} casas={2} anunciar className="font-heading text-3xl font-extrabold md:text-4xl" />
      </div>
      <a
        href="#app"
        className="mt-7 flex items-center justify-center rounded-pill bg-destaque py-4 font-heading font-semibold text-white outline-none transition-colors hover:bg-marca-forte focus-visible:ring-3 focus-visible:ring-ring/50"
      >
        {resumo.cta} {formatarReais(orcamento.total)}
      </a>
      <p className="mt-4 text-center text-xs text-white/60">{resumo.nota}</p>
    </aside>
  );
}
