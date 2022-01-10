import React from 'react';
import styled from 'styled-components';
import AddNumberRoot from './components/AddNumberRoot';
import DisplayNumberRoot from './components/DisplayNumberRoot';

export default function ReduxTest() {
  return (
    <Wrapper className="redux-test">
      <h1>ReduxTest</h1>
      <AddNumberRoot />
      <DisplayNumberRoot />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 30px;
  }
`;
