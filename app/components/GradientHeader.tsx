'use client';

import styled from 'styled-components';
import { GRADIENT_COLORS } from '../globalStyles';

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
`;

const GradientHeader = () => {
  return (
    <>
      <GradientWrapper />
    </>
  );
};

export default GradientHeader;
