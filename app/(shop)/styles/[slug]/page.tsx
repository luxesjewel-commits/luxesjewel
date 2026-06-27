import { notFound } from "next/navigation";
import { styles, getStyleBySlug, products } from "@/lib/data";
import { StyleDetailContent } from "./style-detail-content";

export function generateStaticParams() {
  return styles.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const style = getStyleBySlug(slug);
    if (!style) return { title: "Not Found" };
    return {
      title: `${style.name} | LuxesJewel`,
      description: style.description,
    };
  });
}

export default async function StyleDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const style = getStyleBySlug(slug);
  if (!style) notFound();

  const styleProducts = products.slice(0, 8);

  return <StyleDetailContent style={style} products={styleProducts} />;
}
