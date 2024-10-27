'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Link from 'next/link.js';
import { COLORS, FONT_WEIGHTS, FONTS, P, PageWrapper } from '../../styles.js';
import { getInterviews } from '../../actions';
import { InterviewType } from '../../../sanity/types/types.js';

const InterviewWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS};
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 22px;
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
    <PageWrapper>
      {/* <h1>Oral Histories</h1> */}
      <InterviewWrapper>
        {interviews &&
          interviews.map((interview: InterviewType, index: number) => (
            <StyledLink key={index} href={`/oral-histories/${interview.slug}`}>
              {interview.title}
            </StyledLink>
          ))}
      </InterviewWrapper>
    </PageWrapper>
  );
}
