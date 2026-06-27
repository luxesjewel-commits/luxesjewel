import { notFound } from "next/navigation";
import { products, getProductBySlug } from "@/lib/data";
import { ProductDetailContent } from "./product-detail-content";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const product = getProductBySlug(slug);
    if (!product) return { title: "Not Found" };
    return {
      title: `${product.name} | LuxesJewel`,
      description: product.description,
    };
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, 4);

  return <ProductDetailContent product={product} relatedProducts={related} />;
}
