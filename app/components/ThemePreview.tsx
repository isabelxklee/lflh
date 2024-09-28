interface ThemePreviewProps {
  theme: any;
}

const ThemePreview = ({ theme }: ThemePreviewProps) => {
  return (
    <>
      <h2>{theme.title}</h2>
      <p>{theme.body}</p>
      <button>Play Interview</button>
      <button>Explore Theme</button>
    </>
  );
};

export default ThemePreview;
