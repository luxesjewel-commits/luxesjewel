export interface Product {
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: string;
  badge?: string;
  description: string;
  metal: string;
  weight: string;
  diamond: string;
  image: string;
}

export const products: Product[] = [
  {
    name: "Aurora Diamond Solitaire Ring",
    slug: "aurora-diamond-solitaire-ring",
    price: 42648,
    originalPrice: 49999,
    category: "rings",
    badge: "Bestseller",
    description:
      "A stunning solitaire ring featuring a brilliant lab-grown diamond set in 18Kt white gold. Perfect for engagements or special occasions.",
    metal: "18Kt White Gold",
    weight: "2.8g",
    diamond: "0.50 Ct, VS1, E Color",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
  },
  {
    name: "Briget Ribbon Knot Diamond Earrings",
    slug: "briget-ribbon-knot-earrings",
    price: 21555,
    category: "earrings",
    description:
      "Elegant ribbon knot design earrings with delicate lab-grown diamonds. Lightweight and comfortable for everyday wear.",
    metal: "14Kt Rose Gold",
    weight: "3.2g",
    diamond: "0.30 Ct Total, VS2, F Color",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
  },
  {
    name: "Classic Tennis Diamond Bracelet",
    slug: "classic-tennis-bracelet",
    price: 202246,
    originalPrice: 225000,
    category: "bracelets",
    badge: "Premium",
    description:
      "A timeless tennis bracelet adorned with perfectly matched lab-grown diamonds in a prong setting. A statement of elegance.",
    metal: "18Kt White Gold",
    weight: "12.5g",
    diamond: "5.00 Ct Total, VS1, D-E Color",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
  },
  {
    name: "Spinny Twirl Diamond Pendant",
    slug: "spinny-twirl-pendant",
    price: 11625,
    category: "pendants",
    description:
      "A playful twirl pendant with a central lab-grown diamond that catches light beautifully. Comes with an 18-inch chain.",
    metal: "14Kt Yellow Gold",
    weight: "1.8g",
    diamond: "0.15 Ct, VS2, G Color",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
  },
  {
    name: "1 Carat Classic Solitaire Ring",
    slug: "1-carat-classic-solitaire",
    price: 30840,
    category: "rings",
    badge: "Popular",
    description:
      "The quintessential solitaire ring with a 1-carat lab-grown diamond. Six-prong setting for maximum brilliance.",
    metal: "18Kt White Gold",
    weight: "3.2g",
    diamond: "1.00 Ct, VS1, F Color",
    image: "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?w=600&h=600&fit=crop",
  },
  {
    name: "Serpentine Diamond Band Ring For Men",
    slug: "serpentine-diamond-band-men",
    price: 20437,
    category: "rings",
    description:
      "A bold serpentine-inspired band ring for men, featuring channel-set lab-grown diamonds. Modern and masculine.",
    metal: "14Kt White Gold",
    weight: "5.5g",
    diamond: "0.40 Ct Total, VS2, G Color",
    image: "https://images.unsplash.com/photo-1626784215021-2e39ccf971cd?w=600&h=600&fit=crop",
  },
  {
    name: "Linking In Love Diamond Bracelet",
    slug: "linking-in-love-bracelet",
    price: 41377,
    category: "bracelets",
    description:
      "Interlocking links adorned with lab-grown diamonds create a stunning bracelet that symbolizes eternal love.",
    metal: "18Kt Rose Gold",
    weight: "8.2g",
    diamond: "1.20 Ct Total, VS1, E Color",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=600&h=600&fit=crop",
  },
  {
    name: "Elegant Halo Pear Cut Diamond Ring",
    slug: "elegant-halo-pear-cut-ring",
    price: 37455,
    originalPrice: 42000,
    category: "rings",
    badge: "New",
    description:
      "A gorgeous pear-shaped lab-grown diamond surrounded by a halo of smaller diamonds. Truly eye-catching.",
    metal: "18Kt White Gold",
    weight: "3.0g",
    diamond: "0.75 Ct Center + 0.25 Ct Halo, VS1, E Color",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=600&h=600&fit=crop",
  },
  {
    name: "Celestial Star Diamond Earrings",
    slug: "celestial-star-earrings",
    price: 18990,
    category: "earrings",
    badge: "New",
    description:
      "Star-shaped diamond earrings that add a celestial sparkle to any outfit. Perfect for everyday luxury.",
    metal: "14Kt White Gold",
    weight: "2.4g",
    diamond: "0.25 Ct Total, VS2, F Color",
    image: "https://images.unsplash.com/photo-1588444837495-c6cfeb53f32d?w=600&h=600&fit=crop",
  },
  {
    name: "Royal Mangalsutra Diamond Pendant",
    slug: "royal-mangalsutra-pendant",
    price: 35670,
    category: "mangalsutras",
    badge: "Bestseller",
    description:
      "A modern mangalsutra with a stunning diamond pendant. Blends tradition with contemporary elegance.",
    metal: "18Kt Yellow Gold with Black Beads",
    weight: "6.8g",
    diamond: "0.50 Ct Total, VS1, F Color",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
  },
  {
    name: "Infinity Diamond Necklace",
    slug: "infinity-diamond-necklace",
    price: 55890,
    category: "necklaces",
    badge: "Premium",
    description:
      "An infinity-inspired necklace featuring graduated lab-grown diamonds. A symbol of everlasting beauty.",
    metal: "18Kt White Gold",
    weight: "7.5g",
    diamond: "1.50 Ct Total, VS1, D Color",
    image: "https://images.unsplash.com/photo-1599459183200-59c3e6386f55?w=600&h=600&fit=crop",
  },
  {
    name: "Padma Cut Lotus Pendant",
    slug: "padma-cut-lotus-pendant",
    price: 28450,
    category: "pendants",
    badge: "Exclusive",
    description:
      "Featuring our signature Padma Cut diamond shaped like a lotus petal. Uniquely crafted by LuxesJewel artisans.",
    metal: "18Kt Rose Gold",
    weight: "2.5g",
    diamond: "0.40 Ct Padma Cut, VS1, E Color",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d93e2881?w=600&h=600&fit=crop",
  },
  {
    name: "Men's Geometric Diamond Ring",
    slug: "mens-geometric-diamond-ring",
    price: 24800,
    category: "rings",
    description:
      "Clean geometric lines with channel-set diamonds make this ring perfect for the modern man.",
    metal: "14Kt White Gold",
    weight: "6.2g",
    diamond: "0.35 Ct Total, VS2, G Color",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop",
  },
  {
    name: "Delicate Diamond Nose Pin",
    slug: "delicate-diamond-nose-pin",
    price: 5990,
    category: "nosepins",
    description:
      "A dainty nose pin with a single brilliant lab-grown diamond. Secure screw-back design.",
    metal: "18Kt Yellow Gold",
    weight: "0.5g",
    diamond: "0.05 Ct, VVS1, D Color",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop",
  },
  {
    name: "Eternal Wave Diamond Bangle",
    slug: "eternal-wave-diamond-bangle",
    price: 78500,
    category: "bangles",
    badge: "Premium",
    description:
      "A flowing wave design bangle encrusted with lab-grown diamonds. Makes a bold statement on any wrist.",
    metal: "18Kt Yellow Gold",
    weight: "15.0g",
    diamond: "2.00 Ct Total, VS1, E Color",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&h=600&fit=crop",
  },
  {
    name: "Solitaire Princess Cut Ring",
    slug: "solitaire-princess-cut-ring",
    price: 45900,
    category: "rings",
    badge: "Bestseller",
    description:
      "A princess-cut lab-grown diamond in a classic four-prong setting. Timeless elegance for the modern bride.",
    metal: "18Kt White Gold",
    weight: "3.5g",
    diamond: "1.00 Ct Princess, VS1, E Color",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=600&h=600&fit=crop",
  },
  {
    name: "Kids Butterfly Diamond Earrings",
    slug: "kids-butterfly-diamond-earrings",
    price: 8990,
    category: "earrings",
    description:
      "Adorable butterfly earrings with tiny lab-grown diamonds. Safe screw-back design for little ones.",
    metal: "14Kt Yellow Gold",
    weight: "1.2g",
    diamond: "0.08 Ct Total, VS2, F Color",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=600&h=600&fit=crop",
  },
  {
    name: "Stackable Diamond Eternity Band",
    slug: "stackable-diamond-eternity-band",
    price: 19500,
    category: "rings",
    description:
      "A delicate eternity band perfect for stacking. Lab-grown diamonds set all around in 14Kt gold.",
    metal: "14Kt Rose Gold",
    weight: "1.8g",
    diamond: "0.50 Ct Total, VS2, F Color",
    image: "https://images.unsplash.com/photo-1611955167811-4711904bb9f8?w=600&h=600&fit=crop",
  },
];

export function getProductsByCategory(category: string): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export interface CategoryInfo {
  name: string;
  slug: string;
  description: string;
  gradient: string;
  image: string;
}

export const categories: CategoryInfo[] = [
  {
    name: "Rings",
    slug: "rings",
    description: "Statement rings to everyday bands",
    gradient: "from-rose-50 to-pink-50",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=600&h=600&fit=crop",
  },
  {
    name: "Earrings",
    slug: "earrings",
    description: "Studs, drops & hoops for every style",
    gradient: "from-violet-50 to-purple-50",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=600&h=600&fit=crop",
  },
  {
    name: "Pendants",
    slug: "pendants",
    description: "Elegant pendants for every neckline",
    gradient: "from-emerald-50 to-teal-50",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?w=600&h=600&fit=crop",
  },
  {
    name: "Bracelets",
    slug: "bracelets",
    description: "Tennis bracelets to delicate chains",
    gradient: "from-amber-50 to-yellow-50",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?w=600&h=600&fit=crop",
  },
  {
    name: "Mangalsutras",
    slug: "mangalsutras",
    description: "Modern mangalsutras with diamond pendants",
    gradient: "from-orange-50 to-amber-50",
    image: "https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=600&h=600&fit=crop",
  },
  {
    name: "Necklaces",
    slug: "necklaces",
    description: "Stunning necklaces for every occasion",
    gradient: "from-sky-50 to-blue-50",
    image: "https://images.unsplash.com/photo-1599459183200-59c3e6386f55?w=600&h=600&fit=crop",
  },
  {
    name: "Nosepins",
    slug: "nosepins",
    description: "Delicate diamond nose pins",
    gradient: "from-pink-50 to-rose-50",
    image: "https://images.unsplash.com/photo-1630019852942-f89202989a59?w=600&h=600&fit=crop",
  },
  {
    name: "Bangles",
    slug: "bangles",
    description: "Bold diamond bangles and kadas",
    gradient: "from-yellow-50 to-amber-50",
    image: "https://images.unsplash.com/photo-1535632787350-4e68ef0ac584?w=600&h=600&fit=crop",
  },
  {
    name: "Solitaire",
    slug: "solitaire",
    description: "Premium solitaire diamond jewellery",
    gradient: "from-slate-50 to-gray-50",
    image: "https://images.unsplash.com/photo-1589674781759-c21c37956a44?w=600&h=600&fit=crop",
  },
  {
    name: "Men's",
    slug: "mens",
    description: "Bold, brilliant diamond jewellery for men",
    gradient: "from-zinc-50 to-slate-50",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=600&h=600&fit=crop",
  },
];

export function getCategoryBySlug(slug: string): CategoryInfo | undefined {
  return categories.find((c) => c.slug === slug);
}

export interface CollectionInfo {
  name: string;
  slug: string;
  description: string;
  gradient: string;
  longDescription: string;
  image: string;
}

export const collections: CollectionInfo[] = [
  {
    name: "Precious",
    slug: "precious",
    description: "Jewellery in 9Kt Gold",
    gradient: "from-amber-100 to-amber-50",
    longDescription:
      "Affordable luxury in 9Kt gold. Our Precious collection makes lab-grown diamond jewellery accessible without compromising on quality or design.",
    image: "https://images.unsplash.com/photo-1515562141589-67f0d93e2881?w=800&h=400&fit=crop",
  },
  {
    name: "Padma Cut",
    slug: "padma-cut",
    description: "Signature Cut by LuxesJewel",
    gradient: "from-rose-100 to-rose-50",
    longDescription:
      "Our exclusive Padma Cut diamonds are shaped like lotus petals, reflecting India's heritage with modern brilliance. A LuxesJewel signature.",
    image: "https://images.unsplash.com/photo-1600721391776-b5cd0e0048f9?w=800&h=400&fit=crop",
  },
  {
    name: "Men's Collection",
    slug: "mens",
    description: "Bold, Brilliant, Him.",
    gradient: "from-slate-100 to-slate-50",
    longDescription:
      "Designed for the modern man who appreciates fine craftsmanship. From bands to cufflinks, each piece makes a bold statement.",
    image: "https://images.unsplash.com/photo-1617038220319-276d3cfab638?w=800&h=400&fit=crop",
  },
  {
    name: "Secretly Yours",
    slug: "engravable",
    description: "Hidden Messages, Engraved Forever.",
    gradient: "from-violet-100 to-violet-50",
    longDescription:
      "Personalize your jewellery with secret messages engraved inside. Perfect for meaningful gifts and personal reminders.",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?w=800&h=400&fit=crop",
  },
  {
    name: "Twinkle",
    slug: "kids",
    description: "Fine Jewellery for Little Stars.",
    gradient: "from-pink-100 to-pink-50",
    longDescription:
      "Safe, lightweight, and adorable diamond jewellery designed for children. Because little ones deserve to sparkle too.",
    image: "https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=800&h=400&fit=crop",
  },
  {
    name: "Infinite Radiance",
    slug: "convertibles",
    description: "Convertible Jewellery for Every Occasion.",
    gradient: "from-emerald-100 to-emerald-50",
    longDescription:
      "Innovative designs that transform from one style to another. Get two looks from a single piece of jewellery.",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?w=800&h=400&fit=crop",
  },
];

export function getCollectionBySlug(slug: string): CollectionInfo | undefined {
  return collections.find((c) => c.slug === slug);
}

export interface OccasionInfo {
  name: string;
  slug: string;
  description: string;
  emoji: string;
  longDescription: string;
}

export const occasions: OccasionInfo[] = [
  {
    name: "Workwear Chic",
    slug: "workwear",
    description: "Polished, versatile jewellery to elevate your 9-to-5 look.",
    emoji: "💼",
    longDescription:
      "From boardroom meetings to after-work drinks, our workwear collection features understated elegance that complements your professional wardrobe.",
  },
  {
    name: "Everyday Elegance",
    slug: "everyday",
    description:
      "Minimal designs that blend effortlessly with your daily style.",
    emoji: "✨",
    longDescription:
      "Lightweight, comfortable pieces designed for all-day wear. Lab-grown diamonds add a touch of luxury to your daily routine.",
  },
  {
    name: "Bridal Collections",
    slug: "bridal",
    description: "Ethereal lab-grown diamond jewellery for your big day.",
    emoji: "💍",
    longDescription:
      "Make your special day unforgettable with our bridal collection. From engagement rings to wedding sets, find your perfect match.",
  },
  {
    name: "Festive Jewels",
    slug: "festive",
    description: "Celebrate traditions with a modern diamond twist.",
    emoji: "🪔",
    longDescription:
      "Celebrate Diwali, Eid, Christmas, and every festival with jewellery that honours tradition while embracing modern design.",
  },
  {
    name: "Gifting with Love",
    slug: "gifting",
    description: "Meaningful lab-grown diamond gifts for every occasion.",
    emoji: "🎁",
    longDescription:
      "Find the perfect gift for birthdays, anniversaries, and milestones. Each piece comes beautifully packaged and ready to give.",
  },
  {
    name: "Cocktail Glamour",
    slug: "cocktail",
    description: "Statement diamond pieces to own every evening.",
    emoji: "🥂",
    longDescription:
      "Bold, dramatic pieces designed to turn heads at parties and events. Make your entrance with statement lab-grown diamond jewellery.",
  },
];

export function getOccasionBySlug(slug: string): OccasionInfo | undefined {
  return occasions.find((o) => o.slug === slug);
}

export interface StyleInfo {
  name: string;
  slug: string;
  description: string;
}

export const styles: StyleInfo[] = [
  {
    name: "Padma Cut Diamond",
    slug: "padma-cut",
    description: "Our signature lotus-petal cut diamonds",
  },
  {
    name: "Gifts Under ₹30K",
    slug: "gifts-under-30k",
    description: "Beautiful diamond jewellery under ₹30,000",
  },
  {
    name: "Stackable Rings",
    slug: "stackable",
    description: "Delicate rings designed to be worn together",
  },
  {
    name: "Men's Jewellery",
    slug: "mens",
    description: "Bold diamond jewellery for men",
  },
  {
    name: "Engagement Rings",
    slug: "engagement",
    description: "Find the perfect ring for your proposal",
  },
  {
    name: "9 Karat Gold",
    slug: "9kt-gold",
    description: "Affordable luxury in 9Kt gold",
  },
  {
    name: "The Solitaire Selection",
    slug: "solitaire",
    description: "Premium solitaire diamond pieces",
  },
  {
    name: "Vanki Rings",
    slug: "vanki",
    description: "Traditional vanki style diamond rings",
  },
];

export function getStyleBySlug(slug: string): StyleInfo | undefined {
  return styles.find((s) => s.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}
