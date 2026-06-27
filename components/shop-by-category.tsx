import Link from "next/link";
import Image from "next/image";
import { Diamond } from "lucide-react";

const categories = [
  {
    name: "Rings",
    href: "/rings",
    description: "Statement rings to everyday bands",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
  },
  {
    name: "Earrings",
    href: "/earrings",
    description: "Studs, drops & hoops for every style",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
  },
  {
    name: "Bracelets",
    href: "/bracelets",
    description: "Tennis bracelets to delicate chains",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
  },
  {
    name: "Pendants",
    href: "/pendants",
    description: "Elegant pendants for every neckline",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
  },
];

export function ShopByCategory() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Diamond className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">
              Shop by Category
            </h2>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-md mx-auto px-4">
            Discover the perfect lab-grown diamond jewellery for everyday and
            special occasions.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4">
                <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                  {category.name}
                </h3>
                <p className="text-xs sm:text-sm text-white/80 hidden xs:block">
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
