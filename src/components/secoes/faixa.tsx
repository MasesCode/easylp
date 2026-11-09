import { Brilho } from "@/components/marca/decoracoes";
import { Contador } from "@/components/movimento/contador";
import { Letreiro } from "@/components/movimento/letreiro";
import { Revelar } from "@/components/movimento/revelar";
import { LETREIRO, NUMEROS } from "@/lib/conteudo";

export function Faixa() {
  return (
    <section aria-label="Destaques" className="pb-secao">
      <Letreiro className="border-y border-border py-6" duracao={36}>
        {LETREIRO.map((item) => (
          <span key={item} className="flex items-center gap-8 pr-8 font-heading text-2xl font-extrabold text-tinta md:text-4xl">
            {item}
            <Brilho className="size-5 text-apoio md:size-6" />
          </span>
        ))}
      </Letreiro>

      <div className="casca mt-16">
        <dl className="grid grid-cols-2 gap-y-10 lg:grid-cols-4">
          {NUMEROS.map((numero, indice) => (
            <Revelar
              key={numero.rotulo}
              atraso={indice * 0.1}
              className="flex flex-col items-center border-border text-center lg:border-l lg:first:border-l-0"
            >
              <dt className="order-2 mt-2 text-sm text-tinta-suave">{numero.rotulo}</dt>
              <dd className="order-1 font-heading text-4xl font-extrabold md:text-5xl">
                <Contador valor={numero.valor} casas={numero.casas} sufixo={numero.sufixo} className="texto-gradiente" />
              </dd>
            </Revelar>
          ))}
        </dl>
      </div>
    </section>
  );
}
