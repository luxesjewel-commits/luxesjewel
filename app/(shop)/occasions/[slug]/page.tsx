import { notFound } from "next/navigation";
import { occasions, getOccasionBySlug, products } from "@/lib/data";
import { OccasionDetailContent } from "./occasion-detail-content";

export function generateStaticParams() {
  return occasions.map((o) => ({ slug: o.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const occasion = getOccasionBySlug(slug);
    if (!occasion) return { title: "Not Found" };
    return {
      title: `${occasion.name} | LuxesJewel`,
      description: occasion.longDescription,
    };
  });
}

export default async function OccasionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const occasion = getOccasionBySlug(slug);
  if (!occasion) notFound();

  const occasionProducts = products.slice(0, 6);

  return (
    <OccasionDetailContent occasion={occasion} products={occasionProducts} />
  );
}
