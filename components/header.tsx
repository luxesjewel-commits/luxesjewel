import Link from "next/link";
import {
  MapPin,
  Heart,
  ShoppingBag,
  User,
  Search,
  Menu,
  Diamond,
} from "lucide-react";

const navCategories = [
  { name: "Rings", href: "/rings" },
  { name: "Earrings", href: "/earrings" },
  { name: "Pendants", href: "/pendants" },
  { name: "Bracelets & Bangles", href: "/bracelets" },
  { name: "Mangalsutras", href: "/mangalsutras" },
  { name: "Necklaces", href: "/necklaces" },
  { name: "Collections", href: "/collections" },
  { name: "Occasions", href: "/occasions" },
  { name: "Ready To Ship", href: "/ready-to-ship" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-border">
      {/* Top bar - hidden on very small screens */}
      <div className="hidden sm:block border-b border-border/50 bg-primary/5">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-1.5 sm:py-2 flex items-center justify-between text-[10px] sm:text-xs">
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/store-locator"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <MapPin className="h-3 w-3" />
              <span className="hidden xs:inline">Store Locator</span>
              <span className="xs:hidden">Stores</span>
            </Link>
            <Link
              href="/loyalty"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Loyalty
            </Link>
          </div>
          <p className="hidden md:block text-muted-foreground">
            Free Shipping & Insurance on all orders
          </p>
          <div className="flex items-center gap-2 sm:gap-4">
            <Link
              href="/account"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
            >
              <User className="h-3 w-3" />
              Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between gap-2 sm:gap-4">
        <button className="lg:hidden p-1.5 sm:p-2 -ml-1.5">
          <Menu className="h-5 w-5 sm:h-6 sm:w-6" />
        </button>

        <Link href="/" className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <Diamond className="h-6 w-6 sm:h-8 sm:w-8 text-primary" />
          <span className="text-lg sm:text-xl md:text-2xl font-bold tracking-tight text-foreground">
            LuxesJewel
          </span>
        </Link>

        <div className="hidden lg:flex items-center flex-1 max-w-md mx-4 xl:mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for jewellery..."
              className="w-full pl-10 pr-4 py-2 border border-border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-ring bg-secondary/50"
            />
          </div>
        </div>

        <div className="flex items-center gap-1 sm:gap-3">
          <Link href="/search" className="lg:hidden p-1.5 sm:p-2">
            <Search className="h-5 w-5" />
          </Link>
          <Link
            href="/wishlist"
            className="p-1.5 sm:p-2 hover:text-primary transition-colors"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            href="/cart"
            className="p-1.5 sm:p-2 hover:text-primary transition-colors relative"
          >
            <ShoppingBag className="h-5 w-5" />
            <span className="absolute top-0 right-0 sm:-top-0.5 sm:-right-0.5 bg-primary text-primary-foreground text-[9px] sm:text-[10px] font-bold rounded-full h-3.5 w-3.5 sm:h-4 sm:w-4 flex items-center justify-center">
              0
            </span>
          </Link>
        </div>
      </div>

      {/* Desktop navigation */}
      <nav className="hidden lg:block border-t border-border/50">
        <div className="container mx-auto px-4 lg:px-6">
          <ul className="flex items-center justify-center gap-4 xl:gap-8 py-3">
            {navCategories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile navigation - horizontal scroll */}
      <nav className="lg:hidden border-t border-border/50 overflow-x-auto scrollbar-hide">
        <div className="px-3 sm:px-4">
          <ul className="flex items-center gap-4 sm:gap-6 py-2.5 min-w-max">
            {navCategories.map((category) => (
              <li key={category.name}>
                <Link
                  href={category.href}
                  className="text-xs sm:text-sm font-medium text-foreground hover:text-primary transition-colors whitespace-nowrap"
                >
                  {category.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
