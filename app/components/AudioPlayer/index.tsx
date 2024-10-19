import styled from 'styled-components';
import { COLORS, SmallP } from '../../globalStyles';
import { useEffect, useMemo, useRef, useState } from 'react';

const Background = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background: ${COLORS.GREY};
`;

const AudioPlayerWrapper = styled.div`
  padding: 20px 200px;
  display: flex;
  flex-direction: column;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

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

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%';

  const trackStyling = useMemo(() => {
    return `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`;
  }, []);

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current);
    audioPlayerRef.current.currentTime = value;
    setTrackProgress(audioPlayerRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!playing) {
      setPlaying(true);
    }
  };

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
    <Background>
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
        <Controls>
          <div>
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
          </div>
          <div>
            <button>Replay</button>
            <button>Share interview</button>
            <button>Next interview</button>
          </div>
        </Controls>
      </AudioPlayerWrapper>
    </Background>
  );
}
