'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { FONTS, COLORS, FONT_WEIGHTS } from '../styles';

interface HeaderProps {
  show: boolean;
}

const Wrapper = styled.header<{ $show: boolean }>`
  top: ${({ $show }) => ($show ? '0px' : '-200px')};
  transition: 0.3s ease;
  padding: 20px;
  background: ${COLORS.GREY};
  width: 100%;
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

const StyledLink = styled(Link)<{ $isActive: boolean }>`
  text-decoration: none;
  color: black;
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${({ $isActive }) =>
    $isActive ? FONT_WEIGHTS.BOLD : FONT_WEIGHTS.REGULAR};
`;

const Header = ({ show }: HeaderProps) => {
  const pathname = usePathname().replace(/\//g, '');

  return (
    <Wrapper $show={show}>
      <UL>
        <li>
          <StyledLink href="/" $isActive={pathname == ''}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/about" $isActive={pathname == 'about'}>
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="/oral-histories"
            $isActive={pathname.includes('oral-histories')}
          >
            Oral Histories
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/themes" $isActive={pathname == 'themes'}>
            Themes
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/resources" $isActive={pathname == 'resources'}>
            Resources
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/partners" $isActive={pathname == 'partners'}>
            Partners
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/contact" $isActive={pathname == 'contact'}>
            Contact
          </StyledLink>
        </li>
      </UL>
    </Wrapper>
  );
};

export default Header;
