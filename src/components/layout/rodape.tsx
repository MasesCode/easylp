import { Logo } from "@/components/marca/logo";
import { Letreiro } from "@/components/movimento/letreiro";
import { Brilho } from "@/components/marca/decoracoes";
import { RODAPE } from "@/lib/conteudo";

export function Rodape() {
  return (
    <footer className="overflow-hidden bg-tinta text-white">
      <Letreiro className="border-b border-white/10 py-8" duracao={30}>
        {Array.from({ length: 4 }, (_, i) => (
          <span key={i} className="flex items-center gap-8 pr-8 font-heading text-4xl font-extrabold text-white/90 md:text-6xl">
            {RODAPE.tagline}
            <Brilho className="size-8 text-apoio" />
          </span>
        ))}
      </Letreiro>

      <div className="casca py-16">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2.4fr]">
          <div>
            <Logo invertido />
            <p className="mt-4 max-w-xs text-sm text-white/65">{RODAPE.tagline}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {RODAPE.redes.map((rede) => (
                <li key={rede.rotulo}>
                  <a
                    href={rede.href}
                    className="inline-flex rounded-pill border border-white/15 px-4 py-2 text-xs text-white/80 transition-colors hover:border-white hover:text-white"
                  >
                    {rede.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {RODAPE.colunas.map((coluna) => (
              <nav key={coluna.titulo} aria-label={coluna.titulo}>
                <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-white/50">{coluna.titulo}</h2>
                <ul className="mt-5 space-y-3">
                  {coluna.links.map((link) => (
                    <li key={link.rotulo}>
                      <a
                        href={link.href}
                        className="inline-block text-sm text-white/80 transition-[color,transform] duration-300 hover:translate-x-1 hover:text-white"
                      >
                        {link.rotulo}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.14em] text-white/50">{RODAPE.contato.titulo}</h2>
              <a href={`mailto:${RODAPE.contato.email}`} className="mt-5 block text-sm text-white/80 underline-offset-4 hover:text-white hover:underline">
                {RODAPE.contato.email}
              </a>
              <dl className="mt-5 space-y-2 text-sm">
                {RODAPE.contato.horarios.map((horario) => (
                  <div key={horario.dias} className="flex justify-between gap-4">
                    <dt className="text-white/55">{horario.dias}</dt>
                    <dd className="text-white/80">{horario.horas}</dd>
                  </div>
                ))}
              </dl>
            </div>
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
