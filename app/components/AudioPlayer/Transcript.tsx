import { useState, useEffect } from 'react';
import { FONT_WEIGHTS, SmallP } from '../../styles';
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
  const [timeStamp, setTimeStamp] = useState<string>('');

  useEffect(() => {
    const obj = formatTranscriptText(text);
    setSpeaker(obj.speaker);
    setTimeStamp(obj.timestamp);
    setCleanText(obj.text);
  }, [text]);

  return (
    <TextWrapper>
      <SmallP style={{ flex: 1, fontWeight: FONT_WEIGHTS.BOLD }}>
        {speaker}
      </SmallP>
      <SmallP style={{ flex: 3 }}>{cleanText}</SmallP>
    </TextWrapper>
  );
}
