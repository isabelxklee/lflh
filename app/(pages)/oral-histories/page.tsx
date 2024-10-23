'use client';

import styled from 'styled-components';
import { useEffect, useState } from 'react';
import Link from 'next/link.js';
import { COLORS, FONT_WEIGHTS, FONTS, P } from '../../styles.js';
import { getInterviews } from '../../actions';
import { InterviewType, ThemeType } from '../../../sanity/types/types.js';

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
  const [interviews, setInterviews] = useState<InterviewType[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const interviews = await getInterviews();
      setInterviews(interviews);
    };

    fetchData();
  }, []);

  console.log(interviews);

  return (
    <Wrapper>
      <h1>Oral Histories</h1>
      {interviews &&
        interviews.map((interview: InterviewType, index: number) => (
          <div key={index}>
            <StyledLink href={`/oral-histories/${interview.slug}`}>
              {interview.title}
            </StyledLink>
          </div>
        ))}
    </Wrapper>
  );
}
