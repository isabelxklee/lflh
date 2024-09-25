import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
body {
    margin: 0;
    padding: 0;
    font-family: 'Cecilie Sans', sans-serif;
    font-weight: ${FONT_WEIGHTS.BOOK};
    background: ${COLORS.WHITE};
    color: ${COLORS.BLACK};
  }
`
