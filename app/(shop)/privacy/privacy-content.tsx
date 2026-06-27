"use client";

export function PrivacyContent() {
  return (
    <div className="py-8 sm:py-12 md:py-16">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
          Privacy Policy
        </h1>

        <div className="space-y-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Information We Collect
            </h2>
            <p>
              We collect information you provide directly: name, email, phone
              number, shipping address, and payment details when you make a
              purchase. We also collect browsing data to improve your experience.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              How We Use Your Information
            </h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Process and fulfill your orders</li>
              <li>Send order updates and tracking information</li>
              <li>Provide customer support</li>
              <li>Send promotional communications (with your consent)</li>
              <li>Improve our website and services</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Data Security
            </h2>
            <p>
              We implement industry-standard security measures to protect your
              personal information. Payment processing is handled through secure,
              PCI-DSS compliant payment gateways.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Your Rights
            </h2>
            <p>
              You have the right to access, update, or delete your personal
              information. Contact us at hello@luxesjewel.com to exercise these
              rights.
            </p>
          </section>

          <section>
            <h2 className="text-lg font-semibold text-foreground mb-2">
              Cookies
            </h2>
            <p>
              We use cookies to enhance your browsing experience, analyze site
              traffic, and personalize content. You can manage cookie preferences
              through your browser settings.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
