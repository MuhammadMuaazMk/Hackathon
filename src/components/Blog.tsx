import React from 'react'
import Image from 'next/image'
const Blog = () => {
  return (
    <div className="container mx-auto p-4">
    <div className="text-center mb-8">
        <h2 className="text-blue-500 text-sm font-bold">Practice Advice</h2>
        <h1 className="text-4xl font-bold">Featured Posts</h1>
        <p className="text-gray-600 mt-2">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics.</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
            <Image src="/14.jpg" alt="Colorful buildings along a street" className="w-full h-96 object-cover"/>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    <div className="text-gray-500 text-xs">Google | Trending | New</div>
                </div>
                <h3 className="text-lg font-bold mb-2">Loudest à la Madison #1 (L Integral)</h3>
                <p className="text-gray-600 mb-4">We focus on ergonomics and meeting you where you work. Its only a keystroke away.</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>8 Dec 2024</span>
                    <span><i className="fas fa-comments"></i> 10 comments</span>
                </div>
                <a href="#" className="text-blue-500 font-bold mt-4 inline-block">Learn More</a>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src="/13.jpg" alt="Pink vintage car parked by a blue wall" className="w-full h-96 object-cover"/>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    <div className="text-gray-500 text-xs">Google | Trending | New</div>
                </div>
                <h3 className="text-lg font-bold mb-2">Loudest à la Madison #1 (LIntegral)</h3>
                <p className="text-gray-600 mb-4">We focus on ergonomics and meeting you where you work. Its only a keystroke away.</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>8 Dec 2024</span>
                    <span><i className="fas fa-comments"></i> 10 comments</span>
                </div>
                <a href="#" className="text-blue-500 font-bold mt-4 inline-block">Learn More</a>
            </div>
        </div>
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <Image src="/12.jpg" alt="Colorful umbrellas hanging in the sky" className="w-full h-96 object-cover"/>
            <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">NEW</span>
                    <div className="text-gray-500 text-xs">Google | Trending | New</div>
                </div>
                <h3 className="text-lg font-bold mb-2">Loudest à la Madison #1 (LIntegral)</h3>
                <p className="text-gray-600 mb-4">We focus on ergonomics and meeting you where you work. Its only a keystroke away.</p>
                <div className="flex items-center justify-between text-gray-500 text-sm">
                    <span>8 Dec 2024</span>
                    <span><i className="fas fa-comments"></i> 10 comments</span>
                </div>
                <a href="#" className="text-blue-500 font-bold mt-4 inline-block">Learn More</a>
            </div>
        </div>
    </div>
</div>
  )
}

export default Blog
