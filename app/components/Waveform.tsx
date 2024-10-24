import styled from 'styled-components';
import { COLORS } from '../styles';

const Wrapper = styled.div``;

const Bar = styled.div<{ $height: string }>`
  background: ${COLORS.BLACK};
  height: ${({ $height }) => $height};
  width: 4px;
  border-radius: 2px;
`;

export default function Waveform() {
  return (
    <Wrapper>
      <Bar $height="20px" />
      <Bar $height="10px" />
      <Bar $height="30px" />
      <Bar $height="10px" />
    </Wrapper>
  );
}
