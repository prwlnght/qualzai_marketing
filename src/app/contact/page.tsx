"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import { Mail, MapPin, Calendar } from "lucide-react";

const DEMO_URL = "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting";

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-block px-4 py-2 bg-brand-purple/10 text-brand-purple rounded-full text-sm font-medium mb-6"
            >
              Contact Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-text-dark mb-6"
            >
              Get in Touch
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-text-medium"
            >
              Have questions? Want a demo? We&apos;d love to hear from you.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Book a Demo */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-brand-purple/5 rounded-2xl p-8 border-2 border-brand-purple"
              >
                <div className="w-14 h-14 bg-brand-purple/10 text-brand-purple rounded-lg flex items-center justify-center mb-4">
                  <Calendar size={28} />
                </div>
                <h2 className="text-2xl font-semibold text-text-dark mb-4">
                  Book a Demo
                </h2>
                <p className="text-text-medium mb-6">
                  See Qualz.ai in action with a personalized demo tailored to
                  your research needs. Schedule a time that works for you.
                </p>
                <a
                  href={DEMO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple-dark transition-colors"
                >
                  Schedule Demo
                </a>
              </motion.div>

              {/* Email Us */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-gray-50 rounded-2xl p-8 border border-gray-200"
              >
                <div className="w-14 h-14 bg-brand-green/10 text-brand-green rounded-lg flex items-center justify-center mb-4">
                  <Mail size={28} />
                </div>
                <h2 className="text-2xl font-semibold text-text-dark mb-4">
                  Email Us
                </h2>
                <p className="text-text-medium mb-6">
                  Have a question or need support? Send us an email and we&apos;ll
                  get back to you within 24 hours.
                </p>
                <a
                  href="mailto:hello@qualz.ai"
                  className="inline-flex items-center justify-center w-full py-3 px-6 bg-gray-200 text-text-dark font-medium rounded-lg hover:bg-gray-300 transition-colors"
                >
                  hello@qualz.ai
                </a>
              </motion.div>
            </div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex items-center gap-2 text-text-medium">
                <MapPin size={20} />
                <span>San Francisco, CA</span>
              </div>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* FAQ Preview */}
      <section className="py-20 bg-gray-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-text-dark mb-4"
            >
              Have Questions?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-text-medium mb-8"
            >
              Check out our pricing page for frequently asked questions, or
              reach out directly.
            </motion.p>
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              href="/pricing#faq"
              className="inline-flex items-center justify-center px-6 py-3 border-2 border-brand-purple text-brand-purple font-medium rounded-lg hover:bg-brand-purple hover:text-white transition-colors"
            >
              View FAQ
            </motion.a>
          </div>
        </Container>
      </section>
    </>
  );
}
