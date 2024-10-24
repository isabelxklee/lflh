import styled from 'styled-components';
import { COLORS, P, FONT_WEIGHTS } from '../../styles';
import { useEffect, useRef, useState } from 'react';
import { ExcerptType, InterviewType } from '../../../sanity/types/types';
import Waveform from './Waveform';
import Controls from './Controls';
import Excerpt from './Excerpt';

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
  padding: 30px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
`;

export const TimeStamp = styled(P)`
  font-size: 14px;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
`;

const ProgressBar = styled.input`
  margin: 30px 0;
  width: 100%;
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
          {excerpts &&
            excerpts.map((excerpt: ExcerptType, index: number) => (
              <Excerpt key={index} excerpt={excerpt} duration={duration} />
            ))}
          <Controls
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
