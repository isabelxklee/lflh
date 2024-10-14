'use client';

import styled from 'styled-components';
import { useParams } from 'next/navigation';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

export default function InterviewPage() {
  const params = useParams();
  console.log(params.slug);
  return <Wrapper>{/* <p>{title}</p> */}</Wrapper>;
}
