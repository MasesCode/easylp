"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { ChevronDown, Menu } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ICONES_LEGAIS } from "@/components/centro-legal/icones-legais";
import { CATEGORIAS_LEGAIS, caminhoDocumento, CENTRO_LEGAL } from "@/lib/centro-legal";
import { cn } from "@/lib/utils";

function slugAtivo(caminho: string): string | undefined {
  return caminho.split("/").filter(Boolean)[1];
}

function ListaCategorias({ aoEscolher }: { readonly aoEscolher?: () => void }) {
  const ativo = slugAtivo(usePathname());
  const categoriaAtiva = CATEGORIAS_LEGAIS.find((categoria) => categoria.documentos.some((documento) => documento.slug === ativo));
  const [abertas, setAbertas] = useState<ReadonlySet<string>>(
    () => new Set([categoriaAtiva?.id ?? CATEGORIAS_LEGAIS[0].id]),
  );

  function alternar(id: string) {
    setAbertas((atual) => {
      const proximo = new Set(atual);
      if (proximo.has(id)) proximo.delete(id);
      else proximo.add(id);
      return proximo;
    });
  }

  return (
    <ul className="space-y-1">
      {CATEGORIAS_LEGAIS.map((categoria) => {
        const Icone = ICONES_LEGAIS[categoria.icone];
        const aberta = abertas.has(categoria.id) || categoria.id === categoriaAtiva?.id;
        return (
          <li key={categoria.id}>
            <button
              type="button"
              onClick={() => alternar(categoria.id)}
              aria-expanded={aberta}
              className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-semibold text-tinta transition-colors outline-none hover:bg-superficie-tint focus-visible:ring-2 focus-visible:ring-ring/50"
            >
              <Icone className="size-[18px] shrink-0 text-tinta-suave" strokeWidth={1.75} aria-hidden />
              <span className="flex-1">{categoria.titulo}</span>
              <span className="flex size-6 shrink-0 items-center justify-center rounded-pill bg-marca-suave text-xs font-medium text-tinta-suave">
                {categoria.documentos.length}
              </span>
              <ChevronDown
                className={cn("size-4 shrink-0 text-tinta-suave transition-transform duration-200", aberta && "rotate-180")}
                aria-hidden
              />
            </button>

            <AnimatePresence initial={false}>
              {aberta && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="ml-[1.4rem] overflow-hidden border-l border-border"
                >
                  {categoria.documentos.map((documento) => {
                    const selecionado = documento.slug === ativo;
                    return (
                      <li key={documento.slug}>
                        <a
                          href={caminhoDocumento(documento)}
                          onClick={aoEscolher}
                          aria-current={selecionado ? "page" : undefined}
                          className={cn(
                            "-ml-px block border-l-2 py-2 pr-3 pl-4 text-sm leading-snug transition-colors",
                            selecionado
                              ? "border-marca bg-marca-suave font-semibold text-marca-forte"
                              : "border-transparent text-tinta-suave hover:border-border hover:text-tinta",
                          )}
                        >
                          {documento.titulo}
                        </a>
                      </li>
                    );
                  })}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}

export function MenuLegal() {
  return (
    <aside className="hidden w-[300px] shrink-0 border-r border-border lg:block">
      <nav aria-label="Documentos do Centro Legal" className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto py-2 pr-4">
        <ListaCategorias />
      </nav>
    </aside>
  );
}

export function MenuLegalMovel() {
  const [aberto, setAberto] = useState(false);
  return (
    <Sheet open={aberto} onOpenChange={setAberto}>
      <SheetTrigger
        render={
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-pill border border-border bg-superficie px-4 py-2.5 text-sm font-medium text-tinta lg:hidden"
          />
        }
      >
        <Menu className="size-4" aria-hidden />
        {CENTRO_LEGAL.verDocumentos}
      </SheetTrigger>
      <SheetContent side="left" className="w-[86vw] max-w-sm overflow-y-auto">
        <SheetTitle className="px-6 pt-6 font-heading text-lg">{CENTRO_LEGAL.titulo}</SheetTitle>
        <nav aria-label="Documentos do Centro Legal" className="px-3 pb-8">
          <ListaCategorias aoEscolher={() => setAberto(false)} />
        </nav>
      </SheetContent>
    </Sheet>
  );
}
