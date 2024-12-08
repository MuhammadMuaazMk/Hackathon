import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const HeroSection  = () => {
  return (
    <section className="text-white py-20 px-0" 
    style={{ backgroundImage: 'url(/10.jpg)', 
       
        
        backgroundPosition: 'center top',
    backgroundSize: 'cover',
    width: '100%' , height:'89vh'}}>
        
      <div className="container mx-auto pt-32 md:pt-60 flex flex-col md:flex-row items-center">
        {/* Left Text Section */}
        <div className="flex-1 text-center md:text-left">
          <p className="text-base uppercase tracking-widest">Summer 2020</p>
          <h1 className="text-4xl md:text-8xl font-bold mt-2">
            New Collection
          </h1>
          <p className="text-lg md:text-2xl md:w-1/3 mt-4">
            We know how large objects will act, but things on a small scale.
          </p>
          <button className="mt-8 bg-green-500 hover:bg-green-700 text-white font-thin text-xl md:text-3xl py-4 md:py-6 px-4 md:px-8 rounded">
            SHOP NOW
          </button>
        </div>

        
      </div>
    </section>
  )
}

export default HeroSection
