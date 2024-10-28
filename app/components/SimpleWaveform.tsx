import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { COLORS } from '../styles';
import { timeStampToSeconds, formatTranscriptText } from './AudioPlayer/helper';

interface SimpleWaveformProps {
  excerpts: any[];
  duration: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  margin: 20px 0;
  cursor: pointer;
`;

const Bar = styled.div<{ $height: number; $color: string }>`
  background: ${({ $color }) => ($color ? $color : `${COLORS.AUDIO_GREY}`)};
  opacity: 1;
  height: ${({ $height }) => `${$height}px`};
  width: 2px;
  border-radius: 2px;
`;

export default function SimpleWaveform({
  excerpts,
  duration
}: SimpleWaveformProps) {
  const [barHeights, setBarHeights] = useState<number[]>([]);
  const [barPositions, setBarPositions] = useState<any[]>([]);

  const numBars = 108;
  const calculateBar = (ts: string) => {
    const seconds = timeStampToSeconds(ts);
    const percent = seconds / duration;
    return Math.floor(percent * numBars);
  };

  useEffect(() => {
    const getBarPositions = () => {
      for (let i = 0; i < excerpts.length; i++) {
        const colorHex = excerpts[i].colorHex;
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
          color: colorHex
        };

        setBarPositions(prev => [...prev, obj]);
      }

      return barPositions;
    };

    getBarPositions();

    const generateBarHeights = () => {
      const arr: number[] = [
        15, 20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25,
        15, 20, 25, 20, 15, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25, 15, 20, 25,
        20, 15, 25, 15, 20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25, 15, 20, 25,
        20, 15, 25, 15, 20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25, 20, 15, 25,
        15, 20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25,
        20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25, 15, 20, 25, 20, 15, 25, 15
      ];

      setBarHeights(arr);
    };

    generateBarHeights();
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
      {barHeights.map((num, index) => (
        // add Link element for navigation
        <Bar key={index} $height={num} $color={findColor(index)} />
      ))}
    </Wrapper>
  );
}
