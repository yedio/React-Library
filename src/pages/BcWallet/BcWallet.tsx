import React, { useEffect, useState } from 'react';
import Caver from 'caver-js';
import styled from 'styled-components';

export default function BcWallet() {
  const [value, setValue] = useState<string>('');

  let result: string[] = [];
  const connectKaikas = async () => {
    try {
      const accounts = await window.klaytn.enable();
      result = accounts;

      const caver = new Caver(window.klaytn);
      const balance: any = await caver.klay.getBalance(accounts);

      console.log('caver', balance);
    } catch (error) {
      result = [''];
    }
    console.log('error', result);
  };

  useEffect(() => {
    connectKaikas();
  }, []);

  // kaikas에서 계정을 변경할 때 마다 내부의 함수가 실행됩니다.
  useEffect(() => {
    window.klaytn.on('accountsChanged', function (result: string[]) {
      console.log('hey', result);
    });
  });

  return (
    <Wrapper>
      <Title>
        <h1>C</h1>
      </Title>
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
