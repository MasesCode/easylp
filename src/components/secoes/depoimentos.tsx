import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Letreiro } from "@/components/movimento/letreiro";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { DEPOIMENTOS } from "@/lib/conteudo";

type Depoimento = (typeof DEPOIMENTOS.itens)[number];

function CartaoDepoimento({ item }: { readonly item: Depoimento }) {
  return (
    <figure className="mr-5 flex w-[340px] shrink-0 flex-col rounded-[var(--radius-2xl)] bg-superficie-tint p-7 transition-colors duration-300 hover:bg-marca-suave md:w-[400px]">
      <div className="flex items-center justify-between">
        <div className="flex gap-1" role="img" aria-label="5 de 5 estrelas">
          {Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className="size-4 fill-destaque text-destaque" aria-hidden />
          ))}
        </div>
        <Quote className="size-7 text-marca/25" aria-hidden />
      </div>
      <blockquote className="mt-5 grow text-[0.95rem] leading-relaxed whitespace-normal text-tinta">{item.texto}</blockquote>
      <figcaption className="mt-7 flex items-center gap-3">
        <Image
          src={item.foto}
          alt={`Foto de ${item.autor}`}
          width={44}
          height={44}
          className="size-11 rounded-pill object-cover ring-2 ring-superficie"
        />
        <span className="leading-tight">
          <span className="block font-medium">{item.autor}</span>
          <span className="block text-xs text-tinta-suave">{item.papel}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export function Depoimentos() {
  const metade = Math.ceil(DEPOIMENTOS.itens.length / 2);
  const linhas = [DEPOIMENTOS.itens.slice(0, metade), DEPOIMENTOS.itens.slice(metade)];

  return (
    <section className="overflow-hidden py-secao">
      <div className="casca">
        <CabecalhoSecao sobrancelha={DEPOIMENTOS.sobrancelha} titulo={DEPOIMENTOS.titulo} subtitulo={DEPOIMENTOS.subtitulo} />
      </div>

      <div className="mt-14 space-y-5 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        {linhas.map((linha, indice) => (
          <Letreiro key={indice} reverso={indice === 1} duracao={55}>
            {linha.map((item) => (
              <CartaoDepoimento key={item.autor} item={item} />
            ))}
          </Letreiro>
        ))}
      </div>
    </section>
  );
}
