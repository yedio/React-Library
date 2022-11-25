import React from 'react';
import styled from 'styled-components';
import SwiperCard from './components/SwiperCatd';
import SwiperEvent from './components/SwiperEvent';
import SwiperEventMobile from './components/SwiperEventMobile';

export default function SwiperSlider() {
  return (
    <Wrapper>
      <SwiperEvent />
      <Section />
      <SwiperEventMobile />
      <Section />
      <Layout>
        <SwiperCard />
      </Layout>
      <Section />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100vh;
`;

const Layout = styled.div`
  padding: 0px 14vw;
`;

const Section = styled.div`
  height: 300px;
`;
