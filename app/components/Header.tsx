import Link from 'next/link';
import styled from 'styled-components';

const Wrapper = styled.header`
  padding: 20px;
`;

const Header = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </Wrapper>
  );
};

export default Header;
