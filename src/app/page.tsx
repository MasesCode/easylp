import { Cabecalho } from "@/components/layout/cabecalho";
import { Rodape } from "@/components/layout/rodape";
import { BarraProgresso } from "@/components/movimento/progresso";
import { Hero } from "@/components/secoes/hero";
import { Faixa } from "@/components/secoes/faixa";
import { ComoFunciona } from "@/components/secoes/como-funciona";
import { Servicos } from "@/components/secoes/servicos";
import { Pilares } from "@/components/secoes/pilares";
import { Precos } from "@/components/secoes/precos";
import { Comparacao } from "@/components/secoes/comparacao";
import { Seguranca } from "@/components/secoes/seguranca";
import { App } from "@/components/secoes/app";
import { Depoimentos } from "@/components/secoes/depoimentos";
import { Profissionais } from "@/components/secoes/profissionais";
import { Cobertura } from "@/components/secoes/cobertura";
import { Dicas } from "@/components/secoes/dicas";
import { Faq } from "@/components/secoes/faq";
import { CtaFinal } from "@/components/secoes/cta-final";

export default function Home() {
  return (
    <>
      <BarraProgresso />
      <Cabecalho />
      <main>
        <Hero />
        <Faixa />
        <ComoFunciona />
        <Servicos />
        <Pilares />
        <Precos />
        <Comparacao />
        <Seguranca />
        <App />
        <Depoimentos />
        <Profissionais />
        <Cobertura />
        <Dicas />
        <Faq />
        <CtaFinal />
      </main>
      <Rodape />
    </>
  );
}
