import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/conteudo";

export function Hero() {
  return (
    <section id="topo" className="casca pt-4 pb-secao">
      <div className="relative overflow-hidden rounded-[var(--radius-3xl)] bg-gradient-to-br from-apoio to-marca px-6 py-14 md:px-14 md:py-20">
        <div className="max-w-2xl rounded-[var(--radius-2xl)] bg-superficie p-7 md:p-12">
          <span className="inline-flex items-center gap-2 rounded-pill bg-marca-suave px-4 py-2 text-xs font-medium text-marca">
            {HERO.selo}
          </span>

          <h1 className="mt-7 text-[2.6rem] leading-[1.02] md:text-[4rem]">
            {HERO.tituloLinha1}
            <br />
            <span className="text-marca">{HERO.tituloLinha2}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-tinta-suave md:text-lg">{HERO.subtitulo}</p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button size="lg" className="rounded-pill bg-destaque px-8 py-6 text-base text-white hover:bg-destaque/90">
              {HERO.ctaPrimario}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-pill border-border bg-transparent px-8 py-6 text-base hover:bg-superficie-tint"
              nativeButton={false}
              render={<a href="#como-funciona" />}
            >
              {HERO.ctaSecundario}
            </Button>
          </div>

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
        </div>

        <div className="mt-6 inline-flex items-center gap-3 rounded-[var(--radius-lg)] bg-superficie px-5 py-3 md:absolute md:bottom-14 md:right-14 md:mt-0">
          <Star className="size-5 fill-destaque text-destaque" />
          <div className="leading-tight">
            <p className="font-medium">{HERO.nota.valor}</p>
            <p className="text-xs text-tinta-suave">{HERO.nota.total}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
