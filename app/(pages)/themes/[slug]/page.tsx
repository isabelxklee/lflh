'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSubThemes } from '../../../actions';
import { SubThemeType } from '../../../../sanity/types/types';
import { useParams } from 'next/navigation';
import {
  H4,
  IconLinkWrapper,
  LeftArrowIcon,
  P,
  PageWrapper
} from '../../../styles';

const Wrapper = styled(PageWrapper)`
  margin-bottom: 200px;
`;

const SubThemeWrapper = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default function SubThemePage() {
  const [subTheme, setSubTheme] = useState<SubThemeType>();
  const params = useParams();

  useEffect(() => {
    const findSubTheme = async () => {
      const subThemes = await getSubThemes();
      const subTheme = subThemes.find(
        (subTheme: SubThemeType) => subTheme.slug == params.slug
      );
      setSubTheme(subTheme);
    };

    findSubTheme();
  }, []);

  // find all excerpts related to this subtheme
  // and render them as clickable objects
  // that navigates to the interview page
  // with the selected excerpt already in focus

  return (
    <Wrapper>
      <IconLinkWrapper href="/themes">
        <LeftArrowIcon />
        Back to all themes
      </IconLinkWrapper>
      {subTheme && (
        <SubThemeWrapper>
          <H4>
            {subTheme.theme.title}: {subTheme.title}
          </H4>
          <P>{subTheme.theme.description}</P>
        </SubThemeWrapper>
      )}
    </Wrapper>
  );
}
