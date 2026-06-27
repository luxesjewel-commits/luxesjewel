import Link from "next/link";
import Image from "next/image";
import { Diamond } from "lucide-react";

const collections = [
  {
    name: "Precious",
    description: "Jewellery in 9Kt Gold",
    href: "/collections/precious",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d93e2881?w=600&h=400&fit=crop",
  },
  {
    name: "Padma Cut",
    description: "Signature Cut by LuxesJewel",
    href: "/collections/padma-cut",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=600&h=400&fit=crop",
  },
  {
    name: "Men's Collection",
    description: "Bold, Brilliant, Him.",
    href: "/collections/mens",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=400&fit=crop",
  },
  {
    name: "Secretly Yours",
    description: "Hidden Messages, Engraved Forever.",
    href: "/collections/engravable",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=400&fit=crop",
  },
  {
    name: "Twinkle",
    description: "Fine Jewellery for Little Stars.",
    href: "/collections/kids",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=400&fit=crop",
  },
  {
    name: "Infinite Radiance",
    description: "Convertible Jewellery for Every Occasion.",
    href: "/collections/convertibles",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=400&fit=crop",
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
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-4/3 sm:aspect-3/2"
            >
              <Image
                src={collection.image}
                alt={collection.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors" />
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-6">
                <h3 className="text-sm sm:text-base md:text-lg font-semibold text-white mb-0.5">
                  {collection.name}
                </h3>
                <p className="text-[10px] sm:text-xs md:text-sm text-white/80">
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
