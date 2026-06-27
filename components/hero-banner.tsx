import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="https://images.unsplash.com/photo-1601121141461-9d6647bca1ed?w=1600&h=700&fit=crop"
        alt="Diamond jewellery collection"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="container mx-auto px-4 sm:px-6 py-16 sm:py-20 md:py-28 lg:py-32 relative">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-amber-300" />
            <span className="text-xs sm:text-sm font-medium text-amber-200 bg-white/10 backdrop-blur-sm px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
              New Collection 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
            Brilliance That{" "}
            <span className="text-amber-300">Speaks</span> For Itself
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-white/80 mb-6 sm:mb-8 max-w-lg">
            Discover sustainable luxury with our lab-grown diamond jewellery.
            Crafted with precision, designed for every occasion.
          </p>
          <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
            <Button size="lg" className="gap-2 w-full xs:w-auto" asChild>
              <Link href="/collections">
                Shop Collections
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full xs:w-auto bg-white/10 border-white/30 text-white hover:bg-white/20 hover:text-white"
              asChild
            >
              <Link href="/bestsellers">View Bestsellers</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
