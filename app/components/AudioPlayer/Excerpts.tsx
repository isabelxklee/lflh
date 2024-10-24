import styled from 'styled-components';
import { GRADIENT_COLORS } from '../../styles';
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
  duration: number;
}

export default function Excerpts({ excerpts, duration }: ControlsProps) {
  const timeStampToSeconds = (ts: string) => {
    let hours,
      minutes,
      seconds,
      timeInSeconds = 0;
    const hourRegex = /((\d{2}):(\d{2}):(\d{2}))/g;
    const minuteRegex = /((\d{2}):(\d{2}))/g;

    // hh:mm:ss
    if (hourRegex.test(ts)) {
      hours = ts.slice(0, 2);
      minutes = ts.slice(3, 5);
      seconds = ts.slice(6, 8);
      timeInSeconds =
        parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
      // mm:ss
    } else if (minuteRegex.test(ts)) {
      minutes = ts.slice(0, 2);
      seconds = ts.slice(3, 5);
      timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    }

    return timeInSeconds;
  };

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
