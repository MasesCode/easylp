import {
  PRECOS,
  SERVICOS,
  type IdAdicional,
  type IdComodo,
  type IdMaterial,
  type IdModalidade,
  type IdServico,
  type IdTipoImovel,
} from "@/lib/conteudo";

export type Pedido = {
  readonly servico: IdServico;
  readonly modalidade: IdModalidade;
  readonly tipoImovel: IdTipoImovel;
  readonly comodos: Readonly<Record<IdComodo, number>>;
  readonly material: IdMaterial;
  readonly adicionais: ReadonlySet<IdAdicional>;
};

export type Orcamento = {
  readonly base: number;
  readonly imovel: number;
  readonly material: number;
  readonly adicionais: number;
  readonly subtotal: number;
  readonly taxaPlataforma: number;
  readonly taxaEmpresa: number;
  readonly total: number;
  readonly horas: number;
};

type Servico = (typeof SERVICOS.itens)[number];

export const COMODOS_INICIAIS = Object.fromEntries(
  PRECOS.comodos.map((comodo) => [comodo.id, comodo.inicial]),
) as Record<IdComodo, number>;

export const PEDIDO_INICIAL: Pedido = {
  servico: "residencial",
  modalidade: "autonoma",
  tipoImovel: "apartamento",
  comodos: COMODOS_INICIAIS,
  material: "cliente",
  adicionais: new Set(),
};

function arredondar(valor: number): number {
  return Math.round(valor * 100) / 100;
}

function precoPorId<T extends { readonly id: string; readonly preco: number }>(lista: readonly T[], id: T["id"]): number {
  return lista.find((item) => item.id === id)?.preco ?? 0;
}

export function buscarServico(id: IdServico): Servico {
  return SERVICOS.itens.find((item) => item.id === id) ?? SERVICOS.itens[0];
}

export function calcularOrcamento(pedido: Pedido): Orcamento {
  const servico = buscarServico(pedido.servico);
  const comodos = PRECOS.comodos.reduce((soma, comodo) => soma + comodo.preco * (pedido.comodos[comodo.id] ?? 0), 0);
  const imovel = precoPorId(PRECOS.tiposImovel, pedido.tipoImovel) + comodos;
  const material = precoPorId(PRECOS.materiais.opcoes, pedido.material);
  const adicionais = PRECOS.adicionais.itens
    .filter((item) => pedido.adicionais.has(item.id))
    .reduce((soma, item) => soma + item.preco, 0);
  const subtotal = arredondar(servico.base + imovel + material + adicionais);
  const taxaPlataforma = arredondar((subtotal * PRECOS.taxas.plataforma) / 100);
  const taxaEmpresa = pedido.modalidade === "equipe" ? arredondar((subtotal * PRECOS.taxas.empresa) / 100) : 0;

  return {
    base: servico.base,
    imovel,
    material,
    adicionais,
    subtotal,
    taxaPlataforma,
    taxaEmpresa,
    total: arredondar(subtotal + taxaPlataforma + taxaEmpresa),
    horas: servico.horas,
  };
}

export function formatarReais(valor: number, casas = 2): string {
  return valor.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: casas,
    maximumFractionDigits: casas,
  });
}
