import React, { useState } from 'react';
import styled from 'styled-components';
import {
  deleteCookie,
  getCookieValue,
  setCookie,
} from '../../utils/CookieControll';

export default function Cookie() {
  const [value, setValue] = useState<string>('');

  return (
    <Wrapper>
      <Title>
        <h1>Cookie Controll</h1>
      </Title>
      <CookieWrap>
        <button
          type="button"
          onClick={() => setCookie('__cookie', 'cookie_is_delicious', 3)}
        >
          Set Cookie
        </button>
        <button
          type="button"
          onClick={() => setValue(getCookieValue('__cookie'))}
        >
          Get Cookie
        </button>
        <button type="button" onClick={() => deleteCookie('__cookie')}>
          Delete Cookie
        </button>
      </CookieWrap>
      <CookieValue>Cookie Value 🌎 {value}</CookieValue>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  margin: 20px;
  h1 {
    font-size: 80px;
  }
`;

const CookieWrap = styled.div`
  display: flex;
  align-items: center;

  button {
    font-size: 14px;
    padding: 10px;
    margin: 0 10px;
  }
`;

const CookieValue = styled.div`
  margin: 30px;
  width: 400px;
  background-color: aliceblue;
  font-size: 20px;
  text-align: center;
`;
