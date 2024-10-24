import styled from 'styled-components';
import { COLORS, GRADIENT_COLORS } from '../../styles';
import { useState, useMemo, useEffect } from 'react';
import { ExcerptType } from '../../../sanity/types/types';

interface WaveformProps {
  pixelWidth: number;
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

export default function Waveform({
  pixelWidth,
  excerpts,
  duration
}: WaveformProps) {
  const [barHeights, setBarHeights] = useState<number[]>([]);
  const [barPositions, setBarPositions] = useState<any[]>([]);

  // format excerpt timestamps

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

  const randomBarHeight = () => Math.floor(Math.random() * (40 - 20) + 20);
  const numBars = Math.floor(pixelWidth / 6);
  const calculateBar = (ts: string) => {
    const seconds = timeStampToSeconds(ts);
    const percent = seconds / duration;
    return Math.floor(percent * numBars);
  };

  useEffect(() => {
    const getBarPositions = () => {
      for (let i = 0; i < excerpts.length; i++) {
        const start = calculateBar(excerpts[i].startTime);
        const end = calculateBar(excerpts[i].endTime);

        const obj = {
          start: start,
          end: end,
          color: `${GRADIENT_COLORS.ORANGE}`
        };

        setBarPositions(prev => [...prev, obj]);
      }

      return barPositions;
    };

    getBarPositions();
  }, []);

  console.log(barPositions);

  // figure out which bars should be colored
  // depending on the excerpt's start and end time
  // total number of bars = calcWidth
  // example: 166
  // orange: [23, 71]

  const generateBarHeights = useMemo(() => {
    let arr: number[] = [];

    if (barHeights.length < 1) {
      [...Array(numBars)].map(() => arr.push(randomBarHeight()));
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
      {/* {excerpts &&
        excerpts.map((excerpt, index) => (
          <Bar
            key={index}
            $height={randomBarHeight()}
            $color={GRADIENT_COLORS.ORANGE}
            $opacity={1}
          />
        ))} */}
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
