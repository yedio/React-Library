import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { increment, decrement } from '../../../redux/counter';

export default function AddNumber() {
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increment());
  };

  const onDecrease = () => {
    dispatch(decrement());
  };

  return (
    <Wrapper className="redux-test">
      <h1>Add Number</h1>
      <button type="button" onClick={onIncrease}>
        +
      </button>
      <button type="button" onClick={onDecrease}>
        -
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 10px;
    padding: 0 5px;
  }
`;
