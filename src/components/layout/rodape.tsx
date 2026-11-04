import { Logo } from "@/components/marca/logo";
import { RODAPE } from "@/lib/conteudo";

export function Rodape() {
  return (
    <footer className="bg-tinta py-16 text-white">
      <div className="casca">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Logo invertido />
            <p className="mt-4 max-w-xs text-sm text-white/65">{RODAPE.tagline}</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {RODAPE.colunas.map((coluna) => (
              <nav key={coluna.titulo} aria-label={coluna.titulo}>
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-white/50">
                  {coluna.titulo}
                </h2>
                <ul className="mt-5 space-y-3">
                  {coluna.links.map((link) => (
                    <li key={link.rotulo}>
                      <a href={link.href} className="text-sm text-white/80 transition-colors hover:text-white">
                        {link.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{RODAPE.copyright}</p>
          <p>{RODAPE.feitoEm}</p>
        </div>
      </div>
    </footer>
  );
}
