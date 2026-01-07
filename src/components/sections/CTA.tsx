"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";

const DEMO_URL = "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting";

export default function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-brand-purple to-brand-purple-dark text-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Research?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join thousands of researchers who are getting deeper insights faster
            with Qualz.ai. Start your free trial today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 text-lg font-medium bg-white text-brand-purple rounded-lg hover:bg-gray-100 transition-colors"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-7 py-3 text-lg font-medium border-2 border-white text-white rounded-lg hover:bg-white/10 transition-colors"
            >
              View Pricing
            </Link>
          </div>
          <p className="mt-6 text-sm text-white/60">
            No credit card required &bull; 14-day free trial &bull; Cancel anytime
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
