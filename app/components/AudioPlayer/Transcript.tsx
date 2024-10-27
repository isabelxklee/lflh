import { useState, useEffect } from 'react';
import { FONT_WEIGHTS, P } from '../../styles';
import { styled } from 'styled-components';
import { formatTranscriptText } from './helper';

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
  const [start, setStart] = useState<string>('');
  const [end, setEnd] = useState<string>('');

  useEffect(() => {
    const obj = formatTranscriptText(text);
    setSpeaker(obj.speaker);
    setStart(obj.start);
    setEnd(obj.end);
    setCleanText(obj.text);
  }, [text]);

  return (
    <TextWrapper>
      <P style={{ flex: 1, fontWeight: FONT_WEIGHTS.BOLD }}>{speaker}</P>
      <P style={{ flex: 3 }}>{cleanText}</P>
    </TextWrapper>
  );
}
