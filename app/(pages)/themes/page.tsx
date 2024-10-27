'use client';

import { useState, useEffect } from 'react';
import { getSiteSettings, getThemes } from '../../actions';
import {
  P,
  H4,
  COLORS,
  FONT_WEIGHTS,
  FONTS,
  GRADIENT_COLORS
} from '../../styles';
import styled from 'styled-components';
import { ThemeType } from '../../../sanity/types/types';
import Link from 'next/link';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

const ThemeWrapper = styled.div`
  margin-bottom: 32px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const StyledLink = styled(Link)`
  font-family: ${FONTS.AUTH_SANS}, sans-serif;
  font-weight: ${FONT_WEIGHTS.MEDIUM};
  font-size: 22px;
  color: ${COLORS.BLACK};
  text-decoration: none;
  margin: 0;

  &:hover {
    text-decoration: underline;
  }
`;

// write logic for rendering gradient as the left border

const VerticalGradient = styled.div`
  width: 4px;
  background: linear-gradient(
    0deg,
    ${GRADIENT_COLORS.BLUE},
    ${GRADIENT_COLORS.DUSK},
    ${GRADIENT_COLORS.PURPLE},
    ${GRADIENT_COLORS.BLACK},
    ${GRADIENT_COLORS.GREEN},
    ${GRADIENT_COLORS.LIGHT_PURPLE},
    ${GRADIENT_COLORS.LIGHT_ORANGE},
    ${GRADIENT_COLORS.ORANGE}
  );
`;

const VerticalWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

const UL = styled.ul`
  list-style: none;
  padding-inline-start: 22px;
  margin: 0;
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
      {/* <h1>Themes</h1> */}
      <P style={{ marginBottom: '32px' }}>{text}</P>
      <VerticalWrapper>
        <VerticalGradient />
        <div>
          {themes.map((theme, index: number) => (
            <ThemeWrapper key={index}>
              <UL>
                <H4>{theme.title}</H4>
                {theme.subThemes.map((subTheme, index: number) => (
                  <LI key={index}>
                    <StyledLink href={`/themes/${subTheme.slug}`}>
                      {subTheme.title}
                    </StyledLink>
                  </LI>
                ))}
              </UL>
            </ThemeWrapper>
          ))}
        </div>
      </VerticalWrapper>
    </Wrapper>
  );
}
