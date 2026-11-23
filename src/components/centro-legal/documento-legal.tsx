import { ArrowLeft, ArrowRight, Mail } from "lucide-react";
import { Trechos } from "@/components/centro-legal/trechos";
import { caminhoDocumento, CENTRO_LEGAL, DOCUMENTOS_LEGAIS } from "@/lib/centro-legal";
import { VIGENCIA_CENTRO_LEGAL } from "@/lib/centro-legal/campos";
import type { BlocoLegal, DocumentoLegal } from "@/lib/centro-legal/tipos";

function idSecao(numero: string): string {
  return `secao-${numero}`;
}

function Bloco({ bloco }: { readonly bloco: BlocoLegal }) {
  if (bloco.tipo === "lista") {
    return (
      <ul className="space-y-2.5 pl-1">
        {bloco.itens.map((item, indice) => (
          <li key={indice} className="flex gap-3">
            <span aria-hidden className="mt-[0.7em] size-1.5 shrink-0 rounded-pill bg-apoio" />
            <span>
              <Trechos conteudo={item} />
            </span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p id={bloco.clausula ? `clausula-${bloco.clausula}` : undefined} className="scroll-mt-28">
      {bloco.clausula && <span className="mr-2 font-semibold text-tinta tabular-nums">{bloco.clausula}.</span>}
      <Trechos conteudo={bloco.conteudo} />
    </p>
  );
}

function Navegacao({ documento }: { readonly documento: DocumentoLegal }) {
  const posicao = DOCUMENTOS_LEGAIS.findIndex((item) => item.slug === documento.slug);
  const anterior = DOCUMENTOS_LEGAIS[posicao - 1];
  const proximo = DOCUMENTOS_LEGAIS[posicao + 1];

  return (
    <nav aria-label="Outros documentos" className="mt-14 grid gap-3 sm:grid-cols-2">
      {anterior && (
        <a href={caminhoDocumento(anterior)} className="group rounded-[var(--radius-xl)] border border-border p-5 transition-colors hover:border-marca/40 hover:bg-marca-suave">
          <span className="flex items-center gap-2 text-xs text-tinta-suave">
            <ArrowLeft className="size-3.5 transition-transform group-hover:-translate-x-0.5" aria-hidden />
            {CENTRO_LEGAL.anterior}
          </span>
          <span className="mt-1.5 block text-sm font-semibold">{anterior.titulo}</span>
        </a>
      )}
      {proximo && (
        <a
          href={caminhoDocumento(proximo)}
          className="group rounded-[var(--radius-xl)] border border-border p-5 text-right transition-colors hover:border-marca/40 hover:bg-marca-suave sm:col-start-2"
        >
          <span className="flex items-center justify-end gap-2 text-xs text-tinta-suave">
            {CENTRO_LEGAL.proximo}
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden />
          </span>
          <span className="mt-1.5 block text-sm font-semibold">{proximo.titulo}</span>
        </a>
      )}
    </nav>
  );
}

export function ContatoLegal() {
  return (
    <div className="mt-10 rounded-[var(--radius-2xl)] bg-superficie-tint p-6 md:p-8">
      <p className="font-heading text-lg font-extrabold">{CENTRO_LEGAL.contato.titulo}</p>
      <p className="mt-2 text-sm text-tinta-suave">{CENTRO_LEGAL.contato.texto}</p>
      <a
        href={`mailto:${CENTRO_LEGAL.contato.email}`}
        className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-marca-forte underline-offset-4 hover:underline"
      >
        <Mail className="size-4" aria-hidden />
        {CENTRO_LEGAL.contato.email}
      </a>
    </div>
  );
}

export function DocumentoLegalConteudo({ documento }: { readonly documento: DocumentoLegal }) {
  return (
    <article className="min-w-0 flex-1 py-2 lg:pl-12">
      <p className="sobrancelha">Documento nº {documento.numero}</p>
      <h1 className="mt-3 text-[1.75rem] md:text-[2.5rem]">{documento.titulo}</h1>
      <p className="mt-5 max-w-3xl text-tinta-suave">{documento.resumo}</p>

      <dl className="mt-6 flex flex-wrap gap-2 text-xs">
        <div className="flex gap-1.5 rounded-pill bg-apoio-suave px-3.5 py-1.5">
          <dt className="shrink-0 text-tinta-suave">{CENTRO_LEGAL.aplicaSe}:</dt>
          <dd className="font-medium">{documento.aplicaSe}</dd>
        </div>
        <div className="flex gap-1.5 rounded-pill bg-superficie-tint px-3.5 py-1.5">
          <dt className="text-tinta-suave">{CENTRO_LEGAL.versao}</dt>
          <dd className="font-medium">{documento.versao}</dd>
        </div>
        {VIGENCIA_CENTRO_LEGAL && (
          <div className="flex gap-1.5 rounded-pill bg-superficie-tint px-3.5 py-1.5">
            <dt className="text-tinta-suave">{CENTRO_LEGAL.vigencia}</dt>
            <dd className="font-medium">{VIGENCIA_CENTRO_LEGAL}</dd>
          </div>
        )}
      </dl>

      <nav aria-label={CENTRO_LEGAL.sumario} className="mt-10 rounded-[var(--radius-xl)] border border-border p-5 md:p-6">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-tinta-suave">{CENTRO_LEGAL.sumario}</p>
        <ol className="mt-4 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-2">
          {documento.secoes.map((secao) => (
            <li key={secao.numero}>
              <a href={`#${idSecao(secao.numero)}`} className="flex gap-2 text-tinta-suave transition-colors hover:text-tinta">
                <span className="w-5 shrink-0 tabular-nums">{secao.numero}.</span>
                {secao.titulo}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      <div className="mt-12 space-y-12">
        {documento.secoes.map((secao) => (
          <section key={secao.numero} id={idSecao(secao.numero)} aria-labelledby={`${idSecao(secao.numero)}-titulo`} className="scroll-mt-28">
            <h2 id={`${idSecao(secao.numero)}-titulo`} className="flex gap-3 text-xl md:text-2xl">
              <span className="text-marca tabular-nums">{secao.numero}.</span>
              {secao.titulo}
            </h2>
            <div className="mt-5 space-y-4 text-[0.95rem] leading-[1.75] text-tinta-suave">
              {secao.blocos.map((bloco, indice) => (
                <Bloco key={indice} bloco={bloco} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <Navegacao documento={documento} />
      <ContatoLegal />
    </article>
  );
}
