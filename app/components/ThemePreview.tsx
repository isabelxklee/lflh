import styled from 'styled-components';
import { H3, P, StyledLink } from '../globalStyles';

interface ThemePreviewProps {
  theme: any;
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  margin-bottom: 200px;
`;

const LinkWrapper = styled.div`
  display: flex;
  gap: 40px;
`;

const ThemePreview = ({ theme }: ThemePreviewProps) => {
  return (
    <Wrapper>
      <H3>{theme.title}</H3>
      <P>{theme.description}</P>
      <LinkWrapper>
        <StyledLink href="/">Play Interview</StyledLink>
        <StyledLink href="/">Explore Theme</StyledLink>
      </LinkWrapper>
    </Wrapper>
  );
};

export default ThemePreview;
