import React from 'react'
import Image from 'next/image'
const Editor = () => {
  return (
    <div className="flex flex-col items-center bg-white p-4">
    <div className="relative mb-4">
       
        <h1 className="text-xl md:text-4xl font-bold text-center">EDITORS PICK</h1>
        <p className="text-center text-gray-500">Problems trying to resolve the conflict between</p>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="relative">
        <Image src="/15.jpg" alt="Man in a brown jacket" className="w-full h-auto"/>
            <div className="absolute top-2 right-2 bg-white p-1 rounded-full">
                <i className="fas fa-user-circle text-blue-500"></i>
            </div>
            <div className="absolute bottom-12 left-6 bg-white px-10 py-1 text-black">MEN</div>
        </div>
        <div className="relative">
        <Image src="/16.jpg" alt="Woman in a grey sweater" className="w-full h-auto"/>
            <div className="absolute bottom-12 left-6 bg-white px-10 py-1 text-black">WOMEN</div>
        </div>
        <div className="relative">
        <Image src="/17.jpg" alt="Person with accessories" className="w-full h-auto"/>
            <div className="absolute  bottom-12 left-6 bg-white px-10 py-1 text-black">ACCESSORIES</div>
        </div>
        <div className="relative border-2 border-orange-500">
        <Image src="/18.jpg" alt="Kid in a yellow shirt" className="w-full h-auto"/>
            <div className="absolute  bottom-12 left-6 bg-white px-10 py-1 text-black">KIDS</div>
        </div>
    </div>
</div>
  )
}

export default Editor
