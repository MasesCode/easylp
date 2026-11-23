import type { Metadata } from "next";
import { ArrowUpRight } from "lucide-react";
import { ContatoLegal } from "@/components/centro-legal/documento-legal";
import { ICONES_LEGAIS } from "@/components/centro-legal/icones-legais";
import { buscarDocumentoPorSlug, caminhoDocumento, CATEGORIAS_LEGAIS, CENTRO_LEGAL } from "@/lib/centro-legal";

export const metadata: Metadata = {
  title: "Centro Legal — Easy Faxina",
  description: CENTRO_LEGAL.subtitulo,
};

const ACESSO_RAPIDO = CENTRO_LEGAL.acessoRapido.flatMap((atalho) => {
  const documento = buscarDocumentoPorSlug(atalho.slug);
  return documento ? [{ ...atalho, documento }] : [];
});

export default function PaginaCentroLegal() {
  return (
    <div className="min-w-0 flex-1 py-2 lg:pl-12">
      <ul className="grid gap-4 sm:grid-cols-2">
        {ACESSO_RAPIDO.map(({ documento, icone, descricao }) => {
          const Icone = ICONES_LEGAIS[icone];
          return (
            <li key={documento.slug}>
              <a
                href={caminhoDocumento(documento)}
                className="group flex h-full flex-col rounded-[var(--radius-2xl)] bg-superficie-tint p-6 transition-[transform,background-color] duration-300 hover:-translate-y-1 hover:bg-marca-suave"
              >
                <span className="flex items-start justify-between">
                  <span className="flex size-12 items-center justify-center rounded-pill bg-superficie text-marca">
                    <Icone className="size-5" strokeWidth={1.75} aria-hidden />
                  </span>
                  <ArrowUpRight className="size-5 text-tinta-suave transition-transform duration-300 group-hover:rotate-45" aria-hidden />
                </span>
                <span className="mt-5 font-heading text-lg font-extrabold leading-snug">{documento.titulo}</span>
                <span className="mt-2 text-sm text-tinta-suave">{descricao}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <div className="mt-14 space-y-12">
        {CATEGORIAS_LEGAIS.map((categoria) => {
          const Icone = ICONES_LEGAIS[categoria.icone];
          return (
            <section key={categoria.id} aria-labelledby={`categoria-${categoria.id}`}>
              <h2 id={`categoria-${categoria.id}`} className="flex items-center gap-3 text-xl">
                <Icone className="size-5 text-marca" strokeWidth={1.75} aria-hidden />
                {categoria.titulo}
              </h2>
              <ul className="mt-5 divide-y divide-border border-y border-border">
                {categoria.documentos.map((documento) => (
                  <li key={documento.slug}>
                    <a href={caminhoDocumento(documento)} className="group flex items-start gap-4 py-5 transition-colors">
                      <span className="mt-0.5 w-7 shrink-0 text-sm font-semibold text-tinta-suave tabular-nums">{documento.numero}</span>
                      <span className="flex-1">
                        <span className="block font-semibold transition-colors group-hover:text-marca-forte">{documento.titulo}</span>
                        <span className="mt-1 block text-sm text-tinta-suave">{documento.resumo}</span>
                      </span>
                      <ArrowUpRight
                        className="mt-0.5 size-4 shrink-0 text-tinta-suave transition-transform duration-300 group-hover:rotate-45"
                        aria-hidden
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
      </div>

      <ContatoLegal />
    </div>
  );
}
