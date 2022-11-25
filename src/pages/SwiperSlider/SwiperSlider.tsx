import React from 'react';
import styled from 'styled-components';
import SwiperEvent from './components/SwiperEvent';
import SwiperEventMobile from './components/SwiperEventMobile';

export default function SwiperSlider() {
  return (
    <Wrapper>
      {/* <SwiperEvent /> */}
      <SwiperEventMobile />
      <Sec01 />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;
const Sec01 = styled.div`
  height: 300px;
`;
