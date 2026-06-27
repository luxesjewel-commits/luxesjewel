"use client";

import { MapPin, Clock, Phone } from "lucide-react";

const stores = [
  {
    city: "Mumbai",
    address: "Andheri West, Link Road, Mumbai - 400053",
    phone: "+91-91632 94444",
    hours: "10:00 AM - 8:00 PM",
  },
  {
    city: "Surat",
    address: "Vesu, Surat - 395007",
    phone: "+91-91632 94444",
    hours: "10:00 AM - 8:00 PM",
  },
  {
    city: "Delhi",
    address: "Connaught Place, New Delhi - 110001",
    phone: "+91-91632 94444",
    hours: "11:00 AM - 9:00 PM",
  },
  {
    city: "Bangalore",
    address: "Indiranagar, Bangalore - 560038",
    phone: "+91-91632 94444",
    hours: "10:00 AM - 8:00 PM",
  },
];

export function StoreLocatorContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-4xl">
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              Store Locator
            </h1>
          </div>
          <p className="text-sm sm:text-base text-muted-foreground max-w-lg mx-auto">
            Visit our experience centers to see our lab-grown diamond jewellery
            in person.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
          {stores.map((store) => (
            <div
              key={store.city}
              className="border border-border rounded-xl p-5 sm:p-6"
            >
              <h2 className="text-lg font-semibold mb-3">{store.city}</h2>
              <div className="space-y-2">
                <div className="flex items-start gap-2 text-sm text-muted-foreground">
                  <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                  <span>{store.address}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4 shrink-0 text-primary" />
                  <span>{store.hours}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span>{store.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
