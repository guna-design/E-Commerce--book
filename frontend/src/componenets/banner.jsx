import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 flex item-center'>
        <div className='flex w-full flex-col md:flex-row justify-between item-center gap-12 py-40'>
        {/* left side */}
        <div className='md:w-1/2 space-y-8 h-full'>
            <h2 className='text-5xl font-bold leading-snug text-black'>
                Buy and sell Your books <span className='text-red-700'>
                    for the Best Prices
                </span>
            </h2>
            <p className='md:w-4/5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae voluptatem eum molestiae a provident tempore. Eos, in debitis dolorem quasi reprehenderit officiis soluta ea, asperiores illo dolor, ab quia tempora!</p>
            <div className=''>
            <input type="search" name="search" id="search"placeholder='Search a book' className='py-2 px-2 rounded-s-xl outline-none rounded-xl ' />
            <button className='bg-red-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200 rounded-xl'>Search</button>
        </div>
        </div>
       
        {/* right side */}
        <div>
            <BannerCard></BannerCard>
        </div>

        </div>
    </div>
  )
}

export default Banner