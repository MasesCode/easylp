"use client";

import { useEffect, useState } from "react";
import { Menu } from "lucide-react";
import { Logo } from "@/components/marca/logo";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { NAV } from "@/lib/conteudo";
import { cn } from "@/lib/utils";

export function Cabecalho() {
  const [rolou, setRolou] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 12);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        rolou ? "bg-superficie/90 backdrop-blur-md" : "bg-transparent",
      )}
    >
      <div className="casca flex h-20 items-center justify-between gap-6">
        <a href="#topo" aria-label="Easy Faxina, ir para o início">
          <Logo />
        </a>

        <nav aria-label="principal" className="hidden items-center gap-8 lg:flex">
          {NAV.itens.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-tinta-suave transition-colors hover:text-tinta"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" className="hidden rounded-pill sm:inline-flex">
            {NAV.entrar}
          </Button>
          <Button className="rounded-pill bg-destaque px-6 text-white hover:bg-destaque/90">
            {NAV.cta}
          </Button>

          <Sheet>
            <SheetTrigger
              render={
                <Button variant="ghost" size="icon" className="rounded-pill lg:hidden" aria-label="Abrir menu">
                  <Menu />
                </Button>
              }
            />
            <SheetContent side="right" className="w-[82vw] max-w-sm">
              <SheetTitle className="sr-only">Menu de navegação</SheetTitle>
              <nav aria-label="menu mobile" className="mt-14 flex flex-col gap-1 px-6">
                {NAV.itens.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="rounded-xl px-3 py-3 text-lg text-tinta transition-colors hover:bg-superficie-tint"
                  >
                    {item.rotulo}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
