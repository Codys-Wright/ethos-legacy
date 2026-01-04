import { HeroSection } from "@/features/platforms/components/hero-section";
import { ThemeShowcase } from "@/features/platforms/components/theme-showcase";

export default function IndieLandPage() {
  return (
    <div>
      <HeroSection
        title="Welcome to IndieLand"
        subtitle="Your creative content, your way"
        gradient="bg-gradient-to-br from-blue-500 to-indigo-600"
      />
      <div className="container mx-auto px-4">
        <ThemeShowcase />
      </div>
    </div>
  );
}