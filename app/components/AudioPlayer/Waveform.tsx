import styled from 'styled-components';
import { COLORS } from '../../styles';
import { useState, useMemo } from 'react';
import { ExcerptType } from '../../../sanity/types/types';

interface WaveformProps {
  width: number;
  excerpts: ExcerptType;
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

export default function Waveform({ width, excerpts }: WaveformProps) {
  const [barHeights, setBarHeights] = useState<number[]>([]);

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
