import { useState, useCallback } from 'react';
import { FONT_WEIGHTS, P } from '../globalStyles';
import { styled } from 'styled-components';

interface TranscriptProps {
  text: string;
}

const TextWrapper = styled.div`
  margin-bottom: 32px;
  display: flex;
`;

export default function Transcript({ text }: TranscriptProps) {
  const getSpeaker = () => {
    const index = text.indexOf(':');
    const speaker = text.slice(0, index);
    return speaker;
  };

  console.log(getSpeaker());

  return (
    <TextWrapper>
      <P style={{ flex: 1, fontWeight: FONT_WEIGHTS.BOLD }}>{getSpeaker()}</P>
      <P style={{ flex: 3 }}>{text}</P>
    </TextWrapper>
  );
}
