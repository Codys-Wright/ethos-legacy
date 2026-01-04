"use client";

import { platformThemes, defaultTheme } from '@/lib/themes';
import { ThemeContext } from '@/components/theme/theme-context';

export default function PlatformLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { platform: string };
}) {
  const theme = platformThemes[`${params.platform}.com`] || defaultTheme;

  return (
    <ThemeContext.Provider value={theme}>
      <div className="min-h-screen" style={{
        '--primary-color': theme.colors.primary,
        '--secondary-color': theme.colors.secondary,
        '--accent-color': theme.colors.accent,
        '--background-color': theme.colors.background,
        '--text-color': theme.colors.text,
        '--font-heading': theme.fonts.heading,
        '--font-body': theme.fonts.body,
        '--border-radius': theme.borderRadius,
      } as React.CSSProperties}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}