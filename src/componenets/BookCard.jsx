import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import './styles.css';

// import required modules
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';
import { FaCartShopping } from 'react-icons/fa6'


const BookCard = ({headline,books}) => {
    console.log(books);
  return (
 <>
    <div className='text-5xl text-center font-bold text-black my-5'>{headline}</div>

 {/*cards  */}
 

 <div className='m-5'>
 <Swiper
        slidesPerView={1}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper w-full h-full"
      >
        
       {
        books.map(books=><SwiperSlide key={books._id}>

            <Link to={`/book/${books._id}`}>
                <div>
                    <img src={books.imageURL} alt="" />
                    <div className=' absolute top-3 right-3 bg-red-400 hover:bg-red-500 rounded-full p-2 rounded-l'>
                        <FaCartShopping className='w-4 h-4 text-white'/>
                    </div>
                </div>
                <div>
                   <div>
                   <h3>{books.bookTitle}</h3>
                   <p>{books.authourName}</p>
                   </div>
                   <div>
                    <p>$20</p>
                   </div>
                </div>
            </Link>
        </SwiperSlide>)
       }
      </Swiper>
 </div>
 
 
 
 </>
    
  )
}

export default BookCard