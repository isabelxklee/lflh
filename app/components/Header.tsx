'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styled from 'styled-components';
import { FONTS, COLORS, FONT_WEIGHTS } from '../globalStyles';
import { useCallback } from 'react';

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

const StyledLink = styled(Link)<{ $active: boolean }>`
  text-decoration: none;
  color: black;
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${({ $active }) =>
    $active ? FONT_WEIGHTS.BOLD : FONT_WEIGHTS.REGULAR};
`;

const Header = ({ show }: HeaderProps) => {
  const pathname = usePathname();

  const slugify = useCallback((page: string) => {
    return page.toLowerCase().replace(/\s+/g, '-');
  }, []);

  const activePage = useCallback((page: string) => {
    return `/${slugify(page)}` === pathname;
  }, []);

  return (
    <Wrapper $show={show}>
      <UL>
        <li>
          <StyledLink href="/" $active={activePage('')}>
            Home
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/about" $active={activePage('About')}>
            About
          </StyledLink>
        </li>
        <li>
          <StyledLink
            href="/oral-histories"
            $active={activePage('Oral Histories')}
          >
            Oral Histories
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/themes" $active={activePage('Themes')}>
            Themes
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/resources" $active={activePage('Resources')}>
            Resources
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/partners" $active={activePage('Partners')}>
            Partners
          </StyledLink>
        </li>
        <li>
          <StyledLink href="/contact" $active={activePage('Contact')}>
            Contact
          </StyledLink>
        </li>
      </UL>
    </Wrapper>
  );
};

export default Header;
