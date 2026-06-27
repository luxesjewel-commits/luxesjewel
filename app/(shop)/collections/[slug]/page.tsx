import { notFound } from "next/navigation";
import { collections, getCollectionBySlug, products } from "@/lib/data";
import { CollectionDetailContent } from "./collection-detail-content";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const collection = getCollectionBySlug(slug);
    if (!collection) return { title: "Not Found" };
    return {
      title: `${collection.name} Collection | LuxesJewel`,
      description: collection.longDescription,
    };
  });
}

export default async function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const collection = getCollectionBySlug(slug);
  if (!collection) notFound();

  const collectionProducts = products.slice(0, 6);

  return (
    <CollectionDetailContent
      collection={collection}
      products={collectionProducts}
    />
  );
}
