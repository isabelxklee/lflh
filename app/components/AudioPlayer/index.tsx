import styled from 'styled-components';
import { COLORS, SmallP } from '../../globalStyles';
import { useEffect, useRef, useState } from 'react';
import { InterviewType } from '../../../sanity/types/types';

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

const Primary = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Secondary = styled.div`
  display: flex;
  gap: 20px;
`;

interface AudioPlayerProps {
  interview: InterviewType;
  excerpts: any;
}

export default function AudioPlayer({ interview, excerpts }: AudioPlayerProps) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);

  const audioPlayerRef = useRef(new Audio(interview.audioFileURL));
  const intervalRef = useRef<any>();
  const { duration } = audioPlayerRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%';

  const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioPlayerRef.current.ended) {
        // do something
      } else {
        setTrackProgress(audioPlayerRef.current.currentTime);
      }
    }, 1000);
  };

  const onScrub = (value: any) => {
    clearInterval(intervalRef.current);
    audioPlayerRef.current.currentTime = value;
    setTrackProgress(audioPlayerRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!playing) {
      setPlaying(true);
    }
    startTimer();
  };

  const formatTime = (time: number) => {
    if (time < 60) {
      const minutes = '00';
      const seconds = Math.floor(time).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      return `${minutes}:${seconds}`;
    }

    if (time > 60 && time < 3600) {
      const hours = '00';
      const minutes = Math.floor(time / 60);
      const formattedMinutes = minutes.toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      const seconds = Math.floor(time - minutes * 60).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      return `${hours}:${formattedMinutes}:${seconds}`;
    }

    if (time > 3600) {
      const hours = Math.round((time / 3600) * 100) / 100;
      const formattedHours = Math.floor(time / 3600);
      const minutes = (hours - formattedHours) * 60;
      const formattedMinutes = Math.floor(minutes).toLocaleString('en-US', {
        minimumIntegerDigits: 2,
        useGrouping: false
      });
      const seconds = time / 60 - Math.floor(time / 60);
      const formattedSeconds = Math.floor(seconds * 60).toLocaleString(
        'en-US',
        {
          minimumIntegerDigits: 2,
          useGrouping: false
        }
      );

      return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
    }
  };

  useEffect(() => {
    if (playing) {
      audioPlayerRef.current.play();
      startTimer();
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

  console.log(excerpts);

  return (
    <Background>
      <AudioPlayerWrapper>
        <SmallP>{interview.title}</SmallP>
        <input
          type="range"
          value={trackProgress}
          list="values"
          step="1"
          min="0"
          max={duration && `${duration}`}
          onChange={(event: any) => onScrub(event.target.value)}
          onMouseUp={onScrubEnd}
          onKeyUp={onScrubEnd}
          style={{ background: trackStyling }}
        />
        <datalist id="values">
          <option value="0" label="very cold!"></option>
          <option value="5" label="cool"></option>
          <option value="10" label="medium"></option>
          <option value="15" label="getting warm!"></option>
          <option value="35" label="hot!"></option>
        </datalist>
        <Controls>
          <Primary>
            {playing ? (
              <button onClick={() => setPlaying(false)}>Pause</button>
            ) : (
              <button onClick={() => setPlaying(true)}>Play</button>
            )}
            <p>
              {formatTime(trackProgress)} / {formatTime(duration)}
            </p>
          </Primary>
          <Secondary>
            <button>Replay</button>
            <button>Share interview</button>
            <button>Next interview</button>
          </Secondary>
        </Controls>
      </AudioPlayerWrapper>
    </Background>
  );
}
