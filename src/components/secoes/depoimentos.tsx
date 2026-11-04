import { Star } from "lucide-react";
import { DEPOIMENTOS } from "@/lib/conteudo";

export function Depoimentos() {
  return (
    <section className="casca py-secao">
      <div className="mx-auto max-w-2xl text-center">
        <p className="sobrancelha">{DEPOIMENTOS.sobrancelha}</p>
        <h2 className="titulo-secao mt-4">{DEPOIMENTOS.titulo}</h2>
        <p className="mt-5 text-tinta-suave">{DEPOIMENTOS.subtitulo}</p>
      </div>

      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {DEPOIMENTOS.itens.map((item) => (
          <figure key={item.autor} className="cartao flex flex-col">
            <div className="flex gap-1" aria-label="5 de 5 estrelas">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-4 fill-destaque text-destaque" aria-hidden />
              ))}
            </div>
            <blockquote className="mt-6 grow text-sm leading-relaxed text-tinta">{item.texto}</blockquote>
            <figcaption className="mt-7">
              <p className="font-medium">{item.autor}</p>
              <p className="text-xs text-tinta-suave">{item.papel}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
