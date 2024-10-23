'use client';

import { useState, useEffect } from 'react';
import { getSiteSettings, getThemes } from '../../actions';
import { P, H3 } from '../../styles';
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
          <H3>{theme.title}</H3>
          {theme.subThemes.map((subTheme, index: number) => (
            <Link key={index} href={`/themes/${subTheme.slug}`}>
              {subTheme.title}
            </Link>
          ))}
        </ThemeWrapper>
      ))}
    </Wrapper>
  );
}
