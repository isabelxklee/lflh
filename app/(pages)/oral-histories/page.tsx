'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Link from 'next/link.js';
import { COLORS, FONT_WEIGHTS, FONTS, P, PageWrapper } from '../../styles.js';
import { getInterviews } from '../../actions';
import { InterviewType } from '../../../sanity/types/types.js';
import SimpleWaveform from '../../components/SimpleWaveform';

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
            <div key={index}>
              <StyledLink href={`/oral-histories/${interview.slug}`}>
                {interview.title}
              </StyledLink>
              <SimpleWaveform excerpts={interview.excerpts} duration={8111} />
            </div>
          ))}
      </InterviewWrapper>
    </PageWrapper>
  );
}
