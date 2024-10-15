'use client';

import styled from 'styled-components';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getInterviews } from '../../../actions';
import { COLORS, FONT_WEIGHTS, H3, SmallP } from '../../../globalStyles';
import WaveForm from '../../../components/WaveForm';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
`;

const AudioPlayerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  background: ${COLORS.GREY};
  width: 100%;
  right: 0;
`;

const WaveFormWrapper = styled.div`
  width: 80%;
  position: relative;
  margin: 0 auto;
`;

export default function InterviewPage() {
  const [interview, setInterview] = useState<any>();
  const params = useParams();

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

  console.log(interview);

  return (
    <Wrapper>
      {interview && (
        <>
          <H3>{interview.title}</H3>
          <AudioPlayerWrapper>
            <SmallP>{interview.title}</SmallP>
            <WaveFormWrapper>
              <WaveForm audio={interview.audio} />
            </WaveFormWrapper>
          </AudioPlayerWrapper>
        </>
      )}
    </Wrapper>
  );
}
