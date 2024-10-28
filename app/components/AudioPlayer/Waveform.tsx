import styled from 'styled-components';
import { COLORS } from '../../styles';
import { useState, useEffect } from 'react';
import { ExcerptType } from '../../../sanity/types/types';
import { formatTranscriptText, timeStampToSeconds } from './helper';

interface WaveformProps {
  pixelWidth: number;
  excerpts: ExcerptType[];
  duration: number;
  progress: number;
  handleWaveformClick: (arg0: number, arg1: number) => void;
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
  duration,
  progress,
  handleWaveformClick
}: WaveformProps) {
  const [barHeights, setBarHeights] = useState<number[]>([]);
  const [barPositions, setBarPositions] = useState<any[]>([]);

  const numBars = Math.floor(pixelWidth / 6);
  const calculateBar = (ts: string) => {
    const seconds = timeStampToSeconds(ts);
    const percent = seconds / duration;
    return Math.floor(percent * numBars);
  };

  const currentPercentage = progress / duration;
  const pastBars = Math.floor(currentPercentage * 133);

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
        40, 20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30,
        40, 20, 30, 20, 40, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30,
        20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30,
        20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 20, 40, 30,
        40, 20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30,
        20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 40,
        20, 30, 20, 40, 30, 20, 40, 30, 40, 20, 30, 20, 40, 30, 40, 20, 30, 20,
        40, 30, 40, 20, 30, 20, 40
      ];

      // arr.length = 133

      setBarHeights(arr);
    };

    generateBarHeights();
  }, []);

  // color should depend on the following variables:
  // the timestamp - is it past or future?
  // is it an excerpt or not?

  const findColor = (num: number) => {
    let color = '';

    if (num <= pastBars) {
      color = COLORS.BLACK;
    }

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
        <Bar
          key={index}
          $height={num}
          $color={findColor(index)}
          onClick={() => handleWaveformClick(index, numBars)}
        />
      ))}
    </Wrapper>
  );
}
