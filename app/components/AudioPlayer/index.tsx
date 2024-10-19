import styled from 'styled-components';
import { COLORS, SmallP } from '../../globalStyles';
import Player from './Player';
import { forwardRef, useEffect, useRef, useState } from 'react';

const AudioPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: ${COLORS.GREY};
  width: 100%;
  right: 0;
`;

// const WaveFormWrapper = styled.div`
//   width: 80%;
//   position: relative;
//   margin: 0 auto;
// `;

interface AudioPlayerProps {
  interview: any;
}

const AudioPlayer = forwardRef(function AudioPlayer(
  { interview }: AudioPlayerProps,
  ref
) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [loadedDuration, setLoadedDuration] = useState<boolean>(false);
  const [loadedProgress, setLoadedProgress] = useState<boolean>(false);
  const audioPlayerRef = useRef(new Audio(interview.audioFileURL));

  const formatTime = (time: number) => {
    if (time < 60) {
      const minutes = '00';
      const seconds = Math.floor(time).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
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

  return (
    <AudioPlayerWrapper>
      <SmallP>{interview.title}</SmallP>
      <Player duration={duration} trackProgress={trackProgress} ref={ref} />
      {playing ? (
        <button onClick={() => setPlaying(false)}>Pause</button>
      ) : (
        <button onClick={() => setPlaying(true)}>Play</button>
      )}
      {loadedDuration && (
        <p>
          {formatTime(trackProgress)} / {formatTime(duration)}
        </p>
      )}
      <>
        <button>Replay</button>
        <button>Share interview</button>
        <button>Next interview</button>
      </>
    </AudioPlayerWrapper>
  );
});
