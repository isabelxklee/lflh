'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { FONTS, COLORS, FONT_WEIGHTS } from '../globalStyles';

interface HeaderProps {
  show: boolean;
}

const Wrapper = styled.header<{ $show: boolean }>`
  top: ${({ $show }) => ($show ? '0px' : '-200px')};
  transition: 0.4s ease;
  padding: 20px;
  background: ${COLORS.GREY};
  width: 100dvw;
  height: fit-content;
  z-index: 10;
  position: fixed;
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
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`;

const Header = ({ show }: HeaderProps) => {
  return (
    <Wrapper $show={show}>
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
  );
};

export default Header;
