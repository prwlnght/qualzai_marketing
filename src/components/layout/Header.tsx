"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Container from "@/components/ui/Container";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Features", href: "/features" },
  { name: "Solutions", href: "/solutions" },
  { name: "Pricing", href: "/pricing" },
  { name: "Docs", href: "/docs" },
];

const DEMO_URL = "https://app.reclaim.ai/m/prajwal-paudyal/high-priority-meeting";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <Container>
        <nav className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logos/logo_fullcolor_rgb@4x.png"
              alt="Qualz.ai"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-medium hover:text-brand-purple transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-text-medium hover:text-brand-purple transition-colors font-medium">
              Log in
            </Link>
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple-dark transition-colors"
            >
              Request Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-text-medium hover:text-brand-purple"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300",
            mobileMenuOpen ? "max-h-96 pb-4" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-4 pt-4 border-t border-gray-100">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-text-medium hover:text-brand-purple transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex flex-col gap-2 pt-4 border-t border-gray-100">
              <Link
                href="/login"
                className="text-text-medium hover:text-brand-purple transition-colors font-medium py-2"
              >
                Log in
              </Link>
              <a
                href={DEMO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center px-5 py-2.5 bg-brand-purple text-white font-medium rounded-lg hover:bg-brand-purple-dark transition-colors"
              >
                Request Demo
              </a>
            </div>
          </div>
        </div>
      </Container>
    </header>
  );
}
