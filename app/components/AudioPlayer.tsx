import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

const Controls = styled.div``;

function useAudioPlayer() {
  const [duration, setDuration] = useState<number | undefined>();
  const [curTime, setCurTime] = useState<number>(0);
  const [playing, setPlaying] = useState(false);
  const [clickedTime, setClickedTime] = useState<number | null>();

  useEffect(() => {
    const audio = document.getElementById('audio') as HTMLAudioElement;

    const setAudioData = () => {
      if (audio) {
        setDuration(audio.duration);
        setCurTime(audio.currentTime);
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

  return {
    clickedTime,
    curTime,
    duration,
    playing,
    setPlaying,
    setClickedTime
  };
}

const AudioPlayer = () => {
  const [playing, setPlaying] = useState<boolean>(false);
  const audioData = useAudioPlayer();
  console.log(audioData);

  return (
    <Wrapper>
      <audio>
        <source src="https://cdn.sanity.io/files/4569xi28/production/961494bdc0d6456a3a6ce8bb58feee65a9a5d055.mp3" />
      </audio>
      <Controls>
        {/* {playing ? (
          <Pause handleClick={() => setPlaying(false)} />
        ) : (
          <Play handleClick={() => setPlaying(true)} />
        )}
        <Bar
          curTime={curTime}
          duration={duration}
          onTimeUpdate={(time: number) => {
            setClickedTime(time);
            console.log(time);
          }}
        /> */}
      </Controls>
    </Wrapper>
  );
};

export default AudioPlayer;
