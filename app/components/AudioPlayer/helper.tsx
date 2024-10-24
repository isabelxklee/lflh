interface formatTimeProps {
  text: string;
}

export const formatTime = ({ text }: formatTimeProps) => {
  const index = text.indexOf(':');
  const speaker = text.slice(0, index);
  const regex = /(\([0-9:]{5,8})/g;
  const ts = text.match(regex);
  let cleanTs = '';
  let cleanText = '';

  if (ts) {
    cleanTs = ts[0].slice(1, ts[0].length);
    const closingIndex = text.indexOf(ts[0]);
    cleanText = text.slice(index + 2, closingIndex);
  } else {
    cleanText = text.slice(index + 2, text.length);
  }

  return {
    speaker: speaker,
    timestamp: cleanTs,
    text: cleanText
  };
};
