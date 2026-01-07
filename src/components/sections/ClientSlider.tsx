"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Container from "@/components/ui/Container";

// Vertical brand logos and client logos
const logos = [
  { name: "Bigyan Analytics", src: "/images/logos/Artboard 16@4x.png" },
  { name: "Consulting", src: "/images/logos/Artboard 18@4x.png" },
  { name: "Startup Insights", src: "/images/logos/Artboard 20@4x.png" },
  { name: "Non-Profit Insights", src: "/images/logos/Artboard 22@4x.png" },
  { name: "Healthcare", src: "/images/logos/Artboard 24@4x.png" },
  { name: "Qualz Main", src: "/images/logos/Artboard 26@4x.png" },
];

export default function ClientSlider() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPosition = 0;
    const scrollSpeed = 0.5;

    const scroll = () => {
      scrollPosition += scrollSpeed;
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0;
      }
      scrollContainer.scrollLeft = scrollPosition;
      animationId = requestAnimationFrame(scroll);
    };

    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 bg-gray-50 border-y border-gray-100">
      <Container>
        <p className="text-center text-text-light text-sm font-medium mb-8 uppercase tracking-wider">
          Trusted by researchers at leading organizations
        </p>
      </Container>

      <div
        ref={scrollRef}
        className="flex overflow-hidden whitespace-nowrap"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        <div className="flex items-center gap-16 animate-scroll">
          {/* Double the logos for seamless infinite scroll */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <Image
                src={logo.src}
                alt={logo.name}
                width={120}
                height={40}
                className="h-10 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
