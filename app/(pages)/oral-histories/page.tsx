'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link.js';
import { COLORS, FONT_WEIGHTS, FONTS, P } from '../../globalStyles.js';
import { getThemes, getInterviews } from '../../actions';

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
  const [themes, setThemes] = useState<any[]>([]);
  const [interviews, setInterviews] = useState<any[]>([]);

  const timeLength = useCallback((startTime: string) => {
    const length = parseInt(startTime);

    return length;
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const themes = await getThemes();
      const interviews = await getInterviews();
      setThemes(themes);
      setInterviews(interviews);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Oral Histories</h1>
      {interviews.length > 0 ? (
        interviews.map((interview: any, index: number) => (
          <div key={index}>
            <StyledLink href={`/oral-histories/${interview.slug.current}`}>
              {interview.title}
            </StyledLink>
            {/* {interview.excerpts.map((excerpt: any, index: number) => (
              <ExcerptWrapper key={index} $length={excerpt.startTime}>
                <P>{excerpt.subTheme}</P>
              </ExcerptWrapper>
            ))} */}
          </div>
        ))
      ) : (
        <p>Loading interviews...</p>
      )}
    </Wrapper>
  );
}
