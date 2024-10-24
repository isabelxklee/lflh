import styled from 'styled-components';
import { COLORS, GRADIENT_COLORS } from '../../styles';
import { useState, useMemo, useEffect } from 'react';
import { ExcerptType } from '../../../sanity/types/types';
import { formatTranscriptText, timeStampToSeconds } from './helper';

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

const Bar = styled.div<{ $height: number; $color: string }>`
  background: ${({ $color }) => ($color ? $color : `${COLORS.AUDIO_GREY}`)};
  opacity: 1;
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
        const cleanExcerpt = formatTranscriptText(excerpts[i].transcriptText);
        const start = calculateBar(cleanExcerpt.start);
        const end = calculateBar(cleanExcerpt.end);
        const arrRange = Array.from(
          { length: end - start },
          (value, index) => start + index
        );

        const obj = {
          start: start,
          end: end,
          array: arrRange,
          color: `${GRADIENT_COLORS.ORANGE}`
        };

        setBarPositions(prev => [...prev, obj]);
      }

      return barPositions;
    };

    getBarPositions();
  }, []);

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

    for (let i = 0; i < barPositions.length; i++) {
      if (barPositions[i].array.includes(num)) {
        color = barPositions[i].color;
      }
    }

    return color;
  };

  return (
    <Wrapper>
      {generateBarHeights.map((num, index) => (
        <Bar
          key={index}
          $height={randomBarHeight()}
          $color={findColor(index)}
        />
      ))}
    </Wrapper>
  );
}
