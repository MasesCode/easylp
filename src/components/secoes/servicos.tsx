import Image from "next/image";
import { ArrowUpRight, Clock } from "lucide-react";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { SERVICOS } from "@/lib/conteudo";
import { ICONES } from "@/lib/icones";
import { formatarReais } from "@/lib/orcamento";

export function Servicos() {
  return (
    <section id="servicos" className="casca py-secao">
      <CabecalhoSecao sobrancelha={SERVICOS.sobrancelha} titulo={SERVICOS.titulo} subtitulo={SERVICOS.subtitulo} />

      <ul className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {SERVICOS.itens.map((servico, indice) => {
          const Icone = ICONES[servico.icone];
          return (
            <Revelar
              como="li"
              key={servico.id}
              atraso={(indice % 3) * 0.1}
              className="group relative isolate flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] bg-superficie-tint p-3 pb-7 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 bg-gradient-to-br from-apoio to-marca opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative aspect-[16/10] overflow-hidden rounded-[var(--radius-xl)]">
                <Image
                  src={servico.imagem.src}
                  alt={servico.imagem.alt}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <span className="absolute top-4 right-4 flex size-10 items-center justify-center rounded-pill bg-superficie/90 text-tinta backdrop-blur-sm transition-transform duration-500 group-hover:rotate-45">
                  <ArrowUpRight className="size-5" aria-hidden />
                </span>
              </div>
              <span className="relative -mt-7 ml-4 flex size-14 items-center justify-center rounded-pill border-4 border-superficie-tint bg-superficie text-marca transition-[transform,border-color] duration-500 group-hover:rotate-[-8deg] group-hover:border-transparent">
                <Icone className="size-6" aria-hidden />
              </span>
              <h3 className="mt-5 px-4 text-2xl transition-colors duration-500 group-hover:text-white">{servico.titulo}</h3>
              <p className="mt-3 grow px-4 text-sm leading-relaxed text-tinta-suave transition-colors duration-500 group-hover:text-white/90">
                {servico.descricao}
              </p>
              <div className="mx-4 mt-7 flex items-center justify-between border-t border-border pt-5 text-sm transition-colors duration-500 group-hover:border-white/25">
                <span className="flex items-center gap-2 text-tinta-suave transition-colors duration-500 group-hover:text-white/90">
                  <Clock className="size-4" aria-hidden />
                  {servico.horas} horas
                </span>
                <span className="font-medium transition-colors duration-500 group-hover:text-white">
                  a partir de {formatarReais(servico.base, 0)}
                </span>
              </div>
            </Revelar>
          );
        })}
      </ul>
    </section>
  );
}
