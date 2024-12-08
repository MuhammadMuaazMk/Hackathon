import React from 'react'
import Image from 'next/image'
const Hero = () => {
  return (
    <div className="  flex flex-col md:flex-row items-center justify-center min-h-screen bg-green-600 p-4">
    <div className=" text-white text-center md:text-left md:w-1/2 p-4 m-12">
        <p className="text-sm md:text-4xl">SUMMER 2020</p>
        <h1 className="text-2xl md:text-8xl font-bold my-4">Vita Classic Product</h1>
        <p className="text-sm md:text-xl mb-4">We know how large objects will act. We know how are objects will act. We know</p>
        <div className="flex items-center justify-center md:justify-start">
            <span className="text-lg font-bold mr-4">$16.48</span>
            <button className="bg-white text-green-600 font-bold py-2 px-4 border-2 border-green-600 hover:bg-green-600 hover:text-white transition duration-300">ADD TO CART</button>
        </div>
    </div>
    <div className="md:w-1/2 p-4">
        <img src="/11.png" alt="Man in white shirt thinking" className="w-full h-auto" />
    </div>
</div>
  )
}

export default Hero
