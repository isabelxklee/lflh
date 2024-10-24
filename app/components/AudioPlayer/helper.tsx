export const formatTranscriptText = (text: string) => {
  const index = text.indexOf(':');
  const speaker = text.slice(0, index);
  const startRegex = /(\([0-9:]{5,8})/g;
  const endRegex = /([0-9:]{5,8}\))/g;
  const startTime = text.match(startRegex);
  const endTime = text.match(endRegex);

  let cleanStartTime = '';
  let cleanEndTime = '';
  let cleanText = '';

  if (startTime && endTime) {
    cleanStartTime = startTime[0].slice(1, startTime[0].length);
    cleanEndTime = endTime[0].slice(0, endTime[0].length - 1);
    const closingIndex = text.indexOf(startTime[0]);
    cleanText = text.slice(index + 2, closingIndex);
  } else {
    cleanText = text.slice(index + 2, text.length);
  }

  return {
    speaker: speaker,
    start: cleanStartTime,
    end: cleanEndTime,
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

export const formatTime = (time: number) => {
  if (time < 60) {
    const minutes = '00';
    const seconds = Math.floor(time).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    return `${minutes}:${seconds}`;
  }

  if (time > 60 && time < 3600) {
    const hours = '00';
    const minutes = Math.floor(time / 60);
    const formattedMinutes = minutes.toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    const seconds = Math.floor(time - minutes * 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    return `${hours}:${formattedMinutes}:${seconds}`;
  }

  if (time > 3600) {
    const hours = Math.round((time / 3600) * 100) / 100;
    const formattedHours = Math.floor(time / 3600);
    const minutes = (hours - formattedHours) * 60;
    const formattedMinutes = Math.floor(minutes).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });
    const seconds = time / 60 - Math.floor(time / 60);
    const formattedSeconds = Math.floor(seconds * 60).toLocaleString('en-US', {
      minimumIntegerDigits: 2,
      useGrouping: false
    });

    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }
};
