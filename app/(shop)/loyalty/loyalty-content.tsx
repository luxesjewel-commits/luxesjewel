"use client";

import { Star, Gift, Crown, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
  {
    name: "Silver",
    icon: Star,
    spend: "₹0 - ₹50,000",
    benefits: ["5% reward points", "Free shipping", "Birthday surprise"],
  },
  {
    name: "Gold",
    icon: Crown,
    spend: "₹50,001 - ₹2,00,000",
    benefits: [
      "8% reward points",
      "Priority shipping",
      "Early access to new collections",
      "Anniversary gift",
    ],
  },
  {
    name: "Platinum",
    icon: Gem,
    spend: "₹2,00,001+",
    benefits: [
      "12% reward points",
      "Personal stylist",
      "Exclusive previews",
      "Complimentary cleaning",
      "VIP events access",
    ],
  },
];

export function LoyaltyContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-4xl">
        <div className="text-center mb-10 sm:mb-12">
          <div className="flex items-center justify-center gap-2 mb-3">
            <Gift className="h-6 w-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Loyalty Program
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Earn reward points with every purchase and unlock exclusive benefits
            as you progress through our loyalty tiers.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-10">
          {tiers.map((tier) => {
            const Icon = tier.icon;
            return (
              <div
                key={tier.name}
                className="border border-border rounded-xl p-5 sm:p-6 text-center"
              >
                <Icon className="h-8 w-8 mx-auto text-primary mb-3" />
                <h2 className="text-lg font-semibold mb-1">{tier.name}</h2>
                <p className="text-xs text-muted-foreground mb-4">
                  {tier.spend}
                </p>
                <ul className="space-y-2 text-left">
                  {tier.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="text-sm text-muted-foreground flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        <div className="text-center">
          <Button size="lg">Join Now — It&apos;s Free</Button>
        </div>
      </div>
    </div>
  );
}
