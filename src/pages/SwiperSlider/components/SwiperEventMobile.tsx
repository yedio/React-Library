import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Autoplay } from 'swiper';
import 'swiper/css';

interface Type_SwiperEvent {
  img: string;
  url: string;
}

export default function SwiperEventMobile() {
  SwiperCore.use([Autoplay]);
  const swiperRef = useRef<SwiperCore>();

  const [swiperList, setSwiperList] = useState<Type_SwiperEvent[]>([]);
  const [currentIdx, setCurrentIdx] = useState(0);

  const clickSlide = (idx: number) => {
    swiperRef.current?.slideTo(idx + 1);
    setCurrentIdx(idx + 1);
  };

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
            {swiperList.map((event, idx) => (
              <SwiperBtn
                key={idx}
                onClick={() => clickSlide(idx)}
                className={idx + 1 === currentIdx ? 'active' : ''}
              />
            ))}
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
  position: absolute;
  bottom: 10px;
  left: 50%;
  transform: translate(-50%, 0%);
  gap: 7px;
  z-index: 100;
`;

const SwiperBtn = styled.button`
  width: 27px;
  height: 2px;
  background: #78787a;
  border-style: none;

  &.active {
    background: #fff;
  }
`;
