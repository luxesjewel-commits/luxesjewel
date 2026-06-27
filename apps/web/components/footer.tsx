import Link from "next/link";
import { Diamond, Phone, Mail } from "lucide-react";

const categories = [
  { name: "Rings", href: "/rings" },
  { name: "Earrings", href: "/earrings" },
  { name: "Pendants", href: "/pendants" },
  { name: "Bracelets", href: "/bracelets" },
  { name: "Necklaces", href: "/necklaces" },
  { name: "Nosepins", href: "/nosepins" },
];

const learn = [
  { name: "About Us", href: "/about" },
  { name: "About Lab Diamonds", href: "/about-lab-diamonds" },
  { name: "FAQs", href: "/faqs" },
  { name: "Blog", href: "/blog" },
  { name: "Loyalty Program", href: "/loyalty" },
  { name: "Store Locator", href: "/store-locator" },
];

const policies = [
  { name: "Exchange & Buyback", href: "/exchange-policy" },
  { name: "Shipping Policy", href: "/shipping-policy" },
  { name: "Return Policy", href: "/return-policy" },
  { name: "Terms & Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 py-8 sm:py-10 md:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand */}
          <div className="col-span-2 md:col-span-2 lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <Diamond className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-lg sm:text-xl font-bold">LuxesJewel</span>
            </Link>
            <p className="text-xs sm:text-sm text-white/70 mb-4 sm:mb-6 max-w-xs">
              India&apos;s leading lab-grown diamond jewellery brand, redefining
              sustainable luxury with stunning craftsmanship.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <a
                href="tel:+919163294444"
                className="flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                +91-91632 94444
              </a>
              <a
                href="mailto:hello@luxesjewel.com"
                className="flex items-center gap-2 text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0" />
                hello@luxesjewel.com
              </a>
            </div>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Categories</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {categories.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learn */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Learn</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {learn.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Policies */}
          <div>
            <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4">Policies</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {policies.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 sm:mt-10 md:mt-12 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
            <p className="text-[10px] sm:text-xs md:text-sm text-white/50 text-center sm:text-left">
              &copy; 2026 LuxesJewel. All rights reserved.
            </p>
            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="#"
                className="text-[10px] sm:text-xs md:text-sm text-white/50 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-[10px] sm:text-xs md:text-sm text-white/50 hover:text-white transition-colors"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-[10px] sm:text-xs md:text-sm text-white/50 hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="#"
                className="text-[10px] sm:text-xs md:text-sm text-white/50 hover:text-white transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
