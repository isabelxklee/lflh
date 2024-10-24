import WavesurferPlayer from '@wavesurfer/react';
import { useState } from 'react';

interface WaveformProps {
  audio: string;
}

export default function Waveform({ audio }: WaveformProps) {
  const [wavesurfer, setWavesurfer] = useState<any>();
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: any) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <>
      <WavesurferPlayer
        height={100}
        waveColor="violet"
        url={audio}
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />
      <button onClick={onPlayPause}>{isPlaying ? 'Pause' : 'Play'}</button>
    </>
  );
}
