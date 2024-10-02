import { H3, P } from '../globalStyles';

interface ThemePreviewProps {
  theme: any;
}

const ThemePreview = ({ theme }: ThemePreviewProps) => {
  return (
    <>
      <H3>{theme.title}</H3>
      <P>{theme.body}</P>
      <button>Play Interview</button>
      <button>Explore Theme</button>
    </>
  );
};

export default ThemePreview;
