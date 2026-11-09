import { MapPin } from "lucide-react";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { COBERTURA } from "@/lib/conteudo";

export function Cobertura() {
  return (
    <section className="casca py-secao">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-center">
        <CabecalhoSecao alinhamento="esquerda" sobrancelha={COBERTURA.sobrancelha} titulo={COBERTURA.titulo} subtitulo={COBERTURA.subtitulo} />

        <ul className="flex flex-wrap gap-2.5">
          {COBERTURA.ativas.map((cidade, indice) => (
            <Revelar como="li" key={cidade} atraso={indice * 0.03} direcao="escala">
              <span className="group inline-flex items-center gap-2 rounded-pill border border-border bg-superficie px-4 py-2.5 text-sm font-medium transition-colors duration-300 hover:border-apoio hover:bg-apoio-suave">
                <MapPin className="size-4 text-apoio transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden />
                {cidade}
              </span>
            </Revelar>
          ))}
          <Revelar como="li" atraso={COBERTURA.ativas.length * 0.04} direcao="escala">
            <span className="inline-flex items-center gap-2 rounded-pill bg-gradient-to-r from-apoio to-marca px-5 py-3 text-sm font-medium text-white">
              <MapPin className="size-4" aria-hidden />
              {COBERTURA.interior}
            </span>
          </Revelar>
        </ul>
      </div>
    </section>
  );
}
