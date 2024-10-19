import styled from 'styled-components';
import { COLORS, SmallP } from '../../globalStyles';
import Player from './Player';
import { useState } from 'react';

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
  const [loadedDuration, setLoadedDuration] = useState<boolean>(false);
  const [loadedProgress, setLoadedProgress] = useState<boolean>(false);

  return (
    <AudioPlayerWrapper>
      <SmallP>{interview.title}</SmallP>
      {interview.audioFileURL && <Player />}
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
