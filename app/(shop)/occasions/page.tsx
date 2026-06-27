import { occasions } from "@/lib/data";
import { OccasionsContent } from "./occasions-content";

export const metadata = {
  title: "Shop by Occasion | LuxesJewel",
  description:
    "Find the perfect lab-grown diamond jewellery for every occasion.",
};

export default function OccasionsPage() {
  return <OccasionsContent occasions={occasions} />;
}
