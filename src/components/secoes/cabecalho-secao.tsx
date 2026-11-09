import { Brilho } from "@/components/marca/decoracoes";
import { Revelar } from "@/components/movimento/revelar";
import { cn } from "@/lib/utils";

type CabecalhoSecaoProps = {
  readonly sobrancelha: string;
  readonly titulo: string;
  readonly subtitulo?: string;
  readonly alinhamento?: "centro" | "esquerda";
  readonly className?: string;
};

export function CabecalhoSecao({ sobrancelha, titulo, subtitulo, alinhamento = "centro", className }: CabecalhoSecaoProps) {
  const centro = alinhamento === "centro";
  return (
    <Revelar className={cn(centro ? "mx-auto max-w-2xl text-center" : "max-w-xl", className)}>
      <p className="sobrancelha-brilho">
        {sobrancelha}
        <Brilho className="size-3 text-apoio" />
      </p>
      <h2 className="titulo-secao mt-4">{titulo}</h2>
      {subtitulo && <p className="mt-5 text-tinta-suave">{subtitulo}</p>}
    </Revelar>
  );
}
