import { products } from "@/lib/data";
import { ReadyToShipContent } from "./ready-to-ship-content";

export const metadata = {
  title: "Ready To Ship | LuxesJewel",
  description:
    "Lab-grown diamond jewellery ready for immediate dispatch. Get it delivered in 2-3 days.",
};

export default function ReadyToShipPage() {
  return <ReadyToShipContent products={products.slice(0, 12)} />;
}
