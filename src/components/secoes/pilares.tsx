import { HeartHandshake, Smartphone, Smile } from "lucide-react";
import { PILARES } from "@/lib/conteudo";

const ICONES = { Smartphone, HeartHandshake, Smile };

export function Pilares() {
  return (
    <section id="beneficios" className="casca py-secao">
      <div className="mx-auto max-w-2xl text-center">
        <p className="sobrancelha">{PILARES.sobrancelha}</p>
        <h2 className="titulo-secao mt-4">{PILARES.titulo}</h2>
        <p className="mt-5 text-tinta-suave">{PILARES.subtitulo}</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {PILARES.cartoes.map((cartao) => {
          const Icone = ICONES[cartao.icone as keyof typeof ICONES];
          return (
            <article key={cartao.titulo} className="cartao-claro">
              <span className="flex size-14 items-center justify-center rounded-pill bg-marca-suave text-marca">
                <Icone className="size-6" />
              </span>
              <h3 className="mt-7 text-2xl">{cartao.titulo}</h3>
              <p className="mt-4 text-sm leading-relaxed text-tinta-suave">{cartao.descricao}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
