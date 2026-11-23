export type TrechoLegal =
  | string
  | { readonly negrito: string }
  | { readonly campo: string; readonly sugestao?: string }
  | { readonly documento: string; readonly texto: string };

export type BlocoLegal =
  | { readonly tipo: "paragrafo"; readonly clausula?: string; readonly conteudo: readonly TrechoLegal[] }
  | { readonly tipo: "lista"; readonly itens: readonly (readonly TrechoLegal[])[] };

export type SecaoLegal = {
  readonly numero: string;
  readonly titulo: string;
  readonly blocos: readonly BlocoLegal[];
};

export type DocumentoLegal = {
  readonly numero: string;
  readonly slug: string;
  readonly titulo: string;
  readonly resumo: string;
  readonly aplicaSe: string;
  readonly versao: string;
  readonly secoes: readonly SecaoLegal[];
};

export type CategoriaLegal = {
  readonly id: string;
  readonly titulo: string;
  readonly icone: "FileText" | "Lock" | "Wallet" | "ShieldCheck" | "Users" | "Scale";
  readonly documentos: readonly DocumentoLegal[];
};
