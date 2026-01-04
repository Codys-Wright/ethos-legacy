import { HeroSection } from "@/features/platforms/components/hero-section";
import { ThemeShowcase } from "@/features/platforms/components/theme-showcase";

export default function FastTrackStudioPage() {
  return (
    <div>
      <HeroSection
        title="Welcome to FastTrackStudio"
        subtitle="Streamline your music production workflow"
        gradient="bg-gradient-to-br from-emerald-500 to-green-600"
      />
      <div className="container mx-auto px-4">
        <ThemeShowcase />
      </div>
    </div>
  );
}