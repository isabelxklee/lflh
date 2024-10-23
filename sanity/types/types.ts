export type ThemeType = {
  _id: string;
  title: string;
  sort: number;
  description: string;
};

export type SubThemeType = {
  _id: string;
  title: string;
  sort: number;
  themeName: string;
};

export type InterviewType = {
  _id: string;
  title: string;
  audioFile: any;
  audioFileURL: string;
  transcript: string;
  transcriptText: string[];
  slug: {
    current: string;
  };
};

export type ExcerptType = {
  _id: string;
  title: string;
  startTime: string;
  endTime: string;
  subTheme: any;
  interview: any;
};
