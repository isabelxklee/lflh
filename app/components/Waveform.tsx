import styled from 'styled-components';
import { COLORS } from '../styles';
import { useState, useMemo } from 'react';

interface WaveformProps {
  width: number;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 3px;
  margin-top: 20px;
`;

const Bar = styled.div<{ $height: number }>`
  background: ${COLORS.BLACK};
  height: ${({ $height }) => `${$height}px`};
  width: 3px;
  border-radius: 2px;
`;

export default function Waveform({ width }: WaveformProps) {
  const [barHeights, setBarHeights] = useState<number[]>([]);

  // get width of container
  // generate <Bar>s to fill that container
  // space between bars + width of the bars

  const randomBarHeight = () => Math.floor(Math.random() * (30 - 10) + 10);

  const generateBarHeights = useMemo(() => {
    let arr: number[] = [];
    const calcWidth = Math.floor(width / 6);

    if (barHeights.length < 1) {
      [...Array(calcWidth)].map(() => arr.push(randomBarHeight()));
      setBarHeights(arr);
    }
    return arr;
  }, []);

  return (
    <Wrapper>
      {generateBarHeights.map((num, index) => (
        <Bar key={index} $height={randomBarHeight()} />
      ))}
    </Wrapper>
  );
}
