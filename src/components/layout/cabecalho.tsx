"use client";

import { useState } from "react";
import { Menu, Sparkles, X } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Logo } from "@/components/marca/logo";
import { Button } from "@/components/ui/button";
import { BotaoCta } from "@/components/ui/botao-cta";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { ANUNCIO, NAV } from "@/lib/conteudo";
import { cn } from "@/lib/utils";

function BarraAnuncio({ aoFechar }: { readonly aoFechar: () => void }) {
  return (
    <motion.div
      initial={{ height: "auto" }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="overflow-hidden bg-gradient-to-r from-apoio to-marca text-white"
    >
      <div className="casca flex items-center justify-center gap-3 py-2.5 text-center text-sm">
        <Sparkles className="hidden size-4 shrink-0 sm:block" aria-hidden />
        <p>
          <strong className="font-semibold">{ANUNCIO.texto}</strong>
          <span className="hidden sm:inline"> · {ANUNCIO.destaque}</span>
          <a href={ANUNCIO.href} className="ml-3 font-medium underline underline-offset-4 hover:no-underline">
            {ANUNCIO.cta}
          </a>
        </p>
        <button
          type="button"
          onClick={aoFechar}
          aria-label="Fechar anúncio"
          className="ml-auto flex size-7 shrink-0 items-center justify-center rounded-pill transition-colors outline-none hover:bg-white/20 focus-visible:ring-2 focus-visible:ring-white"
        >
          <X className="size-4" />
        </button>
      </div>
    </motion.div>
  );
}

export function Cabecalho() {
  const { scrollY } = useScroll();
  const [rolou, setRolou] = useState(false);
  const [escondido, setEscondido] = useState(false);
  const [anuncioAberto, setAnuncioAberto] = useState(true);

  useMotionValueEvent(scrollY, "change", (atual) => {
    const anterior = scrollY.getPrevious() ?? 0;
    setRolou(atual > 12);
    setEscondido(atual > anterior && atual > 240);
  });

  return (
    <>
      <AnimatePresence initial={false}>
        {anuncioAberto && <BarraAnuncio aoFechar={() => setAnuncioAberto(false)} />}
      </AnimatePresence>

      <motion.header
        animate={{ y: escondido ? "-110%" : "0%" }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "sticky top-0 z-50 transition-colors duration-300",
          rolou ? "border-b border-border/70 bg-superficie/85 backdrop-blur-xl" : "bg-transparent",
        )}
      >
        <div className="casca flex h-20 items-center justify-between gap-6">
          <a href="#topo" aria-label="Easy Faxina, ir para o início" className="transition-transform hover:scale-[1.03]">
            <Logo />
          </a>

          <nav aria-label="principal" className="hidden items-center gap-1 xl:flex">
            {NAV.itens.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="group relative rounded-pill px-3.5 py-2 text-sm text-tinta-suave transition-colors hover:text-tinta"
              >
                {item.rotulo}
                <span
                  aria-hidden
                  className="absolute inset-x-3.5 bottom-1 h-0.5 origin-left scale-x-0 rounded-pill bg-gradient-to-r from-apoio to-marca transition-transform duration-300 group-hover:scale-x-100"
                />
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden h-11 rounded-pill px-5 sm:inline-flex">
              {NAV.entrar}
            </Button>
            <BotaoCta href={NAV.ctaHref} seta={false} className="hidden px-6 py-3 text-sm sm:inline-flex">
              {NAV.cta}
            </BotaoCta>

            <Sheet>
              <SheetTrigger
                render={
                  <Button variant="ghost" size="icon-lg" className="rounded-pill xl:hidden" aria-label="Abrir menu">
                    <Menu />
                  </Button>
                }
              />
              <SheetContent side="right" className="w-[82vw] max-w-sm">
                <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
                <nav aria-label="menu mobile" className="mt-14 flex flex-col gap-1 px-6">
                  {NAV.itens.map((item, indice) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      initial={{ opacity: 0, x: 24 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * indice + 0.1 }}
                      className="rounded-xl px-3 py-3 text-lg text-tinta transition-colors hover:bg-superficie-tint"
                    >
                      {item.rotulo}
                    </motion.a>
                  ))}
                  <BotaoCta href={NAV.ctaHref} className="mt-6">
                    {NAV.cta}
                  </BotaoCta>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </motion.header>
    </>
  );
}
