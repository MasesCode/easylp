import { Bolha, Brilho } from "@/components/marca/decoracoes";
import { Flutuante } from "@/components/movimento/flutuante";
import { Revelar } from "@/components/movimento/revelar";
import { Newsletter } from "@/components/secoes/newsletter";
import { BotaoCta } from "@/components/ui/botao-cta";
import { CTA_FINAL } from "@/lib/conteudo";

export function CtaFinal() {
  return (
    <section className="casca py-secao">
      <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-gradient-to-br from-apoio to-marca px-6 py-16 text-center text-white md:px-14 md:py-24">
        <Flutuante className="absolute top-10 left-[7%]" deslocamento={90} giro={60}>
          <Brilho className="size-16 text-white/30" />
        </Flutuante>
        <Flutuante className="absolute right-[9%] bottom-12" deslocamento={70}>
          <Bolha className="size-24 text-white/30" />
        </Flutuante>
        <Flutuante className="absolute top-1/3 right-[18%] hidden md:block" deslocamento={120} giro={30}>
          <Brilho className="size-8 text-white/40" />
        </Flutuante>

        <Revelar className="relative">
          <h2 className="mx-auto max-w-3xl text-[2rem] md:text-[3.5rem]">{CTA_FINAL.titulo}</h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-white/90">{CTA_FINAL.subtitulo}</p>
          <BotaoCta href="#precos" variante="claro" className="mt-10 px-10">
            {CTA_FINAL.cta}
          </BotaoCta>
          <p className="mt-6 text-sm text-white/80">{CTA_FINAL.microcopy}</p>
          <Newsletter />
        </Revelar>
      </div>
    </section>
  );
}
