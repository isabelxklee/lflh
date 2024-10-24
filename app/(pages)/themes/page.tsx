'use client';

import { useState, useEffect } from 'react';
import { getSiteSettings, getThemes } from '../../actions';
import { P, H4, COLORS, FONT_WEIGHTS, FONTS } from '../../styles';
import styled from 'styled-components';
import { ThemeType } from '../../../sanity/types/types';
import Link from 'next/link';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

const ThemeWrapper = styled.div`
  margin-bottom: 32px;
`;

const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: 18px;
  color: ${COLORS.BLACK};
  text-decoration: none;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`;

// write logic for rendering gradient as the left border

const UL = styled.ul`
  border-left: 2px solid black;
  list-style: none;
  padding-inline-start: 22px;
`;

const LI = styled.li``;

export default function Themes() {
  const [siteSettings, setSiteSettings] = useState<any[]>([]);
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const text = siteSettings[0]?.themePageText;

  useEffect(() => {
    const fetchData = async () => {
      const siteSettings = await getSiteSettings();
      const themes = await getThemes();
      setSiteSettings(siteSettings);
      setThemes(themes);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Themes</h1>
      <P style={{ marginBottom: '32px' }}>{text}</P>
      {themes.map((theme, index: number) => (
        <ThemeWrapper key={index}>
          <UL>
            <H4>{theme.title}</H4>
            {theme.subThemes.map((subTheme, index: number) => (
              <LI>
                <StyledLink key={index} href={`/themes/${subTheme.slug}`}>
                  {subTheme.title}
                </StyledLink>
              </LI>
            ))}
          </UL>
        </ThemeWrapper>
      ))}
    </Wrapper>
  );
}
