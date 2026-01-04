export type ThemeConfig = {
  name: string;
  styles: {
    light: Record<string, string>;
    dark: Record<string, string>;
  };
  fonts?: {
    heading?: string;
    body?: string;
  };
};

export const themes: Record<string, ThemeConfig> = {
  songmaking: {
    name: 'SongMaking',
    styles: {
      light: {
        '--background': '0 0% 100%',
        '--foreground': '0 0% 3.9%',
        '--card': '0 0% 100%',
        '--card-foreground': '0 0% 3.9%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '0 0% 3.9%',
        '--primary': '0 72.2% 50.6%',
        '--primary-foreground': '0 85.7% 97.3%',
        '--secondary': '0 0% 96.1%',
        '--secondary-foreground': '0 0% 9%',
        '--muted': '0 0% 96.1%',
        '--muted-foreground': '0 0% 45.1%',
        '--accent': '0 0% 96.1%',
        '--accent-foreground': '0 0% 9%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '0 0% 89.8%',
        '--input': '0 0% 89.8%',
        '--ring': '0 72.2% 50.6%'
      },
      dark: {
        '--background': '0 0% 3.9%',
        '--foreground': '0 0% 98%',
        '--card': '0 0% 3.9%',
        '--card-foreground': '0 0% 98%',
        '--popover': '0 0% 3.9%',
        '--popover-foreground': '0 0% 98%',
        '--primary': '0 72.2% 50.6%',
        '--primary-foreground': '0 85.7% 97.3%',
        '--secondary': '0 0% 14.9%',
        '--secondary-foreground': '0 0% 98%',
        '--muted': '0 0% 14.9%',
        '--muted-foreground': '0 0% 63.9%',
        '--accent': '0 0% 14.9%',
        '--accent-foreground': '0 0% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '0 0% 14.9%',
        '--input': '0 0% 14.9%',
        '--ring': '0 72.2% 50.6%'
      }
    }
  },
  indieland: {
    name: 'IndieLand',
    styles: {
      light: {
        '--background': '0 0% 100%',
        '--foreground': '0 0% 5%',
        '--card': '0 0% 100%',
        '--card-foreground': '0 0% 5%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '0 0% 5%',
        '--primary': '201 26% 42%',
        '--primary-foreground': '0 0% 98%',
        '--secondary': '0 0% 96%',
        '--secondary-foreground': '0 0% 5%',
        '--muted': '0 0% 96%',
        '--muted-foreground': '0 0% 45%',
        '--accent': '0 0% 96%',
        '--accent-foreground': '0 0% 5%',
        '--destructive': '0 84% 60%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '0 0% 92%',
        '--input': '0 0% 85%',
        '--ring': '0 0% 76%'
      },
      dark: {
        '--background': '240 7% 8%',
        '--foreground': '180 9% 98%',
        '--card': '240 6% 10%',
        '--card-foreground': '180 9% 98%',
        '--popover': '240 6% 10%',
        '--popover-foreground': '180 9% 98%',
        '--primary': '234 43% 37%',
        '--primary-foreground': '180 9% 98%',
        '--secondary': '233 8% 19%',
        '--secondary-foreground': '180 9% 98%',
        '--muted': '235 7% 29%',
        '--muted-foreground': '234 8% 49%',
        '--accent': '234 71% 19%',
        '--accent-foreground': '180 9% 98%',
        '--destructive': '0 84% 60%',
        '--destructive-foreground': '0 0% 98%',
        '--border': '228 8% 12%',
        '--input': '232 9% 18%',
        '--ring': '234 43% 40%'
      }
    }
  },
  myartisttype: {
    name: 'MyArtistType',
    styles: {
      light: {
        '--background': '0 0% 100%',
        '--foreground': '224 71.4% 4.1%',
        '--card': '0 0% 100%',
        '--card-foreground': '224 71.4% 4.1%',
        '--popover': '0 0% 100%',
        '--popover-foreground': '224 71.4% 4.1%',
        '--primary': '262.1 83.3% 57.8%',
        '--primary-foreground': '210 20% 98%',
        '--secondary': '220 14.3% 95.9%',
        '--secondary-foreground': '220.9 39.3% 11%',
        '--muted': '220 14.3% 95.9%',
        '--muted-foreground': '220 8.9% 46.1%',
        '--accent': '220 14.3% 95.9%',
        '--accent-foreground': '220.9 39.3% 11%',
        '--destructive': '0 84.2% 60.2%',
        '--destructive-foreground': '210 20% 98%',
        '--border': '220 13% 91%',
        '--input': '220 13% 91%',
        '--ring': '262.1 83.3% 57.8%'
      },
      dark: {
        '--background': '224 71.4% 4.1%',
        '--foreground': '210 20% 98%',
        '--card': '224 71.4% 4.1%',
        '--card-foreground': '210 20% 98%',
        '--popover': '224 71.4% 4.1%',
        '--popover-foreground': '210 20% 98%',
        '--primary': '263.4 70% 50.4%',
        '--primary-foreground': '210 20% 98%',
        '--secondary': '215 27.9% 16.9%',
        '--secondary-foreground': '210 20% 98%',
        '--muted': '215 27.9% 16.9%',
        '--muted-foreground': '217.9 10.6% 64.9%',
        '--accent': '215 27.9% 16.9%',
        '--accent-foreground': '210 20% 98%',
        '--destructive': '0 62.8% 30.6%',
        '--destructive-foreground': '210 20% 98%',
        '--border': '215 27.9% 16.9%',
        '--input': '215 27.9% 16.9%',
        '--ring': '263.4 70% 50.4%'
      }
    }
  }
};