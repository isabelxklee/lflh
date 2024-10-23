'use client';

import styled from 'styled-components';
import { GRADIENT_COLORS } from '../styles';
import { ThemeType } from '../../sanity/types/types';

interface MiniGradientHeaderProps {
  themes: ThemeType[];
}

interface GradientHeaderProps extends MiniGradientHeaderProps {
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

export const GradientHeader = ({ themes, setTheme }: GradientHeaderProps) => {
  const handleClick = (theme: any) => {
    setTheme(theme);
  };

  return (
    <Gradient $clickable={true}>
      {themes.map((theme: any) => (
        <ThemeColor
          key={theme.sort}
          $num={themes.length}
          onClick={() => handleClick(theme)}
        />
      ))}
    </Gradient>
  );
};

export const MiniGradientHeader = ({ themes }: MiniGradientHeaderProps) => {
  return (
    <Gradient $clickable={false} $height="short">
      {themes.map((theme: any) => (
        <ThemeColor key={theme.sort} $num={themes.length} />
      ))}
    </Gradient>
  );
};
