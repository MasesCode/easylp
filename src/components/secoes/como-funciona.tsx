import { Button } from "@/components/ui/button";
import { COMO_FUNCIONA } from "@/lib/conteudo";

export function ComoFunciona() {
  return (
    <section id="como-funciona" className="casca py-secao">
      <div className="mx-auto max-w-2xl text-center">
        <p className="sobrancelha">{COMO_FUNCIONA.sobrancelha}</p>
        <h2 className="titulo-secao mt-4">{COMO_FUNCIONA.titulo}</h2>
        <p className="mt-5 text-tinta-suave">{COMO_FUNCIONA.subtitulo}</p>
      </div>

      <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {COMO_FUNCIONA.passos.map((passo) => (
          <li key={passo.numero} className="cartao">
            <span className="flex size-12 items-center justify-center rounded-pill bg-superficie text-sm font-medium text-marca">
              {passo.numero}
            </span>
            <h3 className="mt-6 text-xl">{passo.titulo}</h3>
            <p className="mt-3 text-sm leading-relaxed text-tinta-suave">{passo.descricao}</p>
          </li>
        ))}
      </ol>

      <div className="mt-12 text-center">
        <Button size="lg" className="rounded-pill bg-destaque px-8 py-6 text-base text-white hover:bg-destaque/90">
          {COMO_FUNCIONA.cta}
        </Button>
      </div>
    </section>
  );
}
