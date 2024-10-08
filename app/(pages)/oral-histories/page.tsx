'use client';

import { GlobalWrapper } from '../../globalStyles';
import { interviews } from '../../data.js';
import styled from 'styled-components';
import { useCallback } from 'react';
import Header from '../../components/Header';

const ExcerptWrapper = styled.div<{ $length: number }>``;

export default function OralHistories() {
  const timeLength = useCallback((startTime: string) => {
    const length = parseInt(startTime);

    return length;
  }, []);

  return (
    <>
      <Header show={true} />
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
    </>
  );
}
