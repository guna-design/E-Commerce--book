import { Card } from "flowbite-react";
import React, { useEffect, useState } from "react";

const Shop = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/get-all-books")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div className="mt-28 px-4 lg:px-24">
      <h2 className="text-5xl font-bold text-center">All Books Are Here</h2>
      <div className="grid gap-8 my-12 lg:grid-cols-4 sm:grid-cols-2 md:grid-cols-3 grid-cols-1">
        {books.map((books) => (
          <Card className="max-w-sm">
            <img src={books.imageURL} alt="" />
            <h5 className="text-2xl font-bold tracking-tight text-gray-900 mb-10 dark:text-white">
              {books.bookTitle}
            </h5>
            <h6 className="mb-2">{books.authorName}</h6>

            <p className="font-normal  text-gray-700 overflow-y-scroll h-full  dark:text-gray-400">
              {books.bookDescription}
            </p>

            <button className="bg-red-500 font-semibold hover:bg-black  rounded transition-all ease-in duration-300 text-white py-2 ">
              Buy Now
            </button>
          </Card>
        ))}
      </div>
      <div>
        
      </div>
    </div>
  );
};

export default Shop;
