import { Fragment } from "react";
import { buscarDocumentoPorNumero, caminhoDocumento, CENTRO_LEGAL } from "@/lib/centro-legal";
import { resolverCampo } from "@/lib/centro-legal/campos";
import type { TrechoLegal } from "@/lib/centro-legal/tipos";

function Trecho({ trecho }: { readonly trecho: TrechoLegal }) {
  if (typeof trecho === "string") return trecho;

  if ("negrito" in trecho) return <strong className="font-semibold text-tinta">{trecho.negrito}</strong>;

  if ("documento" in trecho) {
    const destino = buscarDocumentoPorNumero(trecho.documento);
    if (!destino) return trecho.texto;
    return (
      <a href={caminhoDocumento(destino)} title={destino.titulo} className="font-medium text-marca-forte underline-offset-4 hover:underline">
        {trecho.texto}
      </a>
    );
  }

  const valor = resolverCampo(trecho.campo, trecho.sugestao);
  if (valor) return valor;
  return (
    <mark title={trecho.campo.toLowerCase()} className="rounded-md bg-marca-suave px-1.5 py-0.5 text-sm font-medium text-marca-forte">
      {CENTRO_LEGAL.aDefinir}
    </mark>
  );
}

export function Trechos({ conteudo }: { readonly conteudo: readonly TrechoLegal[] }) {
  return conteudo.map((trecho, indice) => (
    <Fragment key={indice}>
      <Trecho trecho={trecho} />
    </Fragment>
  ));
}
