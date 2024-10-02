import styled from 'styled-components';
import { H3, P, TextLink } from '../globalStyles';

interface ThemePreviewProps {
  theme: any;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const ThemePreview = ({ theme }: ThemePreviewProps) => {
  return (
    <Wrapper>
      <H3>{theme.title}</H3>
      <P>{theme.body}</P>
      <LinkWrapper>
        <TextLink href="/">Play Interview</TextLink>
        <TextLink href="/">Explore Theme</TextLink>
      </LinkWrapper>
    </Wrapper>
  );
};

export default ThemePreview;
