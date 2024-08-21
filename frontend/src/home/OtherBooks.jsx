import React, { useEffect, useState } from 'react'
import BookCard from '../componenets/BookCard';

const OtherBooks = () => {
const [books,setBooks]=useState([]);

useEffect(()=>{
    fetch("http://localhost:5000/get-all-books").then(res => res.json()).then(data => setBooks(data.slice(0,8)))
},[])
  return (
    <div className='m-10 '>
        <BookCard books={books} headline="Other Books"/>
    </div>
  )
}

export default OtherBooks