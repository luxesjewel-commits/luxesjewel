import Link from "next/link";
import { Diamond } from "lucide-react";

const collections = [
  {
    name: "Precious",
    description: "Jewellery in 9Kt Gold",
    href: "/collections/precious",
    gradient: "from-amber-100 to-amber-50",
  },
  {
    name: "Padma Cut",
    description: "Signature Cut by LuxesJewel",
    href: "/collections/padma-cut",
    gradient: "from-rose-100 to-rose-50",
  },
  {
    name: "Men's Collection",
    description: "Bold, Brilliant, Him.",
    href: "/collections/mens",
    gradient: "from-slate-100 to-slate-50",
  },
  {
    name: "Secretly Yours",
    description: "Hidden Messages, Engraved Forever.",
    href: "/collections/engravable",
    gradient: "from-violet-100 to-violet-50",
  },
  {
    name: "Twinkle",
    description: "Fine Jewellery for Little Stars.",
    href: "/collections/kids",
    gradient: "from-pink-100 to-pink-50",
  },
  {
    name: "Infinite Radiance",
    description: "Convertible Jewellery for Every Occasion.",
    href: "/collections/convertibles",
    gradient: "from-emerald-100 to-emerald-50",
  },
];

export function Collections() {
  return (
    <section className="py-10 sm:py-12 md:py-16 bg-secondary/30">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Diamond className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Shop By Collection
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-lg mx-auto px-4">
            Explore our curated collection of lab-grown diamond jewellery, from
            elegant engagement rings to everyday statement pieces.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {collections.map((collection) => (
            <Link
              key={collection.name}
              href={collection.href}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 transition-all hover:shadow-lg"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${collection.gradient} group-hover:scale-105 transition-transform duration-300`}
              />
              <div className="relative z-10">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold mb-0.5 sm:mb-1">
                  {collection.name}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                  {collection.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
