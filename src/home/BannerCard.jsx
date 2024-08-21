import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';

import './BannerCard.css';


// import required modules
import { EffectCards } from 'swiper/modules';

const BannerCard = () => {
  return (
    <div className='banner'>  <Swiper
    effect={'cards'}
    grabCursor={true}
    modules={[EffectCards]}
    className="mySwiper"
  >
    <SwiperSlide><img src="https://www.creativindiecovers.com/wp-content/gallery/portfolio/sherifinal.jpg" alt="" srcset="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.creativindiecovers.com/wp-content/gallery/portfolio/colorsfinal2.jpg" alt="" srcset="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.ingramspark.com/hs-fs/hubfs/TheSumofAllThings_cover_June21_option4(1).jpg?width=1125&name=TheSumofAllThings_cover_June21_option4(1).jpg" alt="" srcset="" /></SwiperSlide>
    <SwiperSlide><img src="https://bespokebookcovers.com/wp-content/uploads/2016/09/paperback-cover-design-examples.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://images.template.net/106903/free-vintage-book-signing-poster-8pxm9.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.creativindiecovers.com/wp-content/gallery/portfolio/28E.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.creativindiecovers.com/wp-content/gallery/portfolio/budapestfinal2.jpg" alt="" /></SwiperSlide>
    <SwiperSlide><img src="https://www.creativindiecovers.com/wp-content/gallery/portfolio/proposalnew4.jpg" alt="" /></SwiperSlide>
 
  </Swiper></div>
  )
}

export default BannerCard