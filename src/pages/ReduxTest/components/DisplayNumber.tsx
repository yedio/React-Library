import React, { useState } from 'react';
import styled from 'styled-components';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux';

export default function DisplayNumber() {
  const num = useSelector((store: RootState) => store.counter);

  return (
    <Wrapper className="redux-test">
      <h1>Display Number</h1>
      <p>{num}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    display: block;
    color: black;
    font-size: 20px;
    font-weight: bold;
  }
`;
