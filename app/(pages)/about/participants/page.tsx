'use client';

import styled from 'styled-components';
import {
  FONT_WEIGHTS,
  PageWrapper,
  P,
  AuthP,
  LeftArrowIcon,
  IconLinkWrapper
} from '../../../styles';
import { TextLink } from '../page';
import { PlayIcon } from '../../../components/AudioPlayer/Controls';

const PersonWrapper = styled.div`
  margin: 50px 0;
  display: flex;
`;

const TextWrapper = styled.div`
  flex: 4;
  gap: 20px;
  display: flex;
  flex-direction: column;
`;

const RighTextLink = styled(TextLink)`
  display: flex;
  justify-content: flex-end;
  gap: 10px;

  svg {
    width: 24px;
    height: 24px;
  }
`;

export default function ParticipantsPage() {
  return (
    <PageWrapper>
      <IconLinkWrapper href="/about">
        <LeftArrowIcon />
        Back to about
      </IconLinkWrapper>
      <PersonWrapper>
        <AuthP style={{ flex: 1, fontWeight: FONT_WEIGHTS.BOLD }}>Lygia</AuthP>
        <TextWrapper>
          <P>
            Bio paragraph for Lygia. For me personally, I think, it’s more
            meaningful to my family and friends. Only because they know me best.
            I mean, I would like to share it with the world as far as, helping
            advocate, for others that are also dealing with chronic illnesses in
            particular long COVID. As well as validate their feelings and what
            they’re going through, because I know for myself, especially early
            with getting COVID, early on in the pandemic. I was ill with Covid
            in April of 2020. So it was during that first wave of, the pandemic,
            when, literally millions of people were dying throughout the world.
            There were no real precautions yet, a lot of confusion, and the
            vaccines were not developed yet.
          </P>
          <RighTextLink href="/">
            <PlayIcon />
            Listen to Lygia's story
          </RighTextLink>
        </TextWrapper>
      </PersonWrapper>
      <PersonWrapper>
        <AuthP style={{ flex: 1, fontWeight: FONT_WEIGHTS.BOLD }}>Athena</AuthP>
        <TextWrapper>
          <P>
            Bio paragraph for Athena. For me personally, I think, it’s more
            meaningful to my family and friends. Only because they know me best.
            I mean, I would like to share it with the world as far as, helping
            advocate, for others that are also dealing with chronic illnesses in
            particular long COVID. As well as validate their feelings and what
            they’re going through, because I know for myself, especially early
            with getting COVID, early on in the pandemic. I was ill with Covid
            in April of 2020. So it was during that first wave of, the pandemic,
            when, literally millions of people were dying throughout the world.
            There were no real precautions yet, a lot of confusion, and the
            vaccines were not developed yet.
          </P>
          <RighTextLink href="/">
            <PlayIcon />
            Listen to Athena's story
          </RighTextLink>
        </TextWrapper>
      </PersonWrapper>
    </PageWrapper>
  );
}
