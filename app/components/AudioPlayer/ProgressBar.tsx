import { useCallback, useMemo, useRef } from 'react';
import styled from 'styled-components';

const BarWrapper = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;
`;

const BarTime = styled.div`
  color: black;
  font-size: 16px;
`;

const BarProgress = styled.span`
  flex: 1;
  border-radius: 5px;
  margin: 0 20px;
  height: 10px;
  display: flex;
  align-items: center;
  cursor: pointer;
  /* background: linear-gradient(to right, orange 50%, white 0); */
  background: orange;
`;

const BarProgressKnob = styled.div<{ $currPercent: number }>`
  position: relative;
  height: 16px;
  width: 16px;
  border: 1.5px black;
  border-radius: 50%;
  background-color: orange;
  left: ${({ $currPercent }) => `${$currPercent - 2}%`};
`;

interface BarProps {
  duration: number | undefined;
  currentTime: number | undefined;
  clickedTime: number;
  handleClick: (arg0: number) => void;
}

export default function ProgressBar({
  duration,
  currentTime,
  clickedTime,
  handleClick
}: BarProps) {
  const barRef = useRef<any>();
  const currPercent = useMemo(() => {
    if (currentTime && duration) {
      return (currentTime / duration) * 100;
    }
  }, [currentTime, duration]);

  const calcClickedTime = useCallback((event: any) => {
    if (duration) {
      const clickPositionInPage = event.pageX;
      const barStart =
        barRef.current.getBoundingClientRect().left + window.scrollX;
      const barWidth = barRef.current.offsetWidth;
      const clickPositionInBar = clickPositionInPage - barStart;
      const timePerPixel = duration / barWidth;
      return timePerPixel * clickPositionInBar;
    }
  }, []);

  const handleTimeDrag = useCallback((event: any) => {
    handleClick(calcClickedTime(event));

    const updateTimeOnMove = (event: any) => {
      handleClick(calcClickedTime(event));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  }, []);

  return (
    <BarWrapper>
      <BarTime>{currentTime}</BarTime>
      <BarProgress
        ref={barRef}
        onMouseDown={(event: any) => handleTimeDrag(event)}
      >
        <BarProgressKnob $currPercent={currPercent - 2} />
      </BarProgress>
      <BarTime>{duration}</BarTime>
    </BarWrapper>
  );
}
