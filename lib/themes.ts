export type ThemeConfig = {
  name: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    text: string;
  };
  fonts: {
    heading: string;
    body: string;
  };
  spacing: {
    container: string;
    section: string;
  };
  borderRadius: string;
};

// Default theme as fallback
export const defaultTheme: ThemeConfig = {
  name: 'default',
  colors: {
    primary: 'hsl(var(--primary))',
    secondary: 'hsl(var(--secondary))',
    accent: 'hsl(var(--accent))',
    background: 'hsl(var(--background))',
    text: 'hsl(var(--foreground))',
  },
  fonts: {
    heading: 'var(--font-heading)',
    body: 'var(--font-body)',
  },
  spacing: {
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
    section: 'py-12 md:py-20',
  },
  borderRadius: 'var(--radius)',
};

// Platform-specific themes
export const platformThemes: Record<string, ThemeConfig> = {
  'songmaking.com': {
    name: 'songmaking',
    colors: {
      primary: '#FF3366',
      secondary: '#6B46C1',
      accent: '#38B2AC',
      background: '#FFFFFF',
      text: '#1A202C',
    },
    fonts: {
      heading: 'Montserrat',
      body: 'Inter',
    },
    spacing: {
      container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8',
      section: 'py-12 md:py-20',
    },
    borderRadius: '0.5rem',
  },
  // Add more platform themes here
};