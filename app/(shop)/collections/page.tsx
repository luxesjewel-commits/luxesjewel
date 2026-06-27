import { collections } from "@/lib/data";
import { CollectionsContent } from "./collections-content";

export const metadata = {
  title: "Collections | LuxesJewel",
  description:
    "Explore our curated collections of lab-grown diamond jewellery.",
};

export default function CollectionsPage() {
  return <CollectionsContent collections={collections} />;
}
