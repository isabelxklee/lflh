import { InterviewType } from '../../../sanity/types/types';
import { PageWrapper, StyledLink } from '../../styles';

export default function About() {
  return (
    <PageWrapper>
      {/* <h1>Oral Histories</h1> */}
      <InterviewWrapper>
        {interviews &&
          interviews.map((interview: InterviewType, index: number) => (
            <StyledLink key={index} href={`/oral-histories/${interview.slug}`}>
              {interview.title}
            </StyledLink>
          ))}
      </InterviewWrapper>
    </PageWrapper>
  );
}
