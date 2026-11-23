import type { CategoriaLegal, DocumentoLegal } from "@/lib/centro-legal/tipos";
import { DOCUMENTO_01 } from "@/lib/centro-legal/documentos/documento-01";
import { DOCUMENTO_02 } from "@/lib/centro-legal/documentos/documento-02";
import { DOCUMENTO_03 } from "@/lib/centro-legal/documentos/documento-03";
import { DOCUMENTO_04 } from "@/lib/centro-legal/documentos/documento-04";
import { DOCUMENTO_05 } from "@/lib/centro-legal/documentos/documento-05";
import { DOCUMENTO_06 } from "@/lib/centro-legal/documentos/documento-06";
import { DOCUMENTO_07 } from "@/lib/centro-legal/documentos/documento-07";
import { DOCUMENTO_08 } from "@/lib/centro-legal/documentos/documento-08";
import { DOCUMENTO_09 } from "@/lib/centro-legal/documentos/documento-09";
import { DOCUMENTO_10 } from "@/lib/centro-legal/documentos/documento-10";
import { DOCUMENTO_11 } from "@/lib/centro-legal/documentos/documento-11";
import { DOCUMENTO_12 } from "@/lib/centro-legal/documentos/documento-12";
import { DOCUMENTO_13 } from "@/lib/centro-legal/documentos/documento-13";
import { DOCUMENTO_14 } from "@/lib/centro-legal/documentos/documento-14";
import { DOCUMENTO_15 } from "@/lib/centro-legal/documentos/documento-15";
import { DOCUMENTO_16 } from "@/lib/centro-legal/documentos/documento-16";

export const CENTRO_LEGAL = {
  titulo: "Centro Legal",
  subtitulo:
    "Termos, políticas e regras que valem para quem contrata e para quem presta serviço na Easy Faxina. Escolha um documento para ler na íntegra.",
  sobrancelha: "Transparência",
  verDocumentos: "Ver documentos",
  aplicaSe: "Aplica-se a",
  versao: "Versão",
  vigencia: "Vigente desde",
  aDefinir: "a definir",
  sumario: "Nesta página",
  anterior: "Anterior",
  proximo: "Próximo",
  contato: {
    titulo: "Dúvidas sobre algum documento?",
    texto: "Fale com o nosso time pelo e-mail abaixo, informando o nome e o número do documento.",
    email: "contato@easyfaxina.com.br",
  },
  acessoRapido: [
    { slug: "termos-de-uso", icone: "FileText", descricao: "As regras gerais de uso da plataforma." },
    { slug: "privacidade", icone: "Lock", descricao: "Como tratamos e protegemos os seus dados." },
    { slug: "cancelamento-e-reembolso", icone: "Wallet", descricao: "Prazos, taxas e devolução de valores." },
    { slug: "garantia-de-satisfacao", icone: "ShieldCheck", descricao: "Quando refazemos o serviço sem custo." },
  ],
} as const;

export const CATEGORIAS_LEGAIS: readonly CategoriaLegal[] = [
  { id: "principais", titulo: "Termos principais", icone: "FileText", documentos: [DOCUMENTO_01, DOCUMENTO_02, DOCUMENTO_03] },
  { id: "dados", titulo: "Privacidade e dados", icone: "Lock", documentos: [DOCUMENTO_04, DOCUMENTO_05] },
  { id: "pagamentos", titulo: "Pagamentos e cancelamentos", icone: "Wallet", documentos: [DOCUMENTO_06, DOCUMENTO_07] },
  { id: "protecao", titulo: "Garantia e proteção", icone: "ShieldCheck", documentos: [DOCUMENTO_08, DOCUMENTO_09, DOCUMENTO_10] },
  { id: "comunidade", titulo: "Comunidade e conduta", icone: "Users", documentos: [DOCUMENTO_11, DOCUMENTO_12, DOCUMENTO_13, DOCUMENTO_14] },
  { id: "atendimento", titulo: "Marca e atendimento", icone: "Scale", documentos: [DOCUMENTO_15, DOCUMENTO_16] },
];

export const DOCUMENTOS_LEGAIS: readonly DocumentoLegal[] = [...CATEGORIAS_LEGAIS.flatMap((categoria) => categoria.documentos)].sort((a, b) =>
  a.numero.localeCompare(b.numero),
);

const POR_SLUG = new Map(DOCUMENTOS_LEGAIS.map((documento) => [documento.slug, documento]));
const POR_NUMERO = new Map(DOCUMENTOS_LEGAIS.map((documento) => [documento.numero, documento]));

export function buscarDocumentoPorSlug(slug: string): DocumentoLegal | undefined {
  return POR_SLUG.get(slug);
}

export function buscarDocumentoPorNumero(numero: string): DocumentoLegal | undefined {
  return POR_NUMERO.get(numero);
}

export function caminhoDocumento(documento: Pick<DocumentoLegal, "slug">): string {
  return `/centro-legal/${documento.slug}/`;
}
