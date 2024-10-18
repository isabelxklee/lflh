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
  const [duration, setDuration] = useState<number>(100);
  const [curTime, setCurTime] = useState<number>(0);
  const [clickedTime, setClickedTime] = useState<number>(0);
  const [playing, setPlaying] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const setAudioData = () => {
      if (audioRef) {
        setDuration(audioRef.duration);
        setCurTime(audioRef.currentTime);
      }
    };

    const setAudioTime = () => {
      setCurTime(audio.currentTime);
      console.log('audio.currentTime', audio.currentTime);
    };

    audio.addEventListener('loadeddata', setAudioData);

    audio.addEventListener('timeupdate', setAudioTime);

    playing ? audio.play() : audio.pause();

    if (clickedTime && clickedTime !== curTime) {
      audio.currentTime = clickedTime;
      setClickedTime(null);
    }

    return () => {
      audio.removeEventListener('loadeddata', setAudioData);
      audio.removeEventListener('timeupdate', setAudioTime);
    };
  }, [clickedTime, playing, curTime]);

  const handleClick = (time: number) => {
    setClickedTime(time);
  };

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
          curTime={curTime}
          duration={duration}
          clickedTime={clickedTime}
          handleClick={handleClick}
        />
      </Controls>
    </Wrapper>
  );
}
