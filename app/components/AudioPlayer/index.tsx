import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px 0;
`;

const Controls = styled.div``;

export default function AudioPlayer() {
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [clickedTime, setClickedTime] = useState<number | null>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioPlayerRef = useRef(
    new Audio(
      'https://cdn.sanity.io/files/4569xi28/production/961494bdc0d6456a3a6ce8bb58feee65a9a5d055.mp3'
    )
  );
  const intervalRef = useRef();
  const isReady = useRef<boolean>(false);
  const { duration } = audioPlayerRef.current;

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
    if (playing) {
      audioPlayerRef.current.play();
    } else {
      audioPlayerRef.current.pause();
    }
  }, [playing]);

  useEffect(() => {
    return () => {
      audioPlayerRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <Wrapper>
      {/* <audio ref={audioRef}>
        <source src="https://cdn.sanity.io/files/4569xi28/production/961494bdc0d6456a3a6ce8bb58feee65a9a5d055.mp3" />
      </audio> */}
      <Controls>
        {playing ? (
          <button onClick={() => setPlaying(false)}>Pause</button>
        ) : (
          // <Pause handleClick={() => setPlaying(false)} />
          <button onClick={() => setPlaying(true)}>Play</button>
          // <Play handleClick={() => setPlaying(true)} />
        )}
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
        {/* <ProgressBar
          currentTime={currentTime}
          duration={duration}
          clickedTime={clickedTime}
          handleClick={handleClick}
        /> */}
      </Controls>
    </Wrapper>
  );
}
