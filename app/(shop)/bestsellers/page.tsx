import { products } from "@/lib/data";
import { BestsellersContent } from "./bestsellers-content";

export const metadata = {
  title: "Bestsellers | LuxesJewel",
  description: "Our most loved lab-grown diamond jewellery pieces.",
};

export default function BestsellersPage() {
  const bestsellers = products.filter((p) => p.badge === "Bestseller" || p.badge === "Popular");
  const allProducts = bestsellers.length > 0 ? bestsellers : products.slice(0, 8);
  return <BestsellersContent products={allProducts} />;
}
