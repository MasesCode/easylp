"use client";

import { useId, useState } from "react";
import Image from "next/image";
import { Check } from "lucide-react";
import { Contador } from "@/components/movimento/contador";
import { NumeroAnimado } from "@/components/movimento/numero-animado";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { BotaoCta } from "@/components/ui/botao-cta";
import { PROFISSIONAIS } from "@/lib/conteudo";

function Simulador() {
  const id = useId();
  const [diarias, setDiarias] = useState(5);
  const { simulador } = PROFISSIONAIS;
  const renda = Math.round(diarias * simulador.semanasPorMes * simulador.valorDiaria);
  const preenchido = ((diarias - 1) / 5) * 100;

  return (
    <div className="rounded-[var(--radius-2xl)] bg-superficie p-6 md:p-8">
      <p className="font-heading text-xl font-extrabold">{simulador.titulo}</p>
      <div className="mt-6 flex items-center justify-between text-sm">
        <label htmlFor={id} className="text-tinta-suave">
          {simulador.rotulo}
        </label>
        <span className="rounded-pill bg-marca-suave px-3 py-1 font-semibold text-marca">{diarias}</span>
      </div>
      <input
        id={id}
        type="range"
        min={1}
        max={6}
        step={1}
        value={diarias}
        onChange={(evento) => setDiarias(Number(evento.target.value))}
        className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-pill accent-marca"
        style={{ background: `linear-gradient(to right, var(--apoio), var(--marca) ${preenchido}%, var(--contorno) ${preenchido}%)` }}
      />
      <div className="mt-6 flex items-end justify-between gap-4 border-t border-border pt-6">
        <span className="text-sm text-tinta-suave">{simulador.resultado}</span>
        <NumeroAnimado valor={renda} anunciar className="font-heading text-4xl font-extrabold texto-gradiente" />
      </div>
      <p className="mt-4 text-xs text-tinta-suave">{simulador.nota}</p>
    </div>
  );
}

export function Profissionais() {
  return (
    <section id="profissionais" className="casca py-secao">
      <div className="rounded-[var(--radius-3xl)] bg-superficie-tint px-6 py-14 md:px-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <CabecalhoSecao
              alinhamento="esquerda"
              sobrancelha={PROFISSIONAIS.sobrancelha}
              titulo={PROFISSIONAIS.titulo}
              subtitulo={PROFISSIONAIS.texto}
            />

            <ul className="mt-9 space-y-4">
              {PROFISSIONAIS.itens.map((item, indice) => (
                <Revelar como="li" key={item} atraso={indice * 0.08} direcao="esquerda" className="flex items-center gap-3 text-sm text-tinta">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-pill bg-apoio text-white">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </Revelar>
              ))}
            </ul>

            <dl className="mt-10 grid grid-cols-3 gap-4">
              {PROFISSIONAIS.numeros.map((numero) => (
                <div key={numero.rotulo} className="flex flex-col">
                  <dt className="order-2 mt-1 text-xs text-tinta-suave">{numero.rotulo}</dt>
                  <dd className="order-1 font-heading text-2xl font-extrabold text-marca md:text-3xl">
                    <Contador valor={numero.valor} casas={numero.casas} prefixo={numero.prefixo} sufixo={numero.sufixo} />
                  </dd>
                </div>
              ))}
            </dl>

            <BotaoCta href="#profissionais" className="mt-10">
              {PROFISSIONAIS.cta}
            </BotaoCta>
          </div>

          <Revelar direcao="direita" className="flex flex-col gap-4">
            <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-2xl)]">
              <Image
                src={PROFISSIONAIS.imagem.src}
                alt={PROFISSIONAIS.imagem.alt}
                fill
                sizes="(min-width: 1024px) 520px, 100vw"
                className="object-cover"
              />
              <span className="absolute top-4 left-4 inline-flex items-center gap-2 rounded-pill bg-superficie px-4 py-2 text-xs font-medium">
                <span className="pulsar relative flex size-2 text-apoio">
                  <span className="relative size-2 rounded-pill bg-apoio" />
                </span>
                {PROFISSIONAIS.selo}
              </span>
            </div>
            <Simulador />
          </Revelar>
        </div>
      </div>
    </section>
  );
}
