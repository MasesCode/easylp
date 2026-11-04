import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FAQ } from "@/lib/conteudo";

export function Faq() {
  return (
    <section id="faq" className="casca py-secao">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="sobrancelha">{FAQ.sobrancelha}</p>
          <h2 className="titulo-secao mt-4">{FAQ.titulo}</h2>
        </div>

        <Accordion multiple={false} className="mt-12 space-y-3">
          {FAQ.itens.map((item) => (
            <AccordionItem
              key={item.pergunta}
              value={item.pergunta}
              className="rounded-[var(--radius-lg)] border-0 bg-superficie-tint px-6"
            >
              <AccordionTrigger className="py-5 text-left text-base hover:no-underline">
                {item.pergunta}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-sm leading-relaxed text-tinta-suave">
                {item.resposta}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
