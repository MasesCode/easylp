import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { DocumentoLegalConteudo } from "@/components/centro-legal/documento-legal";
import { buscarDocumentoPorSlug, DOCUMENTOS_LEGAIS } from "@/lib/centro-legal";

export const dynamicParams = false;

export function generateStaticParams(): { slug: string }[] {
  return DOCUMENTOS_LEGAIS.map((documento) => ({ slug: documento.slug }));
}

export async function generateMetadata({ params }: PageProps<"/centro-legal/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const documento = buscarDocumentoPorSlug(slug);
  if (!documento) return {};
  return {
    title: `${documento.titulo} — Centro Legal Easy Faxina`,
    description: documento.resumo,
  };
}

export default async function PaginaDocumentoLegal({ params }: PageProps<"/centro-legal/[slug]">) {
  const { slug } = await params;
  const documento = buscarDocumentoPorSlug(slug);
  if (!documento) notFound();
  return <DocumentoLegalConteudo documento={documento} />;
}
