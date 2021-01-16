import Layout from '../components/Layout';
import React from 'react';
import styled from 'styled-components';
import {TagsSection} from './Money/TagsSection';
import {Category} from './Money/CategorySection';
import {NoteSection} from './Money/NoteSection';
import {NumberPad} from './Money/NumberPadSection/NumberPadSection';

const MyLayout = styled(Layout)`
  display:flex;
  flex-direction: column;
`
function Money() {
  return (
    <MyLayout>
      <TagsSection>
      </TagsSection>
      <NoteSection></NoteSection>
      <Category></Category>
      <NumberPad></NumberPad>
    </MyLayout>
  );
}

export default Money;
