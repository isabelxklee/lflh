'use client';

import styled from 'styled-components';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getInterviews, getExcerpts } from '../../../actions';
import { H3 } from '../../../styles';
import AudioPlayer from '../../../components/AudioPlayer';
import Transcript from '../../../components/Transcript';
import { InterviewType } from '../../../../sanity/types/types';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

const TranscriptWrapper = styled.div`
  margin-top: 32px;
`;

export default function InterviewPage() {
  const [interview, setInterview] = useState<InterviewType>();
  const [excerpts, setExcerpts] = useState<any>();
  const params = useParams();

  useEffect(() => {
    const findInterviewAndExcerpts = async () => {
      const interviews = await getInterviews();
      const interview = interviews.find(
        (interview: InterviewType) => interview.slug.current == params.slug
      );
      setInterview(interview);

      const excerpts = await getExcerpts();
      const thisExcerpts = excerpts.filter(
        (e: any) => e.interview._id == interview._id
      );
      setExcerpts(thisExcerpts);
    };

    findInterviewAndExcerpts();
  }, []);

  return (
    <Wrapper>
      {interview && (
        <>
          <H3>{interview.title}</H3>
          <TranscriptWrapper>
            {interview.transcriptText.map((text: string, index: number) => (
              <Transcript key={index} text={text} />
            ))}
          </TranscriptWrapper>
          <AudioPlayer interview={interview} excerpts={excerpts} />
        </>
      )}
    </Wrapper>
  );
}
