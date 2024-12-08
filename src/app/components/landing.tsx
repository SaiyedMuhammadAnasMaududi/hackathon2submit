import React from 'react'


    


import { Inter } from "next/font/google";
import Image from "next/image";

import { FaArrowRightLong } from "react-icons/fa6";
const inter = Inter({ subsets: ["latin"] });

const Landing = () => {
  return (
    <div className={`w-full h-auto flex flex-col space-y-6 ${inter.className} px-4 md:px-[15%]`}>
      {/* Hero Section */}
      <div className="w-full md:h-[850px] flex flex-col-reverse md:flex-row items-center bg-[#f0f2f3] rounded-bl-[25px] space-y-6 md:space-y-0 md:space-x-10">
        {/* Text Section */}
        <div className="flex flex-col space-y-6 w-full md:w-[50%] px-4 md:px-0">
          <p className="text-[14px] text-[#272343]">Welcome to Chairy</p>
          <h1 className="text-[28px] md:text-[40px] lg:text-[60px] text-[#272343] font-bold">
            Best Furniture Collection for your interior.
          </h1>
          <button className="flex items-center justify-center bg-[#029fae] text-white font-semibold text-[16px] rounded-md w-[171px] h-[52px] space-x-3">
            <span>Shop Now</span>
            <FaArrowRightLong />
          </button>
        </div>
        {/* Image Section */}
        <div className="flex justify-center items-center">
          <Image
            width={434}
            height={584}
            src="/images/chair.png"
            alt="Chair"
            className="object-contain"
          />
        </div>
      </div>

      {/* Logos Section */}
      <div className="w-full grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 items-center">
        {[
          "/images/logo1.png",
          "/images/logo2.png",
          "/images/logo3.png",
          "/images/logo4.png",
          "/images/logo5.png",
          "/images/logo6.png",
          "/images/logo7.png",
        ].map((src, index) => (
          <div key={index} className="flex justify-center">
            <Image width={100} height={100} src={src} alt={`Logo ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Featured Products Section */}
      <div className="w-full flex flex-col gap-y-6">
        <h2 className="text-[32px] font-semibold">Featured Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/images/product1.png",
            "/images/product2.png",
            "/images/product3.png",
            "/images/product4.png",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={270}
                height={350}
                src={src}
                alt={`Featured Product ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Top Categories Section */}
      <div className="w-full flex flex-col gap-y-6">
        <h2 className="text-[32px] font-semibold">Top Categories</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            "/images/top1.png",
            "/images/top2.png",
            "/images/top3.png",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={424}
                height={424}
                src={src}
                alt={`Top Category ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Grid Section */}
      <div className="w-full flex flex-col md:flex-row gap-6">
        <div className="w-full md:w-1/2">
          <Image
            width={648}
            height={648}
            src="/images/grid.png"
            alt="Grid Image"
          />
        </div>
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-3">
          {[
            "/images/card.png",
            "/images/card2.png",
            "/images/card3.png",
            "/images/card4.png",
          ].map((src, index) => (
            <Image key={index} width={312} height={312} src={src} alt={`Card ${index + 1}`} />
          ))}
        </div>
      </div>

      {/* Our Products Section */}
      <div className="w-full flex flex-col gap-y-6">
        <h2 className="text-[32px] font-semibold">Our Products</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/images/product1.png",
            "/images/product2.png",
            "/images/product3.png",
            "/images/product4.png",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={270}
                height={350}
                src={src}
                alt={`Our Product ${index + 1}`}
              />
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "/images/nchair.png",
            "/images/nchair2.png",
            "/images/product5.png",
            "/images/nchair4.png",
          ].map((src, index) => (
            <div key={index} className="flex justify-center">
              <Image
                width={270}
                height={350}
                src={src}
                alt={`Our Product ${index + 5}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Landing;
