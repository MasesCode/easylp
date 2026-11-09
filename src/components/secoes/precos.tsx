"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { Bolha, Brilho } from "@/components/marca/decoracoes";
import { Flutuante } from "@/components/movimento/flutuante";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { Alternador, CartaoOpcao, Contador, Segmentado, TituloEtapa } from "@/components/secoes/precos-controles";
import { ResumoPreco } from "@/components/secoes/precos-resumo";
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
import { buscarServico, calcularOrcamento, formatarReais, PEDIDO_INICIAL } from "@/lib/orcamento";

export function Precos() {
  const [servico, setServico] = useState<IdServico>(PEDIDO_INICIAL.servico);
  const [modalidade, setModalidade] = useState<IdModalidade>(PEDIDO_INICIAL.modalidade);
  const [tipoImovel, setTipoImovel] = useState<IdTipoImovel>(PEDIDO_INICIAL.tipoImovel);
  const [comodos, setComodos] = useState<Readonly<Record<IdComodo, number>>>(PEDIDO_INICIAL.comodos);
  const [material, setMaterial] = useState<IdMaterial>(PEDIDO_INICIAL.material);
  const [adicionais, setAdicionais] = useState<ReadonlySet<IdAdicional>>(PEDIDO_INICIAL.adicionais);

  const orcamento = calcularOrcamento({ servico, modalidade, tipoImovel, comodos, material, adicionais });

  function alternarAdicional(id: IdAdicional) {
    setAdicionais((atual) => {
      const proximo = new Set(atual);
      if (proximo.has(id)) proximo.delete(id);
      else proximo.add(id);
      return proximo;
    });
  }

  return (
    <section id="precos" className="relative overflow-hidden py-secao">
      <Flutuante className="absolute top-32 right-[8%] hidden lg:block" deslocamento={110} giro={35}>
        <Brilho className="size-14 text-marca/30" />
      </Flutuante>
      <Flutuante className="absolute top-[45%] left-[4%] hidden lg:block" deslocamento={80}>
        <Bolha className="size-16 text-apoio/30" />
      </Flutuante>

      <div className="casca">
        <CabecalhoSecao sobrancelha={PRECOS.sobrancelha} titulo={PRECOS.titulo} subtitulo={PRECOS.subtitulo} />

        <Revelar atraso={0.1}>
          <ul className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-3">
            {PRECOS.garantias.map((garantia) => (
              <li key={garantia} className="relative rounded-[var(--radius-xl)] bg-apoio-suave px-5 pt-6 pb-4 text-center text-sm font-medium">
                <span className="absolute -top-3 left-1/2 flex size-6 -translate-x-1/2 items-center justify-center rounded-pill bg-apoio text-white">
                  <Check className="size-3.5" strokeWidth={3} aria-hidden />
                </span>
                {garantia}
              </li>
            ))}
          </ul>
        </Revelar>

        <div className="mt-14 grid gap-8 lg:grid-cols-[1.6fr_1fr] lg:gap-10">
          <div className="space-y-12">
            <Revelar>
              <TituloEtapa>{PRECOS.etapas.servico}</TituloEtapa>
              <div role="radiogroup" aria-label="Serviço" className="mt-5 grid gap-3 sm:grid-cols-2">
                {SERVICOS.itens.map((item) => (
                  <CartaoOpcao
                    key={item.id}
                    selecionado={item.id === servico}
                    aoEscolher={() => setServico(item.id)}
                    icone={item.icone}
                    titulo={item.titulo}
                    detalhe={`${formatarReais(item.base, 0)} · ${item.horas} horas`}
                  />
                ))}
              </div>
            </Revelar>

            <Revelar>
              <TituloEtapa>{PRECOS.etapas.modalidade}</TituloEtapa>
              <div role="radiogroup" aria-label="Quem vai atender" className="mt-5 grid gap-3 sm:grid-cols-2">
                {PRECOS.modalidades.map((item) => (
                  <CartaoOpcao
                    key={item.id}
                    selecionado={item.id === modalidade}
                    aoEscolher={() => setModalidade(item.id)}
                    icone={item.icone}
                    titulo={item.rotulo}
                    detalhe={item.detalhe}
                    selo={item.id === "equipe" ? `+${PRECOS.taxas.empresa}%` : undefined}
                  />
                ))}
              </div>
            </Revelar>

            <Revelar className="space-y-6">
              <TituloEtapa>{PRECOS.etapas.imovel}</TituloEtapa>
              <Segmentado rotulo="Tipo de imóvel" grupo="imovel" opcoes={PRECOS.tiposImovel} atual={tipoImovel} aoTrocar={setTipoImovel} />
              <div className="grid gap-3 sm:grid-cols-2">
                {PRECOS.comodos.map((comodo) => (
                  <Contador
                    key={comodo.id}
                    icone={comodo.icone}
                    rotulo={comodo.rotulo}
                    preco={comodo.preco}
                    valor={comodos[comodo.id]}
                    maximo={comodo.maximo}
                    aoMudar={(valor) => setComodos((atual) => ({ ...atual, [comodo.id]: valor }))}
                  />
                ))}
              </div>
              <Segmentado
                rotulo={PRECOS.materiais.rotulo}
                grupo="material"
                opcoes={PRECOS.materiais.opcoes}
                atual={material}
                aoTrocar={setMaterial}
              />
            </Revelar>

            <Revelar>
              <TituloEtapa>{PRECOS.etapas.adicionais}</TituloEtapa>
              <p className="mt-2 text-sm text-tinta-suave">{PRECOS.adicionais.subtitulo}</p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {PRECOS.adicionais.itens.map((item) => (
                  <li key={item.id}>
                    <Alternador
                      icone={item.icone}
                      rotulo={item.rotulo}
                      preco={item.preco}
                      incluido={adicionais.has(item.id)}
                      aoAlternar={() => alternarAdicional(item.id)}
                    />
                  </li>
                ))}
              </ul>
            </Revelar>
          </div>

          <Revelar atraso={0.15} direcao="direita">
            <ResumoPreco orcamento={orcamento} servico={buscarServico(servico).titulo} quantidadeAdicionais={adicionais.size} />
          </Revelar>
        </div>
      </div>
    </section>
  );
}
