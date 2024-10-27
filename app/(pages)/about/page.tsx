'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { COLORS, FONT_WEIGHTS, FONTS, P, PageWrapper } from '../../styles';

const Title = styled.h1`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 22px;
  margin: 0 0 40px 0;
`;

const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 22px;
  margin: 0;
  text-decoration: none;
  color: ${COLORS.BLACK};

  &:hover {
    text-decoration: underline;
  }
`;

const LinkWrapper = styled.div`
  margin: 50px 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HR = styled.hr`
  border-width: 2px;
  color: ${COLORS.BLACK};
  border-bottom-style: hidden;
  border-top-style: solid;
`;

export default function About() {
  return (
    <PageWrapper>
      <Title>About Listening for the Long Haul</Title>
      <P>
        About page description project of people living with Long COVID and
        associated conditions (pwLCAC). In this section of the exhibition we
        encourage you find a quiet space where you can listen to, and process,
        the audio clips from the interviews. Here you will hear original
        interviews, and also in the way the exhibition is organized, with one
        clip following the other and organized by theme. To keep this section
        accessible, we have included the transcript with each audio clip, so
        that you can read while you listen and listen while you read.
      </P>
      <LinkWrapper>
        <StyledLink href="/">
          Deep Listening Practice: How to use this site
        </StyledLink>
        <StyledLink href="/">Our Methodology</StyledLink>
        <StyledLink href="/">Consent Process</StyledLink>
      </LinkWrapper>
      <HR />
      <LinkWrapper>
        <StyledLink href="/">Participants</StyledLink>
        <StyledLink href="/">Interviews & Architects</StyledLink>
      </LinkWrapper>
    </PageWrapper>
  );
}
