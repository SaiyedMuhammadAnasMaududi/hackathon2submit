import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import { CiShoppingCart } from "react-icons/ci";

const inter = Inter({ subsets: ["latin"] });
const page = () => {
  return (
    <div
      className={`w-full px-[15%] flex flex-col pt-6 pb-6 space-y-4 ${inter.className}`}
    >
      <div className="w-full flex flex-col md:flex-row space-x-10">
        <div className="">
          <Image
            width={675}
            height={607}
            src="/images/pinkchair.png"
            alt="Product"
          />
        </div>
        <div className=" flex flex-col space-y-3 ">
          
            <div className="w-[250px] "><p className={`${inter.className} font-bold text-[30px]`}>Library Stool Chair</p></div>
            <div className="w-[100px] h-[22px] flex justify-center items-center bg-[#029fae] rounded-[30px] border"><p className={`${inter.className} font-semibold text-[7px]`}>$20.00 USD</p></div>
          
          <hr />
          
            <div className="h-auto"><p className={`${inter.className} text-[17px]`}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing</p></div>
            <div className="h-[50px] w-[160px] flex items-center justify-center space-x-2 bg-[#029fae] border rounded-md"><CiShoppingCart className="size-[22px] text-white" />
            <p className={`${inter.className} font-semibold text-[15px] text-white `}>Add To cart</p>
             </div>
        </div>
      </div>
      <div className="w-full space-y-8">
        <div className="flex justify-between w-full">
          <p className={`text-black ${inter.className} font-bold text-[28px]`}>Featured Products</p> <p className={`text-black underline decoration-black decoration-[1.5px] ${inter.className} font-bold text-[18px]`}>View All</p>
        </div>
      <div className="w-full flex  flex-col space-x-1 md:space-y-2 md:flex-row ">
        <div className="w-[20%] "> <Image width={270} height={306} src="/images/product5.png" alt="featured"/></div>
        <div className="w-[20%] "> <Image width={270} height={306} src="/images/product1.png" alt="featured"/></div>
        <div className="w-[20%] "> <Image width={270} height={306} src="/images/feature3.png" alt="featured"/></div>
        <div className="w-[20%] "> <Image width={270} height={306} src="/images/product3.png" alt="featured"/></div>
        <div className="w-[20%] "> <Image width={270} height={306} src="/images/nchair.png" alt="featured"/></div>

      </div></div>
      <br /><br />
    </div>
  );
};

export default page;
