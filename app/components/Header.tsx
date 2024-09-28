'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { FONTS, GRADIENT_COLORS } from '../globalStyles';

const Wrapper = styled.header`
  padding: 20px;
  background: #f2f2f2;
  z-index: 2;
`;

const UL = styled.ul`
  list-style: none;
  display: flex;
  gap: 40px;
  justify-content: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-family: ${FONTS.AUTH_SANS};
`;

const GradientWrapper = styled.div`
  background: linear-gradient(
    90deg,
    ${GRADIENT_COLORS.BLUE},
    ${GRADIENT_COLORS.DUSK},
    ${GRADIENT_COLORS.PURPLE},
    ${GRADIENT_COLORS.BLACK},
    ${GRADIENT_COLORS.GREEN},
    ${GRADIENT_COLORS.LIGHT_PURPLE},
    ${GRADIENT_COLORS.LIGHT_ORANGE},
    ${GRADIENT_COLORS.ORANGE}
  );
  height: 200px;
  z-index: 1;
`;

const Header = () => {
  return (
    <>
      <GradientWrapper />
      <Wrapper>
        <UL>
          <li>
            <StyledLink href="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink href="/about">About</StyledLink>
          </li>
          <li>
            <StyledLink href="/oral-histories">Oral Histories</StyledLink>
          </li>
          <li>
            <StyledLink href="/themes">Themes</StyledLink>
          </li>
          <li>
            <StyledLink href="/resources">Resources</StyledLink>
          </li>
          <li>
            <StyledLink href="/partners">Partners</StyledLink>
          </li>
          <li>
            <StyledLink href="/contact">Contact</StyledLink>
          </li>
        </UL>
      </Wrapper>
    </>
  );
};

export default Header;
