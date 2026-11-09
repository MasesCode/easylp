import { Check, X } from "lucide-react";
import { Bolha, Brilho } from "@/components/marca/decoracoes";
import { Flutuante } from "@/components/movimento/flutuante";
import { Revelar } from "@/components/movimento/revelar";
import { BotaoCta } from "@/components/ui/botao-cta";
import { COMPARACAO } from "@/lib/conteudo";

export function Comparacao() {
  return (
    <section className="casca py-secao">
      <div className="relative rounded-[var(--radius-3xl)] bg-gradient-to-br from-apoio to-marca px-5 pt-16 pb-24 md:px-14 md:pt-20 md:pb-28">
        <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-[var(--radius-3xl)]">
          <Flutuante className="absolute top-10 left-[8%]" deslocamento={70} giro={45}>
            <Brilho className="size-14 text-white/25" />
          </Flutuante>
          <Flutuante className="absolute right-[6%] bottom-24" deslocamento={90}>
            <Bolha className="size-24 text-white/30" />
          </Flutuante>
        </div>

        <Revelar className="relative mx-auto max-w-2xl text-center text-white">
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-white/80">{COMPARACAO.sobrancelha}</p>
          <h2 className="titulo-secao mt-4">{COMPARACAO.titulo}</h2>
          <p className="mt-5 text-lg text-white/90">{COMPARACAO.subtitulo}</p>
        </Revelar>

        <div className="relative mt-14 grid gap-5 lg:grid-cols-2">
          <Revelar direcao="esquerda" className="rounded-[var(--radius-2xl)] bg-superficie/90 p-6 md:p-8">
            <h3 className="text-xl text-tinta-suave">{COMPARACAO.informal.titulo}</h3>
            <ul className="mt-7 space-y-4">
              {COMPARACAO.informal.itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-tinta-suave line-through decoration-tinta-suave/40">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-pill bg-superficie-tint text-tinta-suave">
                    <X className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Revelar>

          <Revelar direcao="direita" atraso={0.1} className="rounded-[var(--radius-2xl)] bg-superficie p-6 md:p-8">
            <h3 className="text-xl">{COMPARACAO.easy.titulo}</h3>
            <ul className="mt-7 space-y-4">
              {COMPARACAO.easy.itens.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-tinta">
                  <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-pill bg-gradient-to-br from-apoio to-marca text-white">
                    <Check className="size-3.5" strokeWidth={3} aria-hidden />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Revelar>
        </div>

        <div className="recorte">
          <BotaoCta href="#precos">{COMPARACAO.cta}</BotaoCta>
        </div>
      </div>
    </section>
  );
}
