'use client';

import styled, { createGlobalStyle } from 'styled-components';
import Link from 'next/link';

export const GRADIENT_COLORS = {
  BLUE: '#1F4DBB',
  DUSK: '#6159DD',
  PURPLE: '#A364FE',
  BLACK: '#332E38',
  GREEN: '#9CA578',
  LIGHT_PURPLE: '#B1B2DC',
  LIGHT_ORANGE: '#E9B2A1',
  ORANGE: '#F07F2E'
};

export const COLORS = {
  GREY: '#F2F2F2',
  BLACK: '#000'
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

export const GlobalWrapper = styled.div`
  padding: 100px 25%;
`;

export const P = styled.p`
  font-family: ${FONTS.FANN};
  font-weight: ${FONT_WEIGHTS.REGULAR};
  font-size: 22px;
  margin: 0;
`;

export const H3 = styled.h3`
  font-family: ${FONTS.AUTH_SANS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 22px;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 14px;
  text-transform: uppercase;
  color: ${COLORS.BLACK};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
`;

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Authentic Sans';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/authentic-sans-60.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Authentic Sans';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/authentic-sans-90.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Authentic Sans';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/authentic-sans-130.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Fann Grotesque Pro';
    font-style: normal;
    font-weight: 400;
    src: url('/fonts/fann-grotesque-regular.woff2') format('ttf')
  }

  @font-face {
    font-family: 'Fann Grotesque Pro';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/fann-grotesque-medium.woff2') format('ttf')
  }

  @font-face {
    font-family: 'Fann Grotesque Pro';
    font-style: normal;
    font-weight: 600;
    src: url('/fonts/fann-grotesque-bold.woff2') format('woff2')
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Fann Grotesque Pro", sans-serif;
    font-weight: normal;
    color: ${COLORS.BLACK};
  }
`;
