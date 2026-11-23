import type { ReactNode } from "react";
import { Cabecalho } from "@/components/layout/cabecalho";
import { Rodape } from "@/components/layout/rodape";
import { Brilho } from "@/components/marca/decoracoes";
import { MenuLegal, MenuLegalMovel } from "@/components/centro-legal/menu-legal";
import { CENTRO_LEGAL } from "@/lib/centro-legal";

export default function LayoutCentroLegal({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <>
      <Cabecalho />
      <main>
        <div className="bg-gradient-to-br from-apoio to-marca text-white">
          <div className="casca py-12 md:py-16">
            <p className="inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.18em] text-white/80">
              {CENTRO_LEGAL.sobrancelha}
              <Brilho className="size-3 text-white" />
            </p>
            <p className="mt-3 font-heading text-[2.25rem] font-extrabold tracking-tight md:text-[3.25rem]">{CENTRO_LEGAL.titulo}</p>
            <p className="mt-4 max-w-2xl text-white/90">{CENTRO_LEGAL.subtitulo}</p>
          </div>
        </div>

        <div className="casca pt-6 pb-secao lg:pt-12">
          <MenuLegalMovel />
          <div className="mt-6 flex lg:mt-0">
            <MenuLegal />
            {children}
          </div>
        </div>
      </main>
      <Rodape />
    </>
  );
}
