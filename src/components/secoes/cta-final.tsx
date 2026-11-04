import { Button } from "@/components/ui/button";
import { CTA_FINAL } from "@/lib/conteudo";

export function CtaFinal() {
  return (
    <section className="casca py-secao">
      <div className="rounded-[var(--radius-3xl)] bg-gradient-to-br from-apoio to-marca px-6 py-16 text-center text-white md:px-14 md:py-24">
        <h2 className="mx-auto max-w-3xl text-[2rem] md:text-[3.25rem]">{CTA_FINAL.titulo}</h2>
        <p className="mx-auto mt-6 max-w-xl text-white/90">{CTA_FINAL.subtitulo}</p>
        <Button
          size="lg"
          className="mt-10 rounded-pill bg-destaque px-10 py-6 text-base text-white hover:bg-destaque/90"
        >
          {CTA_FINAL.cta}
        </Button>
        <p className="mt-6 text-sm text-white/75">{CTA_FINAL.microcopy}</p>
      </div>
    </section>
  );
}
