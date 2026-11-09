import { Clock, Mail } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Revelar } from "@/components/movimento/revelar";
import { CabecalhoSecao } from "@/components/secoes/cabecalho-secao";
import { FAQ } from "@/lib/conteudo";

export function Faq() {
  return (
    <section id="faq" className="casca py-secao">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.6fr]">
        <div>
          <CabecalhoSecao alinhamento="esquerda" sobrancelha={FAQ.sobrancelha} titulo={FAQ.titulo} subtitulo={FAQ.subtitulo} />
          <Revelar atraso={0.15} className="mt-9 rounded-[var(--radius-2xl)] bg-gradient-to-br from-apoio to-marca p-7 text-white lg:sticky lg:top-28">
            <p className="font-heading text-xl font-extrabold">{FAQ.contato.titulo}</p>
            <a href={`mailto:${FAQ.contato.email}`} className="mt-5 flex items-center gap-3 text-sm underline-offset-4 hover:underline">
              <Mail className="size-4" aria-hidden />
              {FAQ.contato.email}
            </a>
            <p className="mt-3 flex items-center gap-3 text-sm text-white/90">
              <Clock className="size-4" aria-hidden />
              {FAQ.contato.horario}
            </p>
          </Revelar>
        </div>

        <Accordion multiple={false} className="space-y-3">
          {FAQ.itens.map((item, indice) => (
            <Revelar key={item.pergunta} atraso={Math.min(indice, 5) * 0.05}>
              <AccordionItem
                value={item.pergunta}
                className="rounded-[var(--radius-lg)] border border-transparent bg-superficie-tint px-6 transition-colors duration-300 hover:border-border data-[open]:border-marca/30 data-[open]:bg-marca-suave"
              >
                <AccordionTrigger className="py-5 text-left text-base hover:no-underline">{item.pergunta}</AccordionTrigger>
                <AccordionContent className="pb-5 text-sm leading-relaxed text-tinta-suave">{item.resposta}</AccordionContent>
              </AccordionItem>
            </Revelar>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
