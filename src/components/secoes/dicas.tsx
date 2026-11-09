import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { DICAS } from "@/lib/conteudo";

export function Dicas() {
  return (
    <section id="blog" className="casca py-secao">
      <CabecalhoSecao sobrancelha={DICAS.sobrancelha} titulo={DICAS.titulo} />
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {DICAS.itens.map((dica, indice) => {
          return (
            <Revelar como="li" key={dica.titulo} atraso={indice * 0.1}>
              <a href="#blog" className="group block outline-none">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[var(--radius-2xl)] group-focus-visible:ring-3 group-focus-visible:ring-ring/50">
                  <Image
                    src={dica.imagem.src}
                    alt={dica.imagem.alt}
                    fill
                    sizes="(min-width: 768px) 380px, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <span className="absolute top-5 left-5 rounded-pill bg-superficie px-3 py-1 text-xs font-medium text-tinta">{dica.categoria}</span>
                </div>
                <p className="mt-5 text-xs text-tinta-suave">{dica.leitura}</p>
                <h3 className="mt-2 text-xl transition-colors group-hover:text-marca">{dica.titulo}</h3>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-marca">
                  {DICAS.cta}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </a>
            </Revelar>
          );
        })}
      </ul>
    </section>
  );
}
