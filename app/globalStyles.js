'use client';

import styled, { createGlobalStyle } from 'styled-components';

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

export const BREAKPOINTS = {
  SMALL: '400px',
  MEDIUM: '1000px'
};

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Authentic Sans';
    font-style: regular;
    font-weight: 400;
    src: url('Authentic Sans') format('otf')
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
