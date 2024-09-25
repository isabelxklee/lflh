'use client';

import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 20px;
`;

const Header = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/oral-histories">Oral Histories</Link>
        </li>
        <li>
          <Link href="/themes">Themes</Link>
        </li>
        <li>
          <Link href="/resources">Resources</Link>
        </li>
        <li>
          <Link href="/partners">Partners</Link>
        </li>
        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;
