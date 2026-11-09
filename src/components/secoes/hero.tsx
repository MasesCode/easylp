import Image from "next/image";
import { Check, Star } from "lucide-react";
import { Revelar } from "@/components/movimento/revelar";
import { TituloAnimado } from "@/components/movimento/titulo-animado";
import { BotaoCta } from "@/components/ui/botao-cta";
import { HeroVisual } from "@/components/secoes/hero-visual";
import { HERO } from "@/lib/conteudo";

export function Hero() {
  return (
    <section id="topo" className="casca pt-4 pb-10">
      <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-gradient-to-br from-apoio to-marca p-4 md:p-6">
        <div className="grid gap-4 lg:grid-cols-[1.15fr_1fr] lg:items-center">
          <div className="rounded-[var(--radius-2xl)] bg-superficie p-7 md:p-12">
            <Revelar>
              <span className="inline-flex items-center gap-2.5 rounded-pill bg-marca-suave px-4 py-2 text-xs font-medium text-marca">
                <span className="pulsar relative flex size-2 text-marca">
                  <span className="relative size-2 rounded-pill bg-marca" />
                </span>
                {HERO.selo}
              </span>
            </Revelar>

            <TituloAnimado
              className="mt-7 text-[2.6rem] leading-[1.02] md:text-[4.25rem]"
              linhas={[{ texto: HERO.tituloLinha1 }, { texto: HERO.tituloLinha2, className: "texto-gradiente" }]}
            />

            <Revelar atraso={0.5}>
              <p className="mt-6 max-w-xl text-base text-tinta-suave md:text-lg">{HERO.subtitulo}</p>
            </Revelar>

            <Revelar atraso={0.65} className="mt-9 flex flex-col gap-3 sm:flex-row">
              <BotaoCta href="#precos">{HERO.ctaPrimario}</BotaoCta>
              <BotaoCta href="#como-funciona" variante="contorno" seta={false}>
                {HERO.ctaSecundario}
              </BotaoCta>
            </Revelar>

            <Revelar atraso={0.8}>
              <ul className="mt-9 flex flex-wrap gap-x-7 gap-y-3">
                {HERO.atributos.map((atributo) => (
                  <li key={atributo} className="flex items-center gap-2 text-sm text-tinta-suave">
                    <span className="flex size-6 items-center justify-center rounded-pill bg-apoio-suave text-apoio">
                      <Check className="size-3.5" strokeWidth={3} />
                    </span>
                    {atributo}
                  </li>
                ))}
              </ul>

              <div className="mt-9 flex items-center gap-4 border-t border-border pt-7">
                <div className="flex -space-x-3" aria-hidden>
                  {HERO.avatares.map((avatar, indice) => (
                    <Image
                      key={avatar.nome}
                      src={avatar.foto}
                      alt=""
                      width={40}
                      height={40}
                      className="relative size-10 rounded-pill border-2 border-superficie object-cover"
                      style={{ zIndex: HERO.avatares.length - indice }}
                    />
                  ))}
                </div>
                <div className="leading-tight">
                  <p className="flex items-center gap-1 font-medium">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star key={i} className="size-4 fill-destaque text-destaque" aria-hidden />
                    ))}
                    <span className="ml-1">{HERO.nota.valor}</span>
                  </p>
                  <p className="text-xs text-tinta-suave">{HERO.nota.total}</p>
                </div>
              </div>
            </Revelar>
          </div>

          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
