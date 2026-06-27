import { notFound } from "next/navigation";
import { categories, getProductsByCategory, getCategoryBySlug } from "@/lib/data";
import { CategoryContent } from "./category-content";

export function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export function generateMetadata({ params }: { params: Promise<{ category: string }> }) {
  return params.then(({ category }) => {
    const cat = getCategoryBySlug(category);
    if (!cat) return { title: "Not Found" };
    return {
      title: `${cat.name} - Lab Grown Diamond ${cat.name} | LuxesJewel`,
      description: cat.description,
    };
  });
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  const categoryProducts = getProductsByCategory(category);

  return <CategoryContent category={cat} products={categoryProducts} />;
}
