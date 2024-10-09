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
