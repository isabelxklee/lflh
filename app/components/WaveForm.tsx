import React, { useEffect, useRef, useState } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import { COLORS } from '../globalStyles';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 30px 1fr;
  align-items: center;

  button {
    width: 30px;
    height: 30px;
    border: none;
    padding: 0;
    background-color: ${COLORS.GREY};
  }
`;

const StyledPauseIcon = styled(FaPauseCircle)`
  background-color: ${COLORS.GREY};
`;

const StyledPlayIcon = styled(FaPlayCircle)`
  background-color: ${COLORS.GREY};
`;

export default function WaveForm({ audio }: any) {
  const containerRef = useRef<any>();
  const waveSurferRef = useRef<any>({
    isPlaying: () => false
  });
  const [isPlaying, toggleIsPlaying] = useState(false);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      barWidth: 3,
      cursorWidth: 0
    });

    waveSurfer.load(audio);
    waveSurfer.on('ready', () => {
      waveSurferRef.current = waveSurfer;
    });

    return () => {
      waveSurfer.destroy();
    };
  }, [audio]);

  return (
    <Wrapper>
      <button
        onClick={() => {
          waveSurferRef.current.playPause();
          toggleIsPlaying(waveSurferRef.current.isPlaying());
        }}
        type="button"
      >
        {isPlaying ? (
          <StyledPauseIcon size="30px" />
        ) : (
          <StyledPlayIcon size="30px" />
        )}
      </button>
      <div ref={containerRef}></div>
    </Wrapper>
  );
}
