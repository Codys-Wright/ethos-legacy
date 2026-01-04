"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";
import { themes, type ThemeConfig } from "@/lib/themes/theme-config";

export function PlatformThemeProvider({
  platform,
  children,
}: {
  platform: string;
  children: React.ReactNode;
}) {
  const { theme: currentTheme } = useTheme();
  const themeConfig = themes[platform] as ThemeConfig;

  useEffect(() => {
    if (!themeConfig) return;

    const root = document.documentElement;
    const styles = themeConfig.styles[currentTheme === "dark" ? "dark" : "light"];

    Object.entries(styles).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });

    return () => {
      Object.keys(styles).forEach((property) => {
        root.style.removeProperty(property);
      });
    };
  }, [currentTheme, themeConfig]);

  return <>{children}</>;
}