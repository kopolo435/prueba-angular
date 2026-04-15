import Aura from '@primeuix/themes/aura';

export const primengThemeConfig = {
  theme: {
    preset: Aura,
    options: {
      darkModeSelector: 'none',
      cssLayer: {
        name: 'primeng',
        order: 'theme, base, primeng',
      },
    },
  },
};
