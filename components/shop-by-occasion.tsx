import Link from "next/link";
import Image from "next/image";
import { CalendarHeart } from "lucide-react";

const occasions = [
  {
    name: "Workwear Chic",
    description: "Polished, versatile jewellery to elevate your 9-to-5 look.",
    href: "/occasions/workwear",
    image: "https://images.unsplash.com/photo-1617038260897-41a1f14a8ca0?w=400&h=400&fit=crop",
  },
  {
    name: "Everyday Elegance",
    description:
      "Minimal designs that blend effortlessly with your daily style.",
    href: "/occasions/everyday",
    image: "https://images.unsplash.com/photo-1586104237516-5765c0df1932?w=400&h=400&fit=crop",
  },
  {
    name: "Bridal Collections",
    description: "Ethereal lab-grown diamond jewellery for your big day.",
    href: "/occasions/bridal",
    image: "https://images.unsplash.com/photo-1546168006-98a72b4dc5dc?w=400&h=400&fit=crop",
  },
  {
    name: "Festive Jewels",
    description: "Celebrate traditions with a modern diamond twist.",
    href: "/occasions/festive",
    image: "https://images.unsplash.com/photo-1602752250015-52934bc45613?w=400&h=400&fit=crop",
  },
  {
    name: "Gifting with Love",
    description: "Meaningful lab-grown diamond gifts for every occasion.",
    href: "/occasions/gifting",
    image: "https://images.unsplash.com/photo-1549488344-1f9b8d2bd1f3?w=400&h=400&fit=crop",
  },
  {
    name: "Cocktail Glamour",
    description: "Statement diamond pieces to own every evening.",
    href: "/occasions/cocktail",
    image: "https://images.unsplash.com/photo-1583292650898-7d22cd27ca6f?w=400&h=400&fit=crop",
  },
];

export function ShopByOccasion() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <CalendarHeart className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Shop by Occasion
            </h2>
          </div>
          <p className="text-xs sm:text-sm md:text-base text-muted-foreground max-w-md mx-auto px-4">
            Explore lab-grown diamond jewellery for everyday and special moments.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
          {occasions.map((occasion) => (
            <Link
              key={occasion.name}
              href={occasion.href}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl aspect-square sm:aspect-4/3"
            >
              <Image
                src={occasion.image}
                alt={occasion.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-end p-3 sm:p-4 md:p-5">
                <h3 className="font-semibold text-xs sm:text-sm text-white mb-0.5 sm:mb-1 group-hover:text-amber-200 transition-colors">
                  {occasion.name}
                </h3>
                <p className="text-[10px] sm:text-xs text-white/70 leading-relaxed line-clamp-2">
                  {occasion.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
