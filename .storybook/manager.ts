import { addons } from '@storybook/manager-api';
import { create } from '@storybook/theming';

const theme = create({
  base: 'dark',
  brandTitle: 'Pokemon Forms',
  brandUrl: '#',
  brandImage: '../src/assets/logos/LunaEdgeLogo.svg',
});

addons.setConfig({
  theme,
});
