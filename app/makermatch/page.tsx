import { HeroSection } from "@/features/platforms/components/hero-section";
import { ThemeShowcase } from "@/features/platforms/components/theme-showcase";

export default function MakerMatchPage() {
  return (
    <div>
      <HeroSection
        title="Welcome to MakerMatch"
        subtitle="Find your perfect creative collaboration"
        gradient="bg-gradient-to-br from-cyan-500 to-blue-600"
      />
      <div className="container mx-auto px-4">
        <ThemeShowcase />
      </div>
    </div>
  );
}