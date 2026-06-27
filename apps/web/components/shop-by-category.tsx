import Link from "next/link";
import { Diamond } from "lucide-react";

const categories = [
  {
    name: "Rings",
    href: "/rings",
    description: "Statement rings to everyday bands",
    gradient: "from-rose-50 to-pink-50",
  },
  {
    name: "Earrings",
    href: "/earrings",
    description: "Studs, drops & hoops for every style",
    gradient: "from-violet-50 to-purple-50",
  },
  {
    name: "Bracelets",
    href: "/bracelets",
    description: "Tennis bracelets to delicate chains",
    gradient: "from-amber-50 to-yellow-50",
  },
  {
    name: "Pendants",
    href: "/pendants",
    description: "Elegant pendants for every neckline",
    gradient: "from-emerald-50 to-teal-50",
  },
];

export function ShopByCategory() {
  return (
    <section className="py-10 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <Diamond className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Shop by Category</h2>
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
              className="group relative overflow-hidden rounded-xl sm:rounded-2xl aspect-square flex flex-col items-center justify-center p-4 sm:p-6 text-center transition-all hover:shadow-lg"
            >
              <div
                className={`absolute inset-0 bg-linear-to-br ${category.gradient} group-hover:scale-105 transition-transform duration-300`}
              />
              <div className="relative z-10">
                <h3 className="text-base sm:text-lg font-semibold mb-1 sm:mb-2">{category.name}</h3>
                <p className="text-xs sm:text-sm text-muted-foreground hidden xs:block">
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
