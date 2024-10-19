import styled from 'styled-components';
import { COLORS, H3, SmallP } from '../../globalStyles';
import Player from './Player';

const AudioPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: ${COLORS.GREY};
  width: 100%;
  right: 0;
`;

const WaveFormWrapper = styled.div`
  width: 80%;
  position: relative;
  margin: 0 auto;
`;

interface AudioPlayerProps {
  interview: any;
}

export default function AudioPlayer({ interview }: AudioPlayerProps) {
  return (
    <AudioPlayerWrapper>
      <SmallP>{interview.title}</SmallP>
      {interview.audioFileURL && <Player />}
    </AudioPlayerWrapper>
  );
}
