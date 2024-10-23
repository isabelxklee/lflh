'use client';

import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { getSubThemes } from '../../../actions';
import { SubThemeType } from '../../../../sanity/types/types';
import { useParams } from 'next/navigation';

const Wrapper = styled.div`
  padding: 200px 25%;
  margin-bottom: 200px;
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

  return (
    <Wrapper>
      {subTheme && (
        <>
          <h1>{subTheme.title}</h1>
        </>
      )}
    </Wrapper>
  );
}
