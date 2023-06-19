import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, EffectFade } from "swiper";
import HeroContent from './HeroContent';

function HeroBnnr() {
  return (
        <Swiper
        spaceBetween={30}
        effect={"fade"}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <section className='heroBnnr' style={{backgroundImage: 'url("./desk5.jpg")'}}>
            <div className='container mx-auto pt-28 pb-56'>
              <HeroContent />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='heroBnnr' style={{backgroundImage: 'url("./desk2.jpg")'}}>
            <div className='container mx-auto pt-28 pb-56'>
              <HeroContent />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='heroBnnr' style={{backgroundImage: 'url("./desk3.jpg")'}}>
            <div className='container mx-auto pt-28 pb-56'>
              <HeroContent />
            </div>
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='heroBnnr' style={{backgroundImage: 'url("./desk4.jpg")'}}>
            <div className='container mx-auto pt-28 pb-56'>
              <HeroContent />
            </div>
          </section>
        </SwiperSlide>
      </Swiper>
  )
}

export default HeroBnnr