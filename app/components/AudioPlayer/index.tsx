import { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';
import ProgressBar from './ProgressBar';

const Wrapper = styled.div`
  /* display: flex;
  justify-content: space-between;
  align-items: center; */
  padding: 20px 0;
`;

const Controls = styled.div``;

// function useAudioPlayer() {
//   const [duration, setDuration] = useState<number | undefined>();
//   const [curTime, setCurTime] = useState<number>(0);
//   const [playing, setPlaying] = useState(false);
//   const [clickedTime, setClickedTime] = useState<number | null>();

//   useEffect(() => {
//     const audio = document.getElementsByTagName(
//       'audio'
//     ) as HTMLCollectionOf<HTMLAudioElement>;

//     const setAudioData = () => {
//       if (audio) {
//         setDuration(audio.duration);
//         setCurTime(audio.currentTime);
//       }
//     };

//     const setAudioTime = () => {
//       setCurTime(audio.currentTime);
//       console.log('audio.currentTime', audio.currentTime);
//     };

//     audio.addEventListener('loadeddata', setAudioData);

//     audio.addEventListener('timeupdate', setAudioTime);

//     playing ? audio.play() : audio.pause();

//     if (clickedTime && clickedTime !== curTime) {
//       audio.currentTime = clickedTime;
//       setClickedTime(null);
//     }

//     return () => {
//       audio.removeEventListener('loadeddata', setAudioData);
//       audio.removeEventListener('timeupdate', setAudioTime);
//     };
//   }, [clickedTime, playing, curTime]);

//   return {
//     clickedTime,
//     curTime,
//     duration,
//     playing,
//     setPlaying,
//     setClickedTime
//   };
// }

export default function AudioPlayer() {
  // const { curTime, duration, playing, setPlaying, setClickedTime } =
  //   useAudioPlayer();
  const [duration, setDuration] = useState<number>(100);
  const [curTime, setCurTime] = useState<number>(0);
  const [clickedTime, setClickedTime] = useState<number | null>();
  const [playing, setPlaying] = useState<boolean>(false);

  return (
    <Wrapper>
      <audio>
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
          onTimeUpdate={(time: number) => {
            setClickedTime(time);
          }}
        />
      </Controls>
    </Wrapper>
  );
}
