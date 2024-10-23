'use client';

import styled from 'styled-components';
import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link.js';
import { COLORS, FONT_WEIGHTS, FONTS, P } from '../../styles.js';
import { getThemes, getInterviews } from '../../actions';
import { InterviewType, ThemeType } from '../../../sanity/types/types.js';

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
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const [interviews, setInterviews] = useState<InterviewType[]>([]);

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
      {interviews &&
        interviews.map((interview: InterviewType, index: number) => (
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
        ))}
    </Wrapper>
  );
}
