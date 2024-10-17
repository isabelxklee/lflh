import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
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

const BarWrapper = styled.div`
  user-select: none;
  width: 100%;
  display: flex;
  align-items: center;

  .bar__time {
    color: white;
    font-size: 16px;
  }

  .bar__progress {
    flex: 1;
    border-radius: 5px;
    margin: 0 20px;
    height: 10px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .bar__progress__knob {
      position: relative;
      height: 16px;
      width: 16px;
      border: 1.5px solid white;
      border-radius: 50%;
      background-color: orange;
    }
  }
`;

interface BarProps {
  duration: number;
  curTime: number;
  onTimeUpdate: (arg0: any) => void;
}

const Bar = ({ duration, curTime, onTimeUpdate }: BarProps) => {
  const curPercentage = (curTime / duration) * 100;

  const calcClickedTime = (event: any) => {
    const clickPositionInPage = event.pageX;
    const bar = document.querySelector('.bar__progress');
    const barStart = bar.getBoundingClientRect().left + window.scrollX;
    const barWidth = bar.offsetWidth;
    const clickPositionInBar = clickPositionInPage - barStart;
    const timePerPixel = duration / barWidth;
    return timePerPixel * clickPositionInBar;
  };

  const handleTimeDrag = (event: any) => {
    onTimeUpdate(calcClickedTime(event));

    const updateTimeOnMove = (event: any) => {
      onTimeUpdate(calcClickedTime(event));
    };

    document.addEventListener('mousemove', updateTimeOnMove);

    document.addEventListener('mouseup', () => {
      document.removeEventListener('mousemove', updateTimeOnMove);
    });
  };

  return (
    <BarWrapper>
      <span className="bar__time">
        {
          //   formatDuration(curTime)
          curTime
        }
      </span>
      <div
        className="bar__progress"
        style={{
          background: `linear-gradient(to right, orange ${curPercentage}%, white 0)`
        }}
        onMouseDown={e => handleTimeDrag(e)}
      >
        <span
          className="bar__progress__knob"
          style={{ left: `${curPercentage - 2}%` }}
        />
      </div>
      <span className="bar__time">
        {
          //   formatDuration(duration)
          duration
        }
      </span>
    </BarWrapper>
  );
};

function AudioPlayer() {
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
        <Bar
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

export default AudioPlayer;
