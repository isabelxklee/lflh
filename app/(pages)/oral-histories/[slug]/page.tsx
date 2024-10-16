'use client';

import styled from 'styled-components';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getInterviews } from '../../../actions';
import { H3 } from '../../../globalStyles';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

export default function InterviewPage() {
  const [interview, setInterview] = useState<any>();
  const params = useParams();

  console.log(interview);

  useEffect(() => {
    const findInterview = async () => {
      const interviews = await getInterviews();
      const interview = interviews.find(
        (interview: any) => interview.slug.current == params.slug
      );
      setInterview(interview);
    };

    findInterview();
  }, []);

  return <Wrapper>{interview && <H3>{interview.title}</H3>}</Wrapper>;
}
