"use client";

import { useState } from "react";
import { ArrowUp } from "lucide-react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useSpring } from "framer-motion";
import { RODAPE } from "@/lib/conteudo";

export function BarraProgresso() {
  const { scrollY, scrollYProgress } = useScroll();
  const escala = useSpring(scrollYProgress, { stiffness: 140, damping: 30, restDelta: 0.001 });
  const [mostrarTopo, setMostrarTopo] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => setMostrarTopo(y > 700));

  return (
    <>
      <motion.div
        aria-hidden
        style={{ scaleX: escala }}
        className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-apoio to-marca"
      />
      <AnimatePresence>
        {mostrarTopo && (
          <motion.button
            type="button"
            aria-label={RODAPE.voltarTopo}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            initial={{ opacity: 0, scale: 0.6, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 20 }}
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.92 }}
            className="fixed right-5 bottom-5 z-50 flex size-12 items-center justify-center rounded-pill bg-tinta text-white outline-none focus-visible:ring-3 focus-visible:ring-ring/50 md:right-8 md:bottom-8"
          >
            <ArrowUp className="size-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
