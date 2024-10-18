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

const BarProgressKnob = styled.div`
  position: relative;
  height: 16px;
  width: 16px;
  border: 1.5px black;
  border-radius: 50%;
  background-color: orange;
`;

interface BarProps {
  duration: number;
  curTime: number;
  clickedTime: number;
  handleClick: (arg0: number) => void;
}

export default function ProgressBar({
  duration,
  curTime,
  clickedTime,
  handleClick
}: BarProps) {
  const barRef = useRef<any>();
  const curPercentage = useMemo(() => {
    return (curTime / duration) * 100;
  }, [curTime, duration]);

  const calcClickedTime = useCallback((event: any) => {
    const clickPositionInPage = event.pageX;
    const barStart =
      barRef.current.getBoundingClientRect().left + window.scrollX;
    const barWidth = barRef.current.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  }, []);

  // const handleTimeDrag = (event: any) => {
  //   setClickedTime(calcClickedTime(event));

  //   const updateTimeOnMove = (event: any) => {
  //     setClickedTime(calcClickedTime(event));
  //   };

  //   document.addEventListener('mousemove', updateTimeOnMove);

  //   document.addEventListener('mouseup', () => {
  //     document.removeEventListener('mousemove', updateTimeOnMove);
  //   });
  // };

  return (
    <BarWrapper>
      <BarTime>{curTime}</BarTime>
      <BarProgress ref={barRef} onMouseDown={event => handleTimeDrag(event)}>
        <BarProgressKnob
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </BarProgress>
      <BarTime className="bar__time">{duration}</BarTime>
    </BarWrapper>
  );
}
