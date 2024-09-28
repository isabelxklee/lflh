'use client';

import styled from 'styled-components';
import { GRADIENT_COLORS } from '../globalStyles';
import { useCallback } from 'react';

interface GradientHeaderProps {
  setColor: (args0: any) => void;
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

const Theme = styled.div<{ $num: number }>`
  width: calc(1000px / 8);
  height: 200px;
  z-index: 2;
`;

const GradientHeader = ({ setColor }: GradientHeaderProps) => {
  const themes = [1, 2, 3, 4, 5, 6, 7, 8];

  const handleHover = useCallback((index: number) => {
    setColor(index);
  }, []);

  return (
    <>
      <ThemeContainer>
        {themes.map((index: number) => (
          <Theme
            key={index}
            $num={themes.length}
            onClick={() => handleHover(index)}
          />
        ))}
      </ThemeContainer>
      <GradientWrapper />
    </>
  );
};

export default GradientHeader;
