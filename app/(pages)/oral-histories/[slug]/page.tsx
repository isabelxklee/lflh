'use client';

import styled from 'styled-components';
import { usePathname } from 'next/navigation';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

export default function InterviewPage() {
  const pathname = usePathname();
  console.log(pathname);
  return <Wrapper>{/* <p>{title}</p> */}</Wrapper>;
}
