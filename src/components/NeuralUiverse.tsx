import React from 'react'

const NeuralUiverse = () => {
  return (
    <div className="  
    flex flex-col md:flex-row items-center justify-center min-h-screen p-4">
                    <div className=" md:w-1/2 flex justify-center">
                        <img src="/14.png" alt="A happy couple wearing red and black checkered scarves" className="w-full h-auto object-cover"/>
                    </div>
                    <div className=" md:w-1/2 p-6">
                        <p className="text-gray-500 uppercase tracking-wide text-sm">Summer 2020</p>
                        <h1 className="text-4xl font-bold text-gray-900 mt-2">Part of the Neural Universe</h1>
                        <p className="text-gray-700 mt-4">We know how large objects will act, but things on a small scale.</p>
                        <div className="mt-6 flex space-x-4">
                            <button className="bg-green-500 text-lg text-white px-6 py-4 rounded">Buy Now</button>
                            <button className="border border-green-500 text-lg text-green-500 px-6 py-4 rounded">Read More</button>
                        </div>
                    </div>
                </div>
  )
}

export default NeuralUiverse
