import { IoIosPlayCircle } from 'react-icons/io';
import { IoPauseCircleSharp } from 'react-icons/io5';
import styled, { css } from 'styled-components';
import { TextButton } from '../../styles';
import { TimeStamp } from '.';
import { formatTime } from './helper';

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

const PlayIcon = styled(IoIosPlayCircle)`
  ${IconStyles}
`;

const PauseIcon = styled(IoPauseCircleSharp)`
  ${IconStyles}
`;

interface ControlsProps {
  setPlaying: (arg0: boolean) => void;
  setShowExcerpt: (arg0: boolean) => void;
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
  playing
}: ControlsProps) {
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
        <TimeStamp>
          {formatTime(trackProgress)} / {formatTime(duration)}
        </TimeStamp>
      </Primary>
      <Secondary>
        {showExcerpt ? (
          <>
            <TextButton onClick={() => setShowExcerpt(false)}>
              Close Excerpt
            </TextButton>
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
