export const VIGENCIA_CENTRO_LEGAL: string | null = null;

export const CAMPOS_LEGAIS: Readonly<Record<string, string | null>> = {
  "RAZÃO SOCIAL": null,
  CNPJ: null,
  "ENDEREÇO COMPLETO DA SEDE": null,
  "DOMÍNIO OFICIAL": "easyfaxina.com.br",
  "E-MAIL DE CONTATO": "contato@easyfaxina.com.br",
  "TELEFONE / WHATSAPP OFICIAL": null,
  "HORÁRIO DE ATENDIMENTO": "todos os dias, das 7h às 22h",
  "COMARCA DO FORO": null,
  "NOME DO ENCARREGADO": null,
  "E-MAIL DO DPO": null,
  "PERCENTUAL DA TAXA DE SERVIÇO": "5%",
  "LIMITE POR OCORRÊNCIA": null,
  "LIMITE POR ATENDIMENTO": null,
  FRANQUIA: null,
};

export function resolverCampo(campo: string, sugestao?: string): string | null {
  return CAMPOS_LEGAIS[campo] ?? sugestao ?? null;
}
