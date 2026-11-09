"use client";

import { useId, useState, type FormEvent } from "react";
import { Check, Send } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { NEWSLETTER } from "@/lib/conteudo";

const FORMATO_EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type Estado = "ocioso" | "erro" | "sucesso";

export function Newsletter() {
  const id = useId();
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<Estado>("ocioso");

  function aoEnviar(evento: FormEvent<HTMLFormElement>) {
    evento.preventDefault();
    setEstado(FORMATO_EMAIL.test(email.trim()) ? "sucesso" : "erro");
  }

  return (
    <div className="mx-auto mt-12 max-w-md text-left">
      <p className="text-center text-sm font-medium text-white/90">{NEWSLETTER.titulo}</p>
      <AnimatePresence mode="wait" initial={false}>
        {estado === "sucesso" ? (
          <motion.p
            key="sucesso"
            role="status"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mt-4 flex items-center justify-center gap-2 rounded-pill bg-white/15 px-5 py-3.5 text-sm"
          >
            <Check className="size-4" strokeWidth={3} aria-hidden />
            {NEWSLETTER.sucesso}
          </motion.p>
        ) : (
          <motion.form key="formulario" onSubmit={aoEnviar} noValidate exit={{ opacity: 0, scale: 0.95 }} className="mt-4">
            <label htmlFor={id} className="sr-only">
              {NEWSLETTER.rotulo}
            </label>
            <div className="flex gap-2 rounded-pill bg-superficie p-1.5">
              <input
                id={id}
                type="email"
                autoComplete="email"
                value={email}
                onChange={(evento) => {
                  setEmail(evento.target.value);
                  if (estado === "erro") setEstado("ocioso");
                }}
                placeholder={NEWSLETTER.placeholder}
                aria-invalid={estado === "erro"}
                aria-describedby={estado === "erro" ? `${id}-erro` : undefined}
                className="min-w-0 grow rounded-pill bg-transparent px-4 text-sm text-tinta outline-none placeholder:text-tinta-suave"
              />
              <button
                type="submit"
                className="inline-flex shrink-0 items-center gap-2 rounded-pill bg-tinta px-5 py-3 text-sm font-semibold text-white transition-colors outline-none hover:bg-tinta/85 focus-visible:ring-3 focus-visible:ring-ring/50"
              >
                {NEWSLETTER.cta}
                <Send className="size-4" aria-hidden />
              </button>
            </div>
            {estado === "erro" && (
              <p id={`${id}-erro`} role="alert" className="mt-2 px-4 text-xs font-medium text-white">
                {NEWSLETTER.erro}
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
