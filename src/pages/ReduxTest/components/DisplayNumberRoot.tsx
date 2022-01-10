import React from 'react';
import styled from 'styled-components';
import DisplayNumber from './DisplayNumber';

export default function DisplayNumberRoot() {
  return (
    <Wrapper className="redux-test">
      <h1>Display Number Root</h1>
      <DisplayNumber />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
