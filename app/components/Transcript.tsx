import { useCallback } from 'react';
import { P } from '../globalStyles';

interface TranscriptProps {
  text: string;
}

export default function Transcript({ text }: any) {
  return (
    <>
      <P>{text}</P>
    </>
  );
}
