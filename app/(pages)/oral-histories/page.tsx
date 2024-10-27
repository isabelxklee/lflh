'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Link from 'next/link.js';
import { AUTH_FONT_WEIGHTS, COLORS, FONTS } from '../../styles.js';
import { getInterviews } from '../../actions';
import { InterviewType } from '../../../sanity/types/types.js';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

const InterviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS};
  font-weight: ${AUTH_FONT_WEIGHTS.MEDIUM};
  font-size: 18px;
  color: ${COLORS.BLACK};
  text-decoration: none;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`;

export default function OralHistories() {
  const [interviews, setInterviews] = useState<InterviewType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const interviews = await getInterviews();
      setInterviews(interviews);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Oral Histories</h1>
      <InterviewWrapper>
        {interviews &&
          interviews.map((interview: InterviewType, index: number) => (
            <StyledLink key={index} href={`/oral-histories/${interview.slug}`}>
              {interview.title}
            </StyledLink>
          ))}
      </InterviewWrapper>
    </Wrapper>
  );
}
