import { SERVICOS, type IdServico } from "@/lib/conteudo";

type Servico = (typeof SERVICOS.itens)[number];

export function buscarServico(id: IdServico): Servico {
  return SERVICOS.itens.find((item) => item.id === id) ?? SERVICOS.itens[0];
}

export function formatarReais(valor: number, casas = 2): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
}
