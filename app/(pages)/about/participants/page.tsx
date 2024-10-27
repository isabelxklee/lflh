'use client';

import styled from 'styled-components';
import { FONT_WEIGHTS, PageWrapper, P, StyledLink } from '../../../styles';

const TextWrapper = styled.div`
  margin: 50px 0 32px 0;
  display: flex;
`;

export default function ParticipantsPage() {
  return (
    <PageWrapper>
      <StyledLink href="/about">Back to about</StyledLink>
      <TextWrapper>
        <P style={{ flex: 1, fontWeight: FONT_WEIGHTS.BOLD }}>Lygia</P>
        <P style={{ flex: 3 }}>
          Bio paragraph for Lygia. For me personally, I think, it’s more
          meaningful to my family and friends. Only because they know me best. I
          mean, I would like to share it with the world as far as, helping
          advocate, for others that are also dealing with chronic illnesses in
          particular long COVID. As well as validate their feelings and what
          they’re going through, because I know for myself, especially early
          with getting COVID, early on in the pandemic. I was ill with Covid in
          April of 2020. So it was during that first wave of, the pandemic,
          when, literally millions of people were dying throughout the world.
          There were no real precautions yet, a lot of confusion, and the
          vaccines were not developed yet.{' '}
        </P>
      </TextWrapper>
    </PageWrapper>
  );
}
