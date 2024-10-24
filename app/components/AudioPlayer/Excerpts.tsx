import styled from 'styled-components';
import { GRADIENT_COLORS, TextButton } from '../../styles';
import { TimeStamp } from '.';
import { ExcerptType } from '../../../sanity/types/types';

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
  percentageCalc: (arg0: string) => number;
  barWidth: (arg0: ExcerptType) => number;
}

export default function Excerpts({
  excerpts,
  percentageCalc,
  barWidth
}: ControlsProps) {
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
