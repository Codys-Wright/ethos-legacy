import { PlatformNavBar } from "@/components/platform/nav-bar";
import { Phone } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";

export default function MentorOnCallLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div className="min-h-screen bg-background">
        <PlatformNavBar 
          platformName="MentorOnCall"
          icon={<Phone className="h-6 w-6" />}
        />
        <main className="container mx-auto px-4 py-6">{children}</main>
      </div>
    </ThemeProvider>
  );
}