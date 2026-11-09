import { Bolha, Brilho } from "@/components/marca/decoracoes";
import { Flutuante } from "@/components/movimento/flutuante";
import { ImagemParallax } from "@/components/movimento/imagem-parallax";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { PILARES } from "@/lib/conteudo";
import { ICONES } from "@/lib/icones";

export function Pilares() {
  return (
    <section id="beneficios" className="relative overflow-hidden py-secao">
      <Flutuante className="absolute top-24 left-[6%] hidden lg:block" deslocamento={120} giro={40}>
        <Brilho className="size-12 text-apoio/40" />
      </Flutuante>
      <Flutuante className="absolute right-[7%] bottom-20 hidden lg:block" deslocamento={90}>
        <Bolha className="size-20 text-marca/30" />
      </Flutuante>

      <div className="casca">
        <CabecalhoSecao sobrancelha={PILARES.sobrancelha} titulo={PILARES.titulo} subtitulo={PILARES.subtitulo} />

        <Revelar direcao="escala" className="relative mt-14">
          <ImagemParallax
            src={PILARES.imagem.src}
            alt={PILARES.imagem.alt}
            sizes="(min-width: 1200px) 1140px, 100vw"
            className="aspect-[4/3] rounded-[var(--radius-3xl)] sm:aspect-[21/9]"
          />
          <div className="absolute bottom-5 left-5 rounded-[var(--radius-xl)] bg-superficie px-6 py-4 md:bottom-8 md:left-8">
            <p className="font-heading text-3xl font-extrabold texto-gradiente md:text-4xl">{PILARES.destaqueImagem.valor}</p>
            <p className="text-sm text-tinta-suave">{PILARES.destaqueImagem.rotulo}</p>
          </div>
        </Revelar>

        <ul className="mt-6 grid gap-6 md:grid-cols-3">
          {PILARES.cartoes.map((cartao, indice) => {
            const Icone = ICONES[cartao.icone];
            return (
              <Revelar como="li" key={cartao.titulo} atraso={indice * 0.12} className="group">
                <article className="h-full rounded-[var(--radius-2xl)] border border-border bg-superficie p-6 transition-colors duration-500 hover:border-marca/40 md:p-8">
                  <span className="relative flex size-14 items-center justify-center rounded-pill bg-marca-suave text-marca transition-colors duration-500 group-hover:bg-marca group-hover:text-white">
                    <Icone className="size-6 transition-transform duration-500 group-hover:scale-110" aria-hidden />
                  </span>
                  <h3 className="mt-7 text-2xl">{cartao.titulo}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-tinta-suave">{cartao.descricao}</p>
                </article>
              </Revelar>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
