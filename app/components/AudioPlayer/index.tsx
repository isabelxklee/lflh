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
  const [duration, setDuration] = useState<number>(0);
  const [loadedDuration, setLoadedDuration] = useState<boolean>(false);
  const [loadedProgress, setLoadedProgress] = useState<boolean>(false);
  const [playing, setPlaying] = useState<boolean>(false);
  const audioPlayerRef = useRef(
    new Audio(
      'https://cdn.sanity.io/files/4569xi28/production/961494bdc0d6456a3a6ce8bb58feee65a9a5d055.mp3'
    )
  );
  const intervalRef = useRef();
  const isReady = useRef<boolean>(false);

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

  const formatTime = (time: number) => {
    if (time < 60) {
      const minutes = '00';
      const seconds = Math.floor(time);
      return `${minutes}:${seconds}`;
    } else {
      const minutes = Math.floor(time / 60);
      const seconds = time - minutes * 60;
      return `${minutes}:${seconds}`;
    }
  };

  useEffect(() => {
    if (audioPlayerRef.current.duration) {
      setDuration(audioPlayerRef.current.duration);
      setLoadedDuration(true);
    }

    if (audioPlayerRef.current.currentTime) {
      setTrackProgress(audioPlayerRef.current.currentTime);
      setLoadedProgress(true);
    }

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
        {loadedDuration && (
          <>
            <p>
              {formatTime(trackProgress)} / {formatTime(duration)}
            </p>
          </>
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
