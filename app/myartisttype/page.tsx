import { HeroSection } from "@/features/platforms/components/hero-section";
import { ThemeShowcase } from "@/features/platforms/components/theme-showcase";

export default function MyArtistTypePage() {
  return (
    <div>
      <HeroSection
        title="Welcome to MyArtistType"
        subtitle="Discover your unique creative personality"
        gradient="bg-gradient-to-br from-violet-500 to-purple-600"
      />
      <div className="container mx-auto px-4">
        <ThemeShowcase />
      </div>
    </div>
  );
}