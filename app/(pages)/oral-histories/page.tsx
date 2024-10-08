'use client';

import { interviews } from '../../data.js';
import styled from 'styled-components';
import { useCallback } from 'react';
import Header from '../../components/Header';
import { MiniGradientHeader } from '../../components/GradientHeader';
import Link from 'next/link.js';
import { COLORS, FONT_WEIGHTS, FONTS } from '../../globalStyles.js';

const ExcerptWrapper = styled.div<{ $length: number }>``;

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 14px;
  color: ${COLORS.BLACK};
  text-decoration: none;
  margin: 0;
`;

export default function OralHistories() {
  const timeLength = useCallback((startTime: string) => {
    const length = parseInt(startTime);

    return length;
  }, []);

  return (
    <>
      <Header show={true} />
      <MiniGradientHeader />
      <Wrapper>
        <h1>Oral Histories</h1>
        {interviews.map((interview: any, index: number) => (
          <div key={index}>
            <StyledLink href="/">{interview.title}</StyledLink>
            {interview.excerpts.map((excerpt: any, index: number) => (
              <ExcerptWrapper key={index} $length={excerpt.startTime}>
                <p>{excerpt.subTheme}</p>
              </ExcerptWrapper>
            ))}
          </div>
        ))}
      </Wrapper>
    </>
  );
}
