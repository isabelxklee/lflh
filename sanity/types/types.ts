export type ThemeType = {
  _id: string;
  title: string;
  sort: number;
  description: string;
  subThemes: any[];
  colorTitle: string;
  colorHex: string;
};

export type SubThemeType = {
  _id: string;
  title: string;
  slug: string;
  theme: ThemeType;
  sort: number;
};

export type InterviewType = {
  _id: string;
  title: string;
  audioFile: any;
  audioFileURL: string;
  transcript: string;
  transcriptText: string[];
  slug: string;
};

export type ExcerptType = {
  _id: string;
  title: string;
  transcriptText: string;
  subTheme: any;
  interview: any;
  theme: any;
  colorTitle: string;
  colorHex: string;
};
