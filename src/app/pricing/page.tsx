"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { pricingTiers } from "@/data/pricing";
import { enhancedPricingFAQs } from "@/data/faqs";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import FAQ from "@/components/sections/FAQ";

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-orange-50/30 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-brand-orange/10 text-brand-orange rounded-full text-sm font-medium mb-6"
            >
              Pricing
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-medium"
            >
              Start free, scale as you grow. No hidden fees, cancel anytime.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <Container>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "relative rounded-2xl p-8 border-2",
                  tier.highlighted
                    ? "border-brand-purple bg-brand-purple/5 shadow-xl"
                    : "border-gray-200 bg-white"
                )}
              >
                {tier.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-purple text-white text-sm font-medium rounded-full">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-semibold text-text-dark mb-2">
                    {tier.name}
                  </h3>
                  <p className="text-text-medium text-sm mb-4">
                    {tier.description}
                  </p>
                  <div className="mb-4">
                    <span className="text-4xl font-bold text-text-dark">
                      {tier.price}
                    </span>
                    <span className="text-text-medium ml-1">/{tier.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check
                        size={20}
                        className={cn(
                          "flex-shrink-0 mt-0.5",
                          tier.highlighted
                            ? "text-brand-purple"
                            : "text-brand-green"
                        )}
                      />
                      <span className="text-text-medium text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={tier.ctaLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "block w-full text-center py-3 px-6 rounded-lg font-medium transition-colors",
                    tier.highlighted
                      ? "bg-brand-purple text-white hover:bg-brand-purple-dark"
                      : "bg-gray-100 text-text-dark hover:bg-gray-200"
                  )}
                >
                  {tier.cta}
                </a>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        faqs={enhancedPricingFAQs}
        title="Pricing Questions"
        subtitle="Everything you need to know about our plans"
      />

      {/* Bottom CTA */}
      <section className="py-20 bg-brand-purple text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-white/80 mb-8">
              Start your 14-day free trial today. No credit card required.
            </p>
            <a
              href="https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-brand-purple font-medium rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </a>
          </div>
        </Container>
      </section>
    </>
  );
}
