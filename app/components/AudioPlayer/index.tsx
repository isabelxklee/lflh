import styled, { css } from 'styled-components';
import { COLORS, GRADIENT_COLORS, P, FONT_WEIGHTS } from '../../styles';
import { useEffect, useRef, useState } from 'react';
import { InterviewType } from '../../../sanity/types/types';
import { IoIosPlayCircle } from 'react-icons/io';
import { IoPauseCircleSharp } from 'react-icons/io5';
import Waveform from './Waveform';
import Controls from './Controls';

const Background = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100%;
  background: ${COLORS.GREY};
  display: flex;
  justify-content: center;
`;

const AudioPlayerWrapper = styled.div`
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1200px;
`;

export const TimeStamp = styled(P)`
  font-size: 18px;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`;

const ProgressBar = styled.input`
  margin: 30px 0;
  width: 100%;
`;

const Excerpt = styled.div<{ $width: number; $start: number }>`
  position: absolute;
  background: ${GRADIENT_COLORS.ORANGE};
  height: 8px;
  width: ${({ $width }) => `${$width}%`};
  left: ${({ $start }) => `${$start}%`};
  z-index: 10;
`;

const ExcerptWrapper = styled.div`
  top: -42px;
  position: relative;
`;

interface AudioPlayerProps {
  interview: InterviewType;
  excerpts: any;
}

export default function AudioPlayer({ interview, excerpts }: AudioPlayerProps) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);
  const [waveformWidth, setWaveformWidth] = useState<number>();

  const audioPlayerRef = useRef(new Audio(interview.audioFileURL));
  const intervalRef = useRef<any>();
  const inputRef = useRef<any>();
  const { duration } = audioPlayerRef.current;

  useEffect(() => {
    const handleResize = () => {
      setWaveformWidth(inputRef.current.clientWidth);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // refactor to be reusable
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

  const timeStampToSeconds = (ts: string) => {
    let hours,
      minutes,
      seconds,
      timeInSeconds = 0;
    const hourRegex = /((\d{2}):(\d{2}):(\d{2}))/g;
    const minuteRegex = /((\d{2}):(\d{2}))/g;

    // hh:mm:ss
    if (hourRegex.test(ts)) {
      hours = ts.slice(0, 2);
      minutes = ts.slice(3, 5);
      seconds = ts.slice(6, 8);
      timeInSeconds =
        parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
      // mm:ss
    } else if (minuteRegex.test(ts)) {
      minutes = ts.slice(0, 2);
      seconds = ts.slice(3, 5);
      timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds);
    }

    return timeInSeconds;
  };

  const percentageCalc = (ts: string) => {
    const seconds = timeStampToSeconds(ts);
    return Math.ceil((seconds / duration) * 100);
  };

  const barWidth = (excerpt: any) =>
    Math.ceil(
      percentageCalc(excerpt.endTime) - percentageCalc(excerpt.startTime)
    );

  return (
    <Background>
      <AudioPlayerWrapper>
        <div style={{ maxWidth: '1000px', width: '100%' }}>
          <TimeStamp>{interview.title}</TimeStamp>
          {waveformWidth && excerpts && (
            <Waveform
              pixelWidth={waveformWidth}
              excerpts={excerpts}
              duration={duration}
            />
          )}
          <ProgressBar
            type="range"
            value={trackProgress}
            ref={inputRef}
            list="values"
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            onChange={(event: any) => onScrub(event.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: trackStyling }}
          />
          <ExcerptWrapper>
            {excerpts &&
              excerpts.map((excerpt: any, index: number) => (
                <Excerpt
                  key={index}
                  $start={percentageCalc(excerpt.startTime)}
                  $width={barWidth(excerpt)}
                />
              ))}
          </ExcerptWrapper>
          <Controls
            formatTime={formatTime}
            setPlaying={setPlaying}
            trackProgress={trackProgress}
            duration={duration}
            playing={playing}
          />
        </div>
      </AudioPlayerWrapper>
    </Background>
  );
}
