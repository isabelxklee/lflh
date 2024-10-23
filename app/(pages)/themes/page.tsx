'use client';

import { useState, useEffect } from 'react';
import { getSiteSettings } from '../../actions';
import { P } from '../../globalStyles';
import styled from 'styled-components';
import { ThemeType } from '../../../sanity/types/types';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

export default function Themes() {
  const [siteSettings, setSiteSettings] = useState<any[]>([]);
  const [themes, setThemes] = useState<ThemeType[]>([]);
  const text = siteSettings[0]?.themePageText;

  useEffect(() => {
    const fetchData = async () => {
      const siteSettings = await getSiteSettings();
      setSiteSettings(siteSettings);
    };

    fetchData();
  }, []);

  return (
    <Wrapper>
      <h1>Themes</h1>
      <P>{text}</P>
    </Wrapper>
  );
}
