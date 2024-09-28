'use client';

import styled from 'styled-components';
import { GRADIENT_COLORS } from '../globalStyles';
import { useCallback } from 'react';

interface GradientHeaderProps {
  setTheme: (args0: any) => void;
  setShowDefault: (args0: any) => void;
}

const GradientWrapper = styled.div`
  background: linear-gradient(
    90deg,
    ${GRADIENT_COLORS.BLUE},
    ${GRADIENT_COLORS.DUSK},
    ${GRADIENT_COLORS.PURPLE},
    ${GRADIENT_COLORS.BLACK},
    ${GRADIENT_COLORS.GREEN},
    ${GRADIENT_COLORS.LIGHT_PURPLE},
    ${GRADIENT_COLORS.LIGHT_ORANGE},
    ${GRADIENT_COLORS.ORANGE}
  );
  height: 200px;
  width: 100dvw;
  cursor: pointer;
  position: absolute;
  top: 0;
`;

const ThemeContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const ThemeColor = styled.div<{ $num: number }>`
  width: calc(100% / 3);
  height: 200px;
  z-index: 2;
`;

const GradientHeader = ({ setTheme, setShowDefault }: GradientHeaderProps) => {
  const themes = [
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
    }
  ];

  const handleHover = useCallback((theme: any) => {
    setShowDefault(false);
    setTheme(theme);
  }, []);

  return (
    <>
      <ThemeContainer onMouseLeave={() => setShowDefault(true)}>
        {themes.map((theme: any) => (
          <ThemeColor
            key={theme.sort}
            $num={themes.length}
            onMouseEnter={() => handleHover(theme)}
          />
        ))}
      </ThemeContainer>
      <GradientWrapper />
    </>
  );
};

export default GradientHeader;
