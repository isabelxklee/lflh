import { useState, useEffect } from 'react';
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
  const [speaker, setSpeaker] = useState<string>('');
  const [cleanText, setCleanText] = useState<string>('');

  useEffect(() => {
    const index = text.indexOf(':');
    setSpeaker(text.slice(0, index));

    setCleanText(text.slice(index + 2, text.length));
  }, [text]);

  return (
    <TextWrapper>
      <P style={{ flex: 1, fontWeight: FONT_WEIGHTS.BOLD }}>{speaker}</P>
      <P style={{ flex: 3 }}>{cleanText}</P>
    </TextWrapper>
  );
}
