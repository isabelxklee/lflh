import styled from 'styled-components';
import { COLORS, SmallP } from '../../globalStyles';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

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

export default function AudioPlayer({ interview }: AudioPlayerProps) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [duration, setDuration] = useState<number>(0);
  const [loadedDuration, setLoadedDuration] = useState<boolean>(false);
  const [loadedProgress, setLoadedProgress] = useState<boolean>(false);
  const audioPlayerRef = useRef(new Audio(interview.audioFileURL));
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

  useEffect(() => {
    return () => {
      audioPlayerRef.current.pause();
      clearInterval(intervalRef.current);
    };
  }, []);

  return (
    <AudioPlayerWrapper>
      <SmallP>{interview.title}</SmallP>
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
}
