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
  AUDIO_GREY: '#C9C9C9',
  GREY: '#F2F2F2',
  BLACK: '#000'
};

export const FONT_WEIGHTS = {
  REGULAR: 400,
  MEDIUM: 500,
  BOLD: 600
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
  margin-bottom: 200px;
`;

export const P = styled.p`
  font-family: ${FONTS.FANN}, sans-serif;
  font-weight: ${FONT_WEIGHTS.REGULAR};
  font-size: 22px;
  margin: 0;
`;

export const SmallP = styled(P)`
  font-size: 16px;
  font-weight: ${FONT_WEIGHTS.REGULAR};
`;

export const H3 = styled.h3`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 22px;
  margin: 0;
`;

export const H4 = styled.h4`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 18px;
  margin: 0;
`;

export const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 14px;
  text-transform: uppercase;
  color: ${COLORS.BLACK};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
`;

export const TextButton = styled.button`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 12px;
  text-transform: uppercase;
  color: ${COLORS.BLACK};
  background: transparent;
  border: none;
  cursor: pointer;
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
    src: url('/fonts/fann-grotesque-regular.woff2') format('woff2')
  }

  @font-face {
    font-family: 'Fann Grotesque Pro';
    font-style: normal;
    font-weight: 500;
    src: url('/fonts/fann-grotesque-medium.woff2') format('woff2')
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
    font-family: ${FONTS.FANN}, sans-serif;
    font-weight: ${FONT_WEIGHTS.REGULAR};
    color: ${COLORS.BLACK};
  }
`;
