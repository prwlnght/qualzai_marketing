import Hero from "@/components/sections/Hero";
import ClientSlider from "@/components/sections/ClientSlider";
import FeaturesPreview from "@/components/sections/FeaturesPreview";
import HowItWorks from "@/components/sections/HowItWorks";
import SolutionsPreview from "@/components/sections/SolutionsPreview";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ClientSlider />
      <FeaturesPreview />
      <HowItWorks />
      <SolutionsPreview />
      <CTA />
    </>
  );
}
