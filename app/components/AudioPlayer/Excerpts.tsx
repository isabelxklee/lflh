import styled from 'styled-components';
import { GRADIENT_COLORS } from '../../styles';
import { ExcerptType } from '../../../sanity/types/types';
import { timeStampToSeconds } from './helper';

const Excerpt = styled.div<{ $width: number; $start: number }>`
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
  excerpts: ExcerptType[];
  duration: number;
}

export default function Excerpts({ excerpts, duration }: ControlsProps) {
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
      {excerpts.map((excerpt: any, index: number) => (
        <Excerpt
          key={index}
          $start={percentageCalc(excerpt.startTime)}
          $width={barWidth(excerpt)}
        />
      ))}
    </Wrapper>
  );
}
