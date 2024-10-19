import { forwardRef, useCallback, useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px 0;
`;

interface PlayerProps {
  duration: number;
  trackProgress: number;
  audioFile: string;
}

export const Player = forwardRef(function Player(
  { duration, trackProgress, audioFile }: PlayerProps,
  ref
) {
  const intervalRef = useRef();
  const isReady = useRef<boolean>(false);
  const audioPlayerRef = useRef(new Audio(audioFile));

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%';

  const trackStyling = useMemo(() => {
    return `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`;
  }, []);

  const onScrub = useCallback((value: any) => {
    clearInterval(intervalRef.current);
    audioPlayerRef.current.currentTime = value;
    setTrackProgress(audioPlayerRef.current.currentTime);
  }, []);

  const onScrubEnd = useCallback(() => {
    if (!playing) {
      setPlaying(true);
    }
  }, []);

  useEffect(() => {
    return () => {
      audioPlayerRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Wrapper>
      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        className="progress"
        onChange={(event: any) => onScrub(event.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        style={{ background: trackStyling }}
      />
    </Wrapper>
  );
});
