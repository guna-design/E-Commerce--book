import React from "react";
import favBooksimg from "../assets/book images/books.webp";
import { Link } from "react-router-dom";

const FavBooks = () => {
  return (
    <div className="px-4 lg:px-24 my-24 flex md:flex">
      <div className="md:w-1/2">
        <img src={favBooksimg} className=" rounded md:w-10/12" alt="" />
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Finding Your Favourite <span className="text-red-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium
          magni modi, perferendis, soluta aliquid accusamus quia unde voluptatem
          esse laborum odit omnis non sed hic expedita id nulla excepturi.
          Fugit!
        </p>

        {/* stats */}

        <div className="flex flex-col sm:flex-row  justify-between gap-6 md:w-3/4 my-14">
            <div >
                <h3 className="text-3xl font-bold">
                    800+
                </h3>
                <p className="text-base"> Book listing</p>
            </div>
            <div >
                <h3 className="text-3xl font-bold">
                    550+
                </h3>
                <p className="text-base"> Register Users</p>
            </div>
            <div >
                <h3 className="text-3xl font-bold">
                    1200+
                </h3>
                <p className="text-base"> Pdf Downloaded</p>
            </div>
        </div>
<Link Linkto='/shop ' className='mt-10 block' ><button className="bg-red-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">Explore more</button></Link>

      </div>
    </div>
  );
};

export default FavBooks;
