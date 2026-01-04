"use client";

import { defaultTheme } from '@/lib/themes';
import { ThemeContext } from '@/components/theme/theme-context';

export default function CustomDomainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeContext.Provider value={defaultTheme}>
      <div className="min-h-screen">
        {children}
      </div>
    </ThemeContext.Provider>
  );
}