import { FileCheck, Headphones, Lock, MapPin, Shield } from "lucide-react";
import { SEGURANCA } from "@/lib/conteudo";

const ICONES = { FileCheck, Lock, Shield, MapPin, Headphones };

export function Seguranca() {
  return (
    <section id="seguranca" className="bg-superficie-tint py-secao">
      <div className="casca">
        <div className="mx-auto max-w-2xl text-center">
          <p className="sobrancelha">{SEGURANCA.sobrancelha}</p>
          <h2 className="titulo-secao mt-4">{SEGURANCA.titulo}</h2>
          <p className="mt-5 text-tinta-suave">{SEGURANCA.subtitulo}</p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {SEGURANCA.itens.map((item) => {
            const Icone = ICONES[item.icone as keyof typeof ICONES];
            return (
              <article key={item.titulo} className="rounded-[var(--radius-2xl)] bg-superficie p-6 md:p-8">
                <span className="flex size-12 items-center justify-center rounded-pill bg-apoio-suave text-apoio">
                  <Icone className="size-5" />
                </span>
                <h3 className="mt-6 text-lg">{item.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-tinta-suave">{item.descricao}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
