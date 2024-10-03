'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { GlobalWrapper, P } from '../globalStyles';
import { SubThemeType, ThemeType } from '../../sanity/sanity.utils';
import GradientHeader from '../components/GradientHeader';
import styled from 'styled-components';
import ThemePreview from '../components/ThemePreview';
import logo from '../assets/LFLH-Logo-1.png';
import Header from '../components/Header';

interface HomeProps {
  themes: ThemeType[];
  subThemes: SubThemeType[];
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
  margin-bottom: 200px;
  padding: 100px 25%;
`;

const StyledH1 = styled.h1`
  width: fit-content;
  margin-top: 25%;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 900px;
  height: 100%;
`;

export default function Home({ themes, subThemes }: HomeProps) {
  const [theme, setTheme] = useState({
    title: 'The Body',
    body: "I started questioning everything in my life. I realized—I got diagnosed with autism while during COVID and I started the unmasking process of just peeling back. 'Okay, I do this to please other people. I say these things to please other people, I say this to fit in' and really discovering who I was.",
    sort: 1
  });

  const themeData = [
    {
      title: 'The Body',
      body: "I started questioning everything in my life. I realized—I got diagnosed with autism while during COVID and I started the unmasking process of just peeling back. 'Okay, I do this to please other people. I say these things to please other people, I say this to fit in' and really discovering who I was.",
      sort: 1
    },
    {
      title: 'Community-Building',
      body: "I started questioning everything in my life. I realized—I got diagnosed with autism while during COVID and I started the unmasking process of just peeling back. 'Okay, I do this to please other people. I say these things to please other people, I say this to fit in' and really discovering who I was.",
      sort: 2
    },
    {
      title: 'Capitalism + Productivity',
      body: "I started questioning everything in my life. I realized—I got diagnosed with autism while during COVID and I started the unmasking process of just peeling back. 'Okay, I do this to please other people. I say these things to please other people, I say this to fit in' and really discovering who I was.",
      sort: 3
    },
    {
      title: 'Time',
      body: 'Time theme description project of people living with Long COVID and associated conditions (pwLCAC). In this section of the exhibition we encourage you find a quiet space where you can listen to, and process, the audio clips from the interviews. Here you will hear original interviews, and also in the way the exhibition is organized, with one clip following the other and organized by theme. To keep this section accessible, we have included the transcript with each audio clip, so that you can read while you listen and listen while you read.',
      sort: 4
    }
  ];

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
        <StyledImage src={logo} alt="Listening for the Long Haul Logo" />
      </StyledH1>
      <GradientHeader setTheme={setTheme} themes={themeData} />
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
      <TextWrapper>
        <ThemePreview theme={theme} />
      </TextWrapper>
    </Wrapper>
  );
}
