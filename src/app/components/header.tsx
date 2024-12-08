import { Inter } from "next/font/google";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { CiShoppingCart } from "react-icons/ci";
const inter = Inter({ subsets: ["latin"] });
const Header = () => {
  return (
    <div className="w-[100%] md:h-[84px] h-auto  flex  bg-[#f0f2f3] text-topheadertext justify-between py-3 md:py-0 md:items-center ">
      <div
        className={`${inter.className} md:w-[166px] w-auto md:h-[40px] flex justify-between items-center md:space-x-0 space-x-1 ml-[15%]`}
      >
        <Image src="/images/logo.png" width={40} height={40} alt="logo" />
        <p className="text-[26px] font-medium">Comforty</p>
      </div>
      <div
        className={`${inter.className} sm:w-[120px] sm:h-[44px] w-auto h-auto flex py-2 sm:space-y-0 space-x-1 sm:justify-evenly sm:items-center rounded-md bg-white text-black xxs:mr-[12%] sm:mr-[15%]`}
      >
       <Link href="../cart"> <CiShoppingCart className="size-[22px] pl-[2px] sm:pl-0" /> </Link>
        <p className="text-[12px] font-medium">Cart</p>{" "}
        <div className="size-[20px] border rounded-full bg-[#007580] flex items-center justify-center text-white text-[10px] font-medium  sm:pl-0">
          2
        </div>
      </div>
    </div>
  );
};

export default Header;
