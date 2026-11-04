import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PROFISSIONAIS } from "@/lib/conteudo";

export function Profissionais() {
  return (
    <section id="profissionais" className="casca py-secao">
      <div className="rounded-[var(--radius-3xl)] bg-superficie-tint px-6 py-14 md:px-14 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="sobrancelha">{PROFISSIONAIS.sobrancelha}</p>
            <h2 className="titulo-secao mt-4">{PROFISSIONAIS.titulo}</h2>
            <p className="mt-5 text-tinta-suave">{PROFISSIONAIS.texto}</p>

            <ul className="mt-9 space-y-4">
              {PROFISSIONAIS.itens.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-tinta">
                  <span className="flex size-6 shrink-0 items-center justify-center rounded-pill bg-apoio text-white">
                    <Check className="size-3.5" strokeWidth={3} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>

            <Button
              size="lg"
              className="mt-10 rounded-pill bg-destaque px-8 py-6 text-base text-white hover:bg-destaque/90"
            >
              {PROFISSIONAIS.cta}
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {PROFISSIONAIS.numeros.map((numero) => (
              <div key={numero.rotulo} className="rounded-[var(--radius-2xl)] bg-superficie p-6">
                <p className="text-3xl font-medium text-marca">{numero.valor}</p>
                <p className="mt-2 text-sm text-tinta-suave">{numero.rotulo}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
