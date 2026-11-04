import Image from "next/image";
import { cn } from "@/lib/utils";
import simbolo from "../../../public/marca/logo.png";

export function Logo({ className, invertido = false }: { className?: string; invertido?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <span
        className={cn(
          "flex size-9 items-center justify-center rounded-[12px]",
          invertido ? "bg-white/10" : "bg-gradient-to-br from-apoio to-marca",
        )}
      >
        <Image src={simbolo} alt="" aria-hidden width={28} height={28} className="size-7" />
      </span>
      <span
        className={cn(
          "font-heading text-xl font-extrabold tracking-tight",
          invertido ? "text-white" : "text-tinta",
        )}
      >
        Easy Faxina
      </span>
    </span>
  );
}
