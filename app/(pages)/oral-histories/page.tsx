'use client';

import { GlobalWrapper } from '../../globalStyles';
import { interviews } from '../../data.js';
import styled from 'styled-components';
import { useMemo } from 'react';

const ExcerptWrapper = styled.div<{ $length: number }>``;

export default function OralHistories() {
  const timeLength = useMemo(() => {
    return 0;
  }, []);

  return (
    <GlobalWrapper>
      <h1>Oral Histories</h1>
      {interviews.map((interview: any, index: number) => (
        <div key={index}>
          <p>{interview.title}</p>
          {interview.excerpts.map((excerpt: any, index: number) => (
            <ExcerptWrapper key={index} $length={excerpt.startTime}>
              <p>{excerpt.subTheme}</p>
            </ExcerptWrapper>
          ))}
        </div>
      ))}
    </GlobalWrapper>
  );
}
