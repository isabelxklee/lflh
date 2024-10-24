export const formatTime = (text: string) => {
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

export const timeStampToSeconds = (ts: string) => {
  let hours,
    minutes,
    seconds,
    timeInSeconds = 0;
  const hourRegex = /((\d{2}):(\d{2}):(\d{2}))/g;
  const minuteRegex = /((\d{2}):(\d{2}))/g;

  // hh:mm:ss
  if (hourRegex.test(ts)) {
    hours = ts.slice(0, 2);
    minutes = ts.slice(3, 5);
    seconds = ts.slice(6, 8);
    timeInSeconds =
      parseInt(hours) * 3600 + parseInt(minutes) * 60 + parseInt(seconds);
    // mm:ss
  } else if (minuteRegex.test(ts)) {
    minutes = ts.slice(0, 2);
    seconds = ts.slice(3, 5);
    timeInSeconds = parseInt(minutes) * 60 + parseInt(seconds);
  }

  return timeInSeconds;
};
