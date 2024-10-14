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

export default function WaveForm({ audio }: any) {
  const containerRef = useRef<any>();

  console.log(audio);

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
      <div ref={containerRef}></div>
    </Wrapper>
  );
}
