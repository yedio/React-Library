import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

interface Type_SwiperEvent {
  img: string;
  url: string;
}

export default function SwiperEvent() {
  SwiperCore.use([Autoplay]);
  const swiperRef = useRef<SwiperCore>();

  const [swiperList, setSwiperList] = useState<Type_SwiperEvent[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    fetch(`/data/swiper/swiper_event.json`)
      .then(res => res.json())
      .then(res => {
        setSwiperList(res.data);
      });
  }, []);

  return (
    <Wrapper>
      {swiperList && swiperList.length > 0 ? (
        <>
          <Swiper
            onBeforeInit={swiper => {
              swiperRef.current = swiper;
            }}
            onSlideChange={e => {
              setCurrentIdx(e.realIndex + 1);
            }}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 1500, disableOnInteraction: false }}
          >
            {swiperList.map((event: Type_SwiperEvent, idx: number) => (
              <SwiperSlide
                key={idx}
                onClick={() => {
                  if (event.url) {
                    window.location.href = event.url;
                  }
                }}
              >
                <img src={event.img} alt="img" />
              </SwiperSlide>
            ))}
          </Swiper>
          <SwiperModuleWrap>
            <SwiperPgWrap>
              <CurrentPg>{currentIdx}</CurrentPg>
              <TotalPg>/{swiperList.length}</TotalPg>
            </SwiperPgWrap>
            <SwiperBtnWrap>
              <PrevBtn
                type="button"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                Prev
              </PrevBtn>
              <NextBtn
                type="button"
                onClick={() => swiperRef.current?.slideNext()}
              >
                Next
              </NextBtn>
            </SwiperBtnWrap>
          </SwiperModuleWrap>
        </>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .swiper-slide {
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 56.26%;
    overflow: hidden;
    z-index: 10;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`;

const SwiperModuleWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  gap: 10px;
  width: 84px;
  height: 72px;
  bottom: 10px;
  right: 30px;
  z-index: 100;
`;

const SwiperBtnWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const NaviBtn = styled.button`
  width: 32px;
  height: 32px;
  font-size: 0px;
  border-style: none;
  cursor: pointer !important;
`;

const PrevBtn = styled(NaviBtn)`
  background: url(${'/images/arrow/slider_prev.svg'}) no-repeat 50% 34%;
`;
const NextBtn = styled(NaviBtn)`
  background: url(${'/images/arrow/slider_next.svg'}) no-repeat 50% 34%;
`;

const SwiperPgWrap = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

const CurrentPg = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: white;
`;

const TotalPg = styled.span`
  font-size: 24px;
  font-weight: 400;
  color: white;
`;
