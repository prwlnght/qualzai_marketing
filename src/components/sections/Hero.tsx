"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import { ArrowRight, Play } from "lucide-react";

const DEMO_URL = "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-purple-50/30 to-white py-20 md:py-32">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-brand-purple/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-brand-green/10 rounded-full blur-3xl" />
      </div>

      <Container className="relative">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mb-6">
              AI-Powered Qualitative Research
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-text-dark leading-tight mb-6"
          >
            Transform Your Research with{" "}
            <span className="text-brand-purple">AI-Powered</span> Insights
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-text-medium mb-8 max-w-2xl mx-auto"
          >
            Conduct AI-moderated interviews, dynamic surveys, and automated
            thematic analysis. Get deeper insights faster with Qualz.ai.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 py-3 text-lg font-medium bg-brand-purple text-white rounded-lg hover:bg-brand-purple-dark transition-colors"
            >
              Request Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <Button variant="outline" size="lg">
              <Play className="mr-2 h-5 w-5" />
              Watch Video
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 flex flex-wrap items-center justify-center gap-6 md:gap-8 text-sm text-text-medium"
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full" />
              <span>No credit card required</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full" />
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-brand-green rounded-full" />
              <span>Setup in minutes</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
