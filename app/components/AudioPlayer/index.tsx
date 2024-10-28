import styled from 'styled-components';
import { COLORS, FONT_WEIGHTS, AuthP } from '../../styles';
import { useEffect, useRef, useState } from 'react';
import { ExcerptType, InterviewType } from '../../../sanity/types/types';
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
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
`;

export const StyledP = styled(AuthP)`
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 18px;
`;

interface AudioPlayerProps {
  interview: InterviewType;
  excerpts: ExcerptType[];
  setShowExcerpt: (arg0: boolean) => void;
  showExcerpt: boolean;
  setSelectedExcerpt: (arg0: boolean | ExcerptType) => void;
  selectedExcerpt: any;
}

export default function AudioPlayer({
  interview,
  excerpts,
  setShowExcerpt,
  showExcerpt,
  setSelectedExcerpt,
  selectedExcerpt
}: AudioPlayerProps) {
  const [playing, setPlaying] = useState<boolean>(false);
  const [trackProgress, setTrackProgress] = useState<number>(0);

  const audioPlayerRef = useRef(new Audio(interview.audioFileURL));
  const intervalRef = useRef<any>();
  const titleRef = useRef<any>();
  const { duration } = audioPlayerRef.current;

  const startTimer = () => {
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioPlayerRef.current.ended) {
        // write some functionality for when the track is finished
      } else {
        setTrackProgress(audioPlayerRef.current.currentTime);
      }
    }, 1000);
  };

  const handleWaveformClick = (num: number, numBars: number) => {
    const value = (num / numBars) * duration;
    clearInterval(intervalRef.current);
    audioPlayerRef.current.currentTime = value;
    setTrackProgress(value);
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

  // pass this down to waveform
  const handleClick = (excerpt: ExcerptType) => {
    setShowExcerpt(true);
    setSelectedExcerpt(excerpt);
  };

  return (
    <Background>
      <AudioPlayerWrapper>
        <div style={{ maxWidth: '1000px', width: '100%' }}>
          <StyledP ref={titleRef}>
            {showExcerpt
              ? `${selectedExcerpt.theme.title}: ${selectedExcerpt.subTheme.title}`
              : interview.title}
          </StyledP>
          {excerpts && (
            <Waveform
              excerpts={excerpts}
              duration={duration}
              progress={trackProgress}
              handleWaveformClick={handleWaveformClick}
            />
          )}
          <Controls
            setPlaying={setPlaying}
            trackProgress={trackProgress}
            duration={duration}
            playing={playing}
            showExcerpt={showExcerpt}
            setShowExcerpt={setShowExcerpt}
            setSelectedExcerpt={setSelectedExcerpt}
          />
        </div>
      </AudioPlayerWrapper>
    </Background>
  );
}
