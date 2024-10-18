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
  const [duration, setDuration] = useState<number | undefined>();
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [clickedTime, setClickedTime] = useState<number | null>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current !== null) {
      const setAudioData = () => {
        setDuration(audioRef.current.duration);
        setCurrentTime(audioRef.current.currentTime);
      };

      const setAudioTime = () => {
        setCurrentTime(audioRef.current.currentTime);
      };

      audioRef.current.addEventListener('loadeddata', setAudioData);

      audioRef.current.addEventListener('timeupdate', setAudioTime);

      playing ? audioRef.current.play() : audioRef.current.pause();

      if (clickedTime && clickedTime !== currentTime) {
        audioRef.current.currentTime = clickedTime;
        setClickedTime(null);
      }

      return () => {
        audioRef.current.removeEventListener('loadeddata', setAudioData);
        audioRef.current.removeEventListener('timeupdate', setAudioTime);
      };
    }
  }, [clickedTime, playing, currentTime]);

  const handleClick = (time: number) => {
    setClickedTime(time);
  };

  console.log(duration, currentTime);

  return (
    <Wrapper>
      <audio ref={audioRef}>
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
