'use client';

import { createGlobalStyle } from 'styled-components';

export const GRADIENT_COLORS = {};

export const COLORS = {
  GREY: '#F2F2F2'
};

export const FONT_WEIGHTS = {
  LIGHT: 200,
  BOOK: 300,
  REGULAR: 400,
  MEDIUM: 500,
  SEMIBOLD: 600,
  BOLD: 700,
  BLACK: 800
};

export const FONTS = {
  AUTH_SANS: 'Authentic Sans',
  AUTH_KUNST: 'Authentic Kunstverein',
  FANN: 'Fann Grotesque Pro'
};

export const BREAKPOINTS = {
  SMALL: '400px',
  MEDIUM: '1000px'
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Authentic Sans';
    font-style: regular;
    font-weight: 60;
    src: url('./fonts/authentic-sans-60.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Authentic Sans';
    font-style: regular;
    font-weight: 90;
    src: url('./fonts/authentic-sans-90.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Authentic Sans';
    font-style: regular;
    font-weight: 130;
    src: url('./fonts/authentic-sans-130.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Fann Grotesque Pro';
    font-style: regular;
    font-weight: 400;
    src: url('Fann Grotesque Pro') format('ttf')
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Fann Grotesque Pro", sans-serif;
    font-weight: normal;
  }
`;
