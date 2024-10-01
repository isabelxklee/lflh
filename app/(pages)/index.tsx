'use client';

import Image from 'next/image';
import { useState } from 'react';
import { GlobalWrapper } from '../globalStyles';
import { SubThemeType, ThemeType } from '../../sanity/sanity.utils';
import GradientHeader from '../components/GradientHeader';
import styled from 'styled-components';
import ThemePreview from '../components/ThemePreview';

interface HomeProps {
  themes: ThemeType[];
  subThemes: SubThemeType[];
}

export default function Home({ themes, subThemes }: HomeProps) {
  const [theme, setTheme] = useState({
    title: 'The Body',
    body: "I started questioning everything in my life. I realized—I got diagnosed with autism while during COVID and I started the unmasking process of just peeling back. 'Okay, I do this to please other people. I say these things to please other people, I say this to fit in' and really discovering who I was.",
    sort: 1
  });

  const [showDefault, setShowDefault] = useState(true);

  return (
    <>
      {/* <Header /> */}
      <GradientHeader setTheme={setTheme} setShowDefault={setShowDefault} />
      <GlobalWrapper>
        <h1>
          <Image
            src="https://cdn.sanity.io/images/4569xi28/production/e455c2807b6797d8323fd68bf85284985fa3dbad-461x259.svg"
            height={600}
            width={600}
            alt="Listening for the Long Haul Logo"
          />
        </h1>
        <p>
          Hearing voices is one of the most powerful ways to experience oral
          history project of people living with Long COVID and associated
          conditions (pwLCAC). In this section of the exhibition we encourage
          you find a quiet space where you can listen to, and process, the audio
          clips from the interviews. Here you will hear original interviews, and
          also in the way the exhibition is organized, with one clip following
          the other and organized by theme. To keep this section accessible, we
          have included the transcript with each audio clip, so that you can
          read while you listen and listen while you read.
        </p>
        <ThemePreview theme={theme} />
      </GlobalWrapper>
    </>
  );
}
