import Hero from "@/components/sections/Hero";
import ClientSlider from "@/components/sections/ClientSlider";
import FeaturesPreview from "@/components/sections/FeaturesPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import { homeFAQs } from "@/data/faqs";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientSlider />
      <FeaturesPreview />
      <HowItWorks />
      <SolutionsPreview />
      <FAQ
        faqs={homeFAQs}
        title="Frequently Asked Questions"
        subtitle="Everything you need to know about Qualz.ai"
      />
      <CTA />
    </>
  );
}
