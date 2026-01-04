import { PlatformNavBar } from "@/components/platform/nav-bar";
import { Music } from "lucide-react";
import { ThemeProvider } from "@/components/theme-provider";
import { SongMakingNav } from "@/components/songmaking/main-nav";

export default function SongMakingLayout({
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
          platformName="SongMaking"
          icon={<Music className="h-6 w-6" />}
        >
          <SongMakingNav />
        </PlatformNavBar>
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">{children}</main>
      </div>
    </ThemeProvider>
  );
}