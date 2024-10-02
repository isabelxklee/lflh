import { H3, P, TextLink } from '../globalStyles';

interface ThemePreviewProps {
  theme: any;
}

const ThemePreview = ({ theme }: ThemePreviewProps) => {
  return (
    <>
      <H3>{theme.title}</H3>
      <P>{theme.body}</P>
      <TextLink href="/">Play Interview</TextLink>
      <TextLink href="/">Explore Theme</TextLink>
    </>
  );
};

export default ThemePreview;
