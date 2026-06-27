import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function HeroBanner() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-secondary via-white to-accent/30">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(200,170,110,0.1),transparent_70%)]" />
      <div className="container mx-auto px-4 sm:px-6 py-10 sm:py-16 md:py-20 lg:py-24 relative">
        <div className="max-w-2xl">
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-gold" />
            <span className="text-xs sm:text-sm font-medium text-gold-foreground bg-gold/10 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
              New Collection 2026
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground mb-4 sm:mb-6">
            Brilliance That{" "}
            <span className="text-primary">Speaks</span> For Itself
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 max-w-lg">
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
              className="w-full xs:w-auto"
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
