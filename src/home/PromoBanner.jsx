import React from "react";
import { Link } from "react-router-dom";
import bookpic from "../assets/book images/stack-old-books-old-books-background_216222-225-removebg-preview.png"

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-red-300 px-4 lg:px-24s">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12">
        <div>
          <h2 className="text-4xl font-bold mb-6 leading-snug">2024 National Book Awards for History Shortlist</h2>
          <Link Linkto="/shop " className="mt-10 block">
            <button className="bg-red-700 text-white font-semibold px-5 py-2 rounded hover:bg-black transition-all duration-300">
              Get Promo Code
            </button>
          </Link>
        </div>
        <div>
            <img src={bookpic} alt="" />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
