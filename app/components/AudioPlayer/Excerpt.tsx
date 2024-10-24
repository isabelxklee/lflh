import styled from 'styled-components';
import { GRADIENT_COLORS } from '../../styles';
import { ExcerptType } from '../../../sanity/types/types';
import { formatTranscriptText, timeStampToSeconds } from './helper';
import { useState, useEffect } from 'react';

const ExcerptWrapper = styled.div<{ $width: number; $start: number }>`
  position: absolute;
  background: ${GRADIENT_COLORS.ORANGE};
  height: 8px;
  width: ${({ $width }) => `${$width}%`};
  left: ${({ $start }) => `${$start}%`};
  z-index: 10;
`;

const Wrapper = styled.div`
  top: -42px;
  position: relative;
`;

interface ControlsProps {
  excerpt: ExcerptType;
  duration: number;
}

export default function Excerpt({ excerpt, duration }: ControlsProps) {
  const [text, setText] = useState<string>('');

  useEffect(() => {
    const obj = formatTranscriptText(excerpt.transcriptText[0]);
    // setSpeaker(obj.speaker);
    // setTimeStamp(obj.timestamp);
    setText(obj.text);
  }, []);

  console.log(excerpt);
  const percentageCalc = (ts: string) => {
    const seconds = timeStampToSeconds(ts);
    return Math.ceil((seconds / duration) * 100);
  };

  const barWidth = (excerpt: ExcerptType) =>
    Math.ceil(
      percentageCalc(excerpt.endTime) - percentageCalc(excerpt.startTime)
    );

  return (
    <Wrapper>
      {excerpt.map((excerpt: any, index: number) => (
        <ExcerptWrapper
          key={index}
          $start={percentageCalc(excerpt.startTime)}
          $width={barWidth(excerpt)}
        />
      ))}
    </Wrapper>
  );
}
