'use client';

import { useState, useEffect } from 'react';
import { getSiteSettings, getThemes } from '../../actions';
import { P } from '../../globalStyles';
import styled from 'styled-components';
import { ThemeType } from '../../../sanity/types/types';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

const ThemeWrapper = styled.div`
  margin-bottom: 32px;
`;

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
          <P>{theme.title}</P>
          {theme.subThemes.map((subTheme, index: number) => (
            <P key={index}>{subTheme.title}</P>
          ))}
        </ThemeWrapper>
      ))}
    </Wrapper>
  );
}
