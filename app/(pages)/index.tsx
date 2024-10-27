'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { P } from '../styles';
import { GradientHeader } from '../components/GradientHeader';
import styled from 'styled-components';
import ThemePreview from '../components/ThemePreview';
import logo from '../assets/LFLH-Logo-1.png';

import Header from '../components/Header';
import { SubThemeType, ThemeType } from '../../sanity/types/types';

interface HomeProps {
  themes: ThemeType[];
  subThemes: SubThemeType[];
  siteSettings: any;
}

const Wrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const TextWrapper = styled.div`
  padding: 100px 25%;
`;

const StyledH1 = styled.h1`
  width: fit-content;
  margin: 25% auto 15% auto;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 900px;
  height: 100%;
`;

export default function Home({ themes }: HomeProps) {
  const [theme, setTheme] = useState(themes[0]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 1);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Wrapper>
      <Header show={show} />
      <StyledH1>
        <StyledImage
          src={logo}
          priority={true}
          alt="Listening for the Long Haul Logo"
        />
      </StyledH1>
      <GradientHeader setTheme={setTheme} themes={themes} />
      <TextWrapper>
        <P>
          Hearing voices is one of the most powerful ways to experience oral
          history project of people living with Long COVID and associated
          conditions (pwLCAC). In this section of the exhibition we encourage
          you find a quiet space where you can listen to, and process, the audio
          clips from the interviews. Here you will hear original interviews, and
          also in the way the exhibition is organized, with one clip following
          the other and organized by theme. To keep this section accessible, we
          have included the transcript with each audio clip, so that you can
          read while you listen and listen while you read.
        </P>
      </TextWrapper>
      {theme && (
        <TextWrapper>
          <ThemePreview theme={theme} />
        </TextWrapper>
      )}
    </Wrapper>
  );
}
