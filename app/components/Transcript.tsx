import { useCallback } from 'react';
import { P } from '../globalStyles';
import { styled } from 'styled-components';

interface TranscriptProps {
  text: string;
}

const TextWrapper = styled.div`
  margin-bottom: 32px;
`;

export default function Transcript({ text }: TranscriptProps) {
  return (
    <TextWrapper>
      <P>{text}</P>
    </TextWrapper>
  );
}
