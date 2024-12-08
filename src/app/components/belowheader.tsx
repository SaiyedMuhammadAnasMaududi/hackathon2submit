import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
const inter = Inter({ subsets: ["latin"] });

const Belowheader = () => {
  return (
    <div
      className={`w-[100%] md:h-[74px] h-auto  flex flex-wrap-reverse  bg-white text-topheadertext justify-between py-2 md:py-0 md:items-center ${inter.className}`}
    >
      <div className="w-[339px] h-[15px] space-x-2 sm:space-x-0 py-2 sm:py-0 flex items-center justify-between text-topheadertext ml-[15%]">
        <Link href="../Home"><p className="text-[14px] font-medium text-[#298b94]">Home</p></Link>
        <Link href="../details"><p className="text-[14px] font-medium">Shop</p></Link>
        <Link href="../products"><p className="text-[14px] font-medium">Product</p></Link>
        <Link href="../questions"><p className="text-[14px] font-medium">Pages</p></Link>
        <Link href="../about"><p className="text-[14px] font-medium">About</p></Link>
      </div>
      <div className="sm:w-[168px] sm:h-[15px] w-auto h-auto flex  justify-between items-center space-x-2 sm:space-x-0 py-2 sm:py-0 xxs:mr-[12%] sm:mr-[15%]">
       <Link href="../contact"> <p className="text-[14px] text-topheadertext">Contact:</p></Link>
        <p className="text-[14px] text-black font-medium">{`(808) 555-0111`}</p>
      </div>
    </div>
  );
};

export default Belowheader;
