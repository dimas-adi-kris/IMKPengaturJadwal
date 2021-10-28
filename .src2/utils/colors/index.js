import {mainColors} from './mainColors';

export const colors = {
  mainColors,
  light: mainColors.light[900],
  dark: mainColors.dark[900],
  text: {
    default: mainColors.primary[900],
    secondary: mainColors.secondary[900],
    disabled: mainColors.dark[600],
    menuInactive: mainColors.dark[600],
    menuActive: mainColors.primary[900],
  },
  button: {
    primary: {
      background: mainColors.primary[900],
      text: mainColors.light[900],
    },
  },
  status: {
    success: 'rgba(59, 157, 24, 1)',
    ongoing: 'rgba(249, 173, 60, 1)',
    booked: 'rgba(0, 167, 164, 1)',
    pending: 'rgba(241, 120, 182, 1)',
  },
  error: '#F33C3C',
};
