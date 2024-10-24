import styled from 'styled-components';
import { COLORS, GRADIENT_COLORS } from '../../styles';
import { useState, useMemo } from 'react';
import { ExcerptType } from '../../../sanity/types/types';

interface WaveformProps {
  width: number;
  excerpts: ExcerptType[];
  duration: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin-top: 20px;
`;

const Bar = styled.div<{ $height: number; $color: string; $opacity: number }>`
  background: ${({ $color }) => $color};
  opacity: ${({ $opacity }) => $opacity};
  height: ${({ $height }) => `${$height}px`};
  width: 2px;
  border-radius: 2px;
`;

export default function Waveform({ width, excerpts, duration }: WaveformProps) {
  const [barHeights, setBarHeights] = useState<number[]>([]);

  // format excerpt timestamps

  const formatTime = (time: number) => {
    if (time < 60) {
      const minutes = '00';
      const seconds = Math.floor(time).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      return `${minutes}:${seconds}`;
    }

    if (time > 60 && time < 3600) {
      const hours = '00';
      const minutes = Math.floor(time / 60);
      const formattedMinutes = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      const seconds = Math.floor(time - minutes * 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      return `${hours}:${formattedMinutes}:${seconds}`;
    }

    if (time > 3600) {
      const hours = Math.round((time / 3600) * 100) / 100;
      const formattedHours = Math.floor(time / 3600);
      const minutes = (hours - formattedHours) * 60;
      const formattedMinutes = Math.floor(minutes).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      const seconds = time / 60 - Math.floor(time / 60);
      const formattedSeconds = Math.floor(seconds * 60).toLocaleString(
        'en-US',
        {
          minimumIntegerDigits: 2,
          useGrouping: false
        }
      );

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  };

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

  const barWidth = (excerpt: any) =>
    Math.ceil(
      percentageCalc(excerpt.endTime) - percentageCalc(excerpt.startTime)
    );

  // get width of container
  // generate <Bar>s to fill that container
  // space between bars + width of the bars

  const randomBarHeight = () => Math.floor(Math.random() * (40 - 20) + 20);

  const generateBarHeights = useMemo(() => {
    let arr: number[] = [];
    const calcWidth = Math.floor(width / 6);

    if (barHeights.length < 1) {
      [...Array(calcWidth)].map(() => arr.push(randomBarHeight()));
      setBarHeights(arr);
    }
    return arr;
  }, []);

  const findColor = (num: number) => {
    let color = '';
    if (num < 100) {
      color = `${COLORS.BLACK}`;
    } else {
      color = `${COLORS.BLACK}`;
    }
    return color;
  };

  const findOpacity = (num: number) => {
    let opacity = 0;
    if (num < 100) {
      opacity = 1;
    } else {
      opacity = 0.25;
    }
    return opacity;
  };

  return (
    <Wrapper>
      {excerpts &&
        excerpts.map((excerpt, index) => (
          <Bar
            key={index}
            $height={randomBarHeight()}
            $color={GRADIENT_COLORS.ORANGE}
            $opacity={1}
          />
        ))}
      {generateBarHeights.map((num, index) => (
        <Bar
          key={index}
          $height={randomBarHeight()}
          $color={findColor(index)}
          $opacity={findOpacity(index)}
        />
      ))}
    </Wrapper>
  );
}
