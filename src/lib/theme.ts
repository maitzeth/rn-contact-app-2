import {rem, vw, vh} from './units';

export const theme = {
  theme: {
    colors: {
      black: '#0f0f0f',
      primary: '#f55f5f',
      gray: '#878787',
      white: '#ecf0f1',
    },
    units: {
      rem,
    },
    dimensions: {
      vw,
      vh,
    },
  },
} as const;
