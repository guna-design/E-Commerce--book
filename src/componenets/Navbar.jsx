import React, { useEffect, useState } from 'react'
// react icons
import { MdMenuBook } from "react-icons/md";
import {  FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen,setIsMenuOpen]=useState(false);
    const [isSticky,setSticky]=useState(false);
    // toggle menu
  const toggleMenu=()=>{
    setIsMenuOpen(!isMenuOpen);
  }

  useEffect(()=>{
    const handleScroll=()=>{
        if(window.scrollY>100){
            setSticky(true);
        }
        else{
            setSticky(false)
        }
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>{
        window.addEventListener("scroll",handleScroll);
    }
  },[])

  //nav items here
  const navItems=[
    {link:"Home",path:"/"},
    {link:"About",path:"/about"},
    {link:"Shop",path:"/shop"},
    {link:"Sell Your Book",path:"/admin/dasboard"},
    {link:"Blogome",path:"/blog"},
  ]
  return (
    <header className='w-full bg-transparent fixed top-0 left-0 right-0 transition-all ease-in duration-300 z-40'>
        <nav className={`py-4 lg:px-24 px-4 ${isSticky ? "sticky top-0 left-0 right-0 bg-red-300":""}`}>
            <div className='flex justify-between item-center text-base gap-8'>
                {/* logo */}
                <Link to='/'className='text-2xl font-bold text-red-700 item-center gap-2 '>< MdMenuBook className='inline-block ' />Books</Link>
                {/* nav item for larger device */}
                <ul className='md:flex space-x-12 hidden'>
                    {
                        navItems.map(({link,path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer hover:text-red-700'>{link}</Link>)
                    }
                </ul>
                <div className='space-x-12 hidden lg:flex items-center'>
                    <button><FaBarsStaggered className='w-5'/></button>
                </div>

            {/* menu button for mobile device */}
          <div className='md:hidden mr-10'>
          <button onClick={toggleMenu} className='text-black left-10'>{
                isMenuOpen?<FaXmark className='h-5 w-5 text-black'/>:<FaBarsStaggered className='h-5 w-5 text-black'/>
                
                }</button>
          </div>
            </div>
            {/* navitems for sm devices */}
            <div className={`space-y-4 px-4 mt-12 py-7 bg-red-300  ${isMenuOpen ? "block fixed top-0 right-0 left-0":"hidden"}`} >{
                  navItems.map(({link,path})=><Link key={path} to={path} className='block text-base text-black uppercase cursor-pointer '>{link}</Link>)}</div>
        </nav>
    </header>
  )
}

export default Navbar