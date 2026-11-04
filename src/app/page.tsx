import { Cabecalho } from "@/components/layout/cabecalho";
import { Rodape } from "@/components/layout/rodape";
import { Hero } from "@/components/secoes/hero";
import { ComoFunciona } from "@/components/secoes/como-funciona";
import { Pilares } from "@/components/secoes/pilares";
import { Comparacao } from "@/components/secoes/comparacao";
import { Seguranca } from "@/components/secoes/seguranca";
import { Depoimentos } from "@/components/secoes/depoimentos";
import { Profissionais } from "@/components/secoes/profissionais";
import { Faq } from "@/components/secoes/faq";
import { CtaFinal } from "@/components/secoes/cta-final";

export default function Home() {
  return (
    <>
      <Cabecalho />
      <main>
        <Hero />
        <ComoFunciona />
        <Pilares />
        <Comparacao />
        <Seguranca />
        <Depoimentos />
        <Profissionais />
        <Faq />
        <CtaFinal />
      </main>
      <Rodape />
    </>
  );
}
