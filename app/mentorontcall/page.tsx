import { HeroSection } from "@/features/platforms/components/hero-section";
import { ThemeShowcase } from "@/features/platforms/components/theme-showcase";

export default function MentorOnCallPage() {
  return (
    <div>
      <HeroSection
        title="Welcome to MentorOnCall"
        subtitle="Connect with industry experts in real-time"
        gradient="bg-gradient-to-br from-amber-400 to-orange-500"
      />
      <div className="container mx-auto px-4">
        <ThemeShowcase />
      </div>
    </div>
  );
}