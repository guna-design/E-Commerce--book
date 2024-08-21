import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// react icons

import { FaStar } from "react-icons/fa6";
import { Avatar } from "flowbite-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import './styles.css';

// import required modules
import { Pagination } from "swiper/modules";

const Review = () => {
  return (
    <div className="my-12 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center mb-10 leading-snug">
        Our Customers
      </h2>
      <div>
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            "@0.00": {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            "@0.75": {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            "@1.00": {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-700 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur excepturi iste a minima quas ipsum consequuntur
                  possimus in. Odio amet voluptatibus consequatur, illum
                  perspiciatis quisquam saepe fugiat molestiae. Necessitatibus,
                  ad.
                  <Avatar
                    img="src/assets/book images/OIP.jpg"
                    alt="avatar of Jese"
                    rounded
                    className="w-10 mb-4 mt-5"
                  />
                 
                </p>
                <h5 className="text-lg font-medium">jeniva</h5>
                <p className="text-base">Associate,ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-700 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur excepturi iste a minima quas ipsum consequuntur
                  possimus in. Odio amet voluptatibus consequatur, illum
                  perspiciatis quisquam saepe fugiat molestiae. Necessitatibus,
                  ad.
                  <Avatar
                    img="src/assets/book images/OIP.jpg"
                    alt="avatar of Jese"
                    rounded
                    className="w-10 mb-4 mt-5"
                  />
                 
                </p>
                <h5 className="text-lg font-medium">jeniva</h5>
                <p className="text-base">Associate,ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-700 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur excepturi iste a minima quas ipsum consequuntur
                  possimus in. Odio amet voluptatibus consequatur, illum
                  perspiciatis quisquam saepe fugiat molestiae. Necessitatibus,
                  ad.
                  <Avatar
                    img="src/assets/book images/OIP.jpg"
                    alt="avatar of Jese"
                    rounded
                    className="w-10 mb-4 mt-5"
                  />
                 
                </p>
                <h5 className="text-lg font-medium">jeniva</h5>
                <p className="text-base">Associate,ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-700 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur excepturi iste a minima quas ipsum consequuntur
                  possimus in. Odio amet voluptatibus consequatur, illum
                  perspiciatis quisquam saepe fugiat molestiae. Necessitatibus,
                  ad.
                  <Avatar
                    img="src/assets/book images/OIP.jpg"
                    alt="avatar of Jese"
                    rounded
                    className="w-10 mb-4 mt-5"
                  />
                 
                </p>
                <h5 className="text-lg font-medium">jeniva</h5>
                <p className="text-base">Associate,ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-700 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur excepturi iste a minima quas ipsum consequuntur
                  possimus in. Odio amet voluptatibus consequatur, illum
                  perspiciatis quisquam saepe fugiat molestiae. Necessitatibus,
                  ad.
                  <Avatar
                    img="src/assets/book images/OIP.jpg"
                    alt="avatar of Jese"
                    rounded
                    className="w-10 mb-4 mt-5"
                  />
                 
                </p>
                <h5 className="text-lg font-medium">jeniva</h5>
                <p className="text-base">Associate,ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-700 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur excepturi iste a minima quas ipsum consequuntur
                  possimus in. Odio amet voluptatibus consequatur, illum
                  perspiciatis quisquam saepe fugiat molestiae. Necessitatibus,
                  ad.
                  <Avatar
                    img="src/assets/book images/OIP.jpg"
                    alt="avatar of Jese"
                    rounded
                    className="w-10 mb-4 mt-5"
                  />
                 
                </p>
                <h5 className="text-lg font-medium">jeniva</h5>
                <p className="text-base">Associate,ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
        <SwiperSlide className="shadow-2xl bg-white py-8 px-4 md:m-5 rounded-lg border">
            <div className="space-y-6">
              <div className="text-amber-700 flex gap-2">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
              {/* text */}
              <div className="mt-7">
                <p className="mb-7">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Aspernatur excepturi iste a minima quas ipsum consequuntur
                  possimus in. Odio amet voluptatibus consequatur, illum
                  perspiciatis quisquam saepe fugiat molestiae. Necessitatibus,
                  ad.
                  <Avatar
                    img="src/assets/book images/OIP.jpg"
                    alt="avatar of Jese"
                    rounded
                    className="w-10 mb-4 mt-5"
                  />
                 
                </p>
                <h5 className="text-lg font-medium">jeniva</h5>
                <p className="text-base">Associate,ABC Company</p>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Review;
