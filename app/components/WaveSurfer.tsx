import React, { useEffect, useRef } from 'react';
import WaveSurfer from 'wavesurfer.js';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  align-items: center;

  button {
    width: 40px;
    height: 40px;
    border: none;
    padding: 0;
    background-color: white;
  }
`;

const Waveform = ({ audio: string }) => {
  const containerRef = useRef<HTMLDivElement>();

  console.log(containerRef);

  useEffect(() => {
    const waveSurfer = WaveSurfer.create({
      container: containerRef.current,
      barWidth: 2,
      barHeight: 10,
      cursorWidth: 0
    });

    return () => {
      waveSurfer.destroy();
    };
  }, []);

  return (
    <Wrapper>
      <button>Hello world</button>
      <div ref={containerRef}></div>
    </Wrapper>
  );
};

export default Waveform;
