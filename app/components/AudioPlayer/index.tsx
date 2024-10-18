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
  const [duration, setDuration] = useState<string | undefined>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [clickedTime, setClickedTime] = useState<number | null>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const initPlayer = useCallback(() => {
    return document.getElementById('audio');
  }, []);

  const getFormattedTime = useCallback((time: number) => {
    if (time === 0) {
      return '0 : 00';
    } else {
      const minutes = Math.floor(time / 60);
      const seconds = time - minutes * 60;
      return `${minutes} : 0${seconds}`;
    }
  }, []);

  useEffect(() => {
    initPlayer();
    if (audioRef.current) {
      const duration = Math.floor(audioRef.current.duration);
      setDuration(getFormattedTime(duration));
    }
  }, []);

  const handleClick = (time: number) => {
    setClickedTime(time);
  };

  return (
    <Wrapper>
      <audio ref={audioRef} id="audio">
        <source src="https://cdn.sanity.io/files/4569xi28/production/961494bdc0d6456a3a6ce8bb58feee65a9a5d055.mp3" />
      </audio>
      <Controls>
        {playing ? (
          <button onClick={() => setPlaying(false)}>Pause</button>
        ) : (
          // <Pause handleClick={() => setPlaying(false)} />
          <button onClick={() => setPlaying(true)}>Play</button>
          // <Play handleClick={() => setPlaying(true)} />
        )}
        <ProgressBar
          currentTime={currentTime}
          duration={duration}
          clickedTime={clickedTime}
          handleClick={handleClick}
        />
      </Controls>
    </Wrapper>
  );
}
