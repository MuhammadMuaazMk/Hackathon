import Image from "next/image";
import React from 'react';

interface Product {
  id: number;
  image: string;
  title: string;
  department: string;
  originalPrice: number;
  discountedPrice: number;
  colors: string[];
}

const FeaturedProducts = () => {
  const products: Product[] = [
    {
      id: 1,
      image: "/1.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
    {
      id: 2,
      image: "/2.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
    {
      id: 3,
      image: "/3.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
    {
      id: 4,
      image: "/4.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
    {
      id: 5,
      image: "/5.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
    {
      id: 6,
      image: "/6.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
    {
      id: 7,
      image: "/7.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
    {
      id: 8,
      image: "/8.jpg",
      title: "Graphic Design",
      department: "English Department",
      originalPrice: 16.48,
      discountedPrice: 6.48,
      colors: ["#0000FF", "#00FF00", "#FF0000", "#FFFF00"],
    },
   
  ];

  return (
    <section className="py-10 container">
      <h2 className="text-center text-xl md:text-3xl text-gray-400">Featured Products</h2>
      <h1 className="text-center text-2xl font-bold md:text-4xl uppercase">BestSeller Product</h1>
      <p className="text-center text-gray-500 text-[11px] md:text-base">
        Problems trying to resolve the conflict between
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
        {products.map((product) => (
          <div key={product.id} className=" p-4 rounded-lg text-center">
            <Image
              src={product.image}
              alt={product.title}
              layout="responsive"
              width={200}
              height={300}
              className="mx-auto"
              
            />
            <h3 className="text-lg font-semibold">{product.title}</h3>
            <p className="text-sm text-gray-400">{product.department}</p>
            <div className="mt-2">
              <span className="line-through text-gray-400">
                ${product.originalPrice.toFixed(2)}
              </span>{" "}
              <span className="text-green-500 font-bold">
                ${product.discountedPrice.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-center gap-2 mt-3">
              {product.colors.map((color, index) => (
                <span
                  key={index}
                  className="w-4 h-4 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
