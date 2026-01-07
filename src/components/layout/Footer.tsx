import Link from "next/link";
import Image from "next/image";
import Container from "@/components/ui/Container";
import { Linkedin, Twitter, Mail } from "lucide-react";

const footerNavigation = {
  product: [
    { name: "Features", href: "/features" },
    { name: "Pricing", href: "/pricing" },
    { name: "Documentation", href: "/docs" },
  ],
  solutions: [
    { name: "Customer Research", href: "/solutions/customer-research" },
    { name: "Market Research", href: "/solutions/market-research" },
    { name: "UX Research", href: "/solutions/ux-research" },
    { name: "Consulting", href: "/solutions/consulting" },
  ],
  company: [
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
  ],
};

const socialLinks = [
  { name: "LinkedIn", href: "https://linkedin.com", icon: Linkedin },
  { name: "Twitter", href: "https://twitter.com", icon: Twitter },
  { name: "Email", href: "mailto:hello@qualz.ai", icon: Mail },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12 md:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <Link href="/" className="inline-block">
                <Image
                  src="/images/logos/logo_white_rgb@4x.png"
                  alt="Qualz.ai"
                  width={120}
                  height={40}
                  className="h-10 w-auto"
                />
              </Link>
              <p className="mt-4 text-gray-400 max-w-sm">
                AI-powered qualitative research platform. Transform interviews, surveys, and analysis with intelligent automation.
              </p>
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-brand-purple transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Product</h3>
              <ul className="space-y-3">
                {footerNavigation.product.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <ul className="space-y-3">
                {footerNavigation.solutions.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <ul className="space-y-3">
                {footerNavigation.company.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-800">
            <p className="text-gray-400 text-sm text-center">
              &copy; {new Date().getFullYear()} Qualz.ai. All rights reserved.
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
}
