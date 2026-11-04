import { Check, X } from "lucide-react";
import { COMPARACAO } from "@/lib/conteudo";

export function Comparacao() {
  return (
    <section className="casca py-secao">
      <div className="mx-auto max-w-2xl text-center">
        <p className="sobrancelha">{COMPARACAO.sobrancelha}</p>
        <h2 className="titulo-secao mt-4">{COMPARACAO.titulo}</h2>
        <p className="mt-5 text-tinta-suave">{COMPARACAO.subtitulo}</p>
      </div>

      <div className="mt-14 grid gap-5 lg:grid-cols-2">
        <div className="cartao">
          <h3 className="text-xl text-tinta-suave">{COMPARACAO.informal.titulo}</h3>
          <ul className="mt-7 space-y-4">
            {COMPARACAO.informal.itens.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-tinta-suave">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-pill bg-superficie text-tinta-suave">
                  <X className="size-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[var(--radius-2xl)] bg-gradient-to-br from-apoio to-marca p-6 text-white md:p-8">
          <h3 className="text-xl">{COMPARACAO.easy.titulo}</h3>
          <ul className="mt-7 space-y-4">
            {COMPARACAO.easy.itens.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-pill bg-white/20">
                  <Check className="size-3.5" strokeWidth={3} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
