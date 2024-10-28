import styled from 'styled-components';
import { PauseIcon, PlayIcon, TextButton } from '../../styles';
import { StyledP } from '.';
import { formatTime } from './helper';
import { ExcerptType } from '../../../sanity/types/types';

const Wrapper = styled.div`
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

const Button = styled.button`
  border: none;
  background: transparent;
  padding: 0;
`;

interface ControlsProps {
  setPlaying: (arg0: boolean) => void;
  setSelectedExcerpt: (arg0: boolean | ExcerptType) => void;
  selectedExcerpt: ExcerptType;
  trackProgress: number;
  duration: number;
  playing: boolean;
}

export default function Controls({
  setPlaying,
  selectedExcerpt,
  trackProgress,
  duration,
  playing,
  setSelectedExcerpt
}: ControlsProps) {
  const handleClick = () => {
    setSelectedExcerpt(false);
  };

  return (
    <Wrapper>
      <Primary>
        {playing ? (
          <Button onClick={() => setPlaying(false)}>
            <PauseIcon />
          </Button>
        ) : (
          <Button onClick={() => setPlaying(true)}>
            <PlayIcon />
          </Button>
        )}
        <StyledP>
          {formatTime(trackProgress)} / {formatTime(duration)}
        </StyledP>
      </Primary>
      <Secondary>
        {selectedExcerpt ? (
          <>
            <TextButton onClick={handleClick}>Close Excerpt</TextButton>
            <TextButton>Explore Theme</TextButton>
          </>
        ) : (
          <>
            <TextButton>Replay</TextButton>
            <TextButton>Share interview</TextButton>
            <TextButton>Next interview</TextButton>
          </>
        )}
      </Secondary>
    </Wrapper>
  );
}
