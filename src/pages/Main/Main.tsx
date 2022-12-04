import React from 'react';
import styled from 'styled-components';
import MainCard from '../../components/MainCard';
import { MAIN_LIST } from './DATA/MainData';

export default function Main() {
  return (
    <Wrapper>
      {MAIN_LIST.map((data, idx) => (
        <MainCard key={idx} data={data} />
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 150px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  place-items: center;
`;
