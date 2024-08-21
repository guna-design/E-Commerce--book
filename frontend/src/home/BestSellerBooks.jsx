import React, { useEffect, useState } from 'react'
import BookCard from '../componenets/BookCard';

const BestSellerBooks = () => {
    const [books,setBooks]=useState([]);

    useEffect(()=>{
        fetch("http://localhost:5000/get-all-books").then(res => res.json()).then(data => setBooks(data.slice(0,6)))
    },[])
  return (
    <div>
        <BookCard books={books} headline="Best Seller Books"/>
    </div>
  )
}

export default  BestSellerBooks