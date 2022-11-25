import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore from 'swiper';
import 'swiper/css';

interface Type_SwiperCard {
  name: string;
  img: string;
}

export default function SwiperCard() {
  const swiperRef = useRef<SwiperCore>();

  const [swiperList, setSwiperList] = useState<Type_SwiperCard[]>([]);

  useEffect(() => {
    fetch(`/data/swiper/swiper_card.json`)
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
            slidesPerView={1}
            breakpoints={{
              800: {
                slidesPerView: 2,
              },
              1200: {
                slidesPerView: 3,
              },
              1600: {
                slidesPerView: 4,
              },
              1920: {
                slidesPerView: 5,
              },
            }}
          >
            {swiperList.map((data: Type_SwiperCard, idx: number) => (
              <SwiperSlide key={idx}>
                <CardWrap>
                  <img src={data.img} alt="thumb" />
                  <p>{data.name}</p>
                </CardWrap>
              </SwiperSlide>
            ))}
          </Swiper>
          <PrevBtn type="button" onClick={() => swiperRef.current?.slidePrev()}>
            Prev
          </PrevBtn>
          <NextBtn type="button" onClick={() => swiperRef.current?.slideNext()}>
            Next
          </NextBtn>
        </>
      ) : null}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;

  .swiper-slide {
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
`;

const CardWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 300px;
  border: solid 1px black;

  img {
    height: 120px;
  }

  p {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    font-size: 20px;
    font-weight: bold;
  }
`;

const NaviBtn = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  font-size: 0;
  z-index: 100;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer !important;
`;

const PrevBtn = styled(NaviBtn)`
  background: url(${'/images/arrow/card_prev.png'}) no-repeat 50% 30%;
  left: -25px;
`;

const NextBtn = styled(NaviBtn)`
  background: url(${'/images/arrow/card_next.png'}) no-repeat 50% 30%;
  right: -25px;
`;
