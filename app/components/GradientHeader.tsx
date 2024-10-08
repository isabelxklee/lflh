'use client';

import styled from 'styled-components';
import { GRADIENT_COLORS } from '../globalStyles';
import { themeData } from '../data.js';

interface GradientHeaderProps {
  themes?: any;
  setTheme: (args0: any) => void;
}

const Gradient = styled.div<{ $clickable: boolean; $height?: string }>`
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
  height: ${({ $height }) => ($height === 'short' ? '125px' : '200px')};
  width: 100dvw;
  position: fixed;
  top: 0;
  display: flex;
  flex-direction: row;
  cursor: ${({ $clickable }) => ($clickable ? 'pointer' : 'default')};
`;

const ThemeColor = styled.div<{ $num: number }>`
  width: calc(100% / 3);
  height: 200px;
  z-index: 2;
`;

export const GradientHeader = ({ setTheme }: GradientHeaderProps) => {
  const handleClick = (theme: any) => {
    setTheme(theme);
  };

  return (
    <Gradient $clickable={true}>
      {themeData.map((theme: any) => (
        <ThemeColor
          key={theme.sort}
          $num={themeData.length}
          onClick={() => handleClick(theme)}
        />
      ))}
    </Gradient>
  );
};

export const MiniGradientHeader = () => {
  return (
    <Gradient $clickable={false} $height="short">
      {themeData.map((theme: any) => (
        <ThemeColor key={theme.sort} $num={themeData.length} />
      ))}
    </Gradient>
  );
};
