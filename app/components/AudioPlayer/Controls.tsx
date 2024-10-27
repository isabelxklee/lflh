import { IoIosPlayCircle } from 'react-icons/io';
import { IoPauseCircleSharp } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { TextButton } from '../../styles';
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

const IconStyles = css`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

export const PlayIcon = styled(IoIosPlayCircle)`
  ${IconStyles}
`;

const PauseIcon = styled(IoPauseCircleSharp)`
  ${IconStyles}
`;

interface ControlsProps {
  setPlaying: (arg0: boolean) => void;
  setShowExcerpt: (arg0: boolean) => void;
  setSelectedExcerpt: (arg0: boolean | ExcerptType) => void;
  showExcerpt: boolean;
  trackProgress: number;
  duration: number;
  playing: boolean;
}

export default function Controls({
  setPlaying,
  setShowExcerpt,
  showExcerpt,
  trackProgress,
  duration,
  playing,
  setSelectedExcerpt
}: ControlsProps) {
  const handleClick = () => {
    setShowExcerpt(false);
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
        {showExcerpt ? (
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
