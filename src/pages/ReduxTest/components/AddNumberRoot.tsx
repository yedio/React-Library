import React from 'react';
import styled from 'styled-components';
import AddNumber from './AddNumber';

export default function AddNumberRoot() {
  return (
    <Wrapper className="redux-test">
      <h1>Add Number Root</h1>
      <AddNumber />
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
