import Image from "next/image";
import React from "react";
import { LiaLocationArrowSolid } from "react-icons/lia";
import { RiFacebookLine } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { CiTwitter } from "react-icons/ci";
import { RiLinkedinLine } from "react-icons/ri";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Footer = () => {
  return (
    <div
      className={`w-full lg:h-[440px] h-auto bg-white px-5 py-6 md:px-[5%] lg:py-12 flex flex-col lg:flex-row lg:justify-between space-y-6 lg:space-y-0 ${inter.className}`}
    >
      {/* Left Section */}
      <div className="flex flex-col space-y-3 text-black">
        <div className="flex items-center space-x-3">
          <Image width={40} height={40} src="/images/logo.png" alt="logofooter" />
          <p className="text-[20px] font-medium">Comforty</p>
        </div>
        <div className="max-w-[350px]">
          <p className="text-[16px] text-gray-600">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.
          </p>
        </div>
        <div className="flex space-x-3 text-gray-600 mt-3">
          <RiFacebookLine className="text-[24px] cursor-pointer hover:text-[#007580]" />
          <CiTwitter className="text-[24px] cursor-pointer hover:text-[#007580]" />
          <IoLogoInstagram className="text-[24px] cursor-pointer hover:text-[#007580]" />
          <RiLinkedinLine className="text-[24px] cursor-pointer hover:text-[#007580]" />
        </div>
      </div>

      {/* Category Section */}
      <div className="flex flex-col space-y-3">
        <p className="text-[14px] font-medium text-[#272343]">Category</p>
        <p className="text-[16px] font-medium text-[#272343]">ArmChair</p>
        <p className="text-[16px] font-medium text-[#272343]">Wing Chair</p>
        <p className="text-[16px] font-medium text-[#007580] underline decoration-[#007580]">
          Desk Chair
        </p>
        <p className="text-[16px] font-medium text-[#272343]">Wooden Chair</p>
        <p className="text-[16px] font-medium text-[#272343]">Park Bench</p>
      </div>

      {/* Support Section */}
      <div className="flex flex-col space-y-3">
        <p className="text-[14px] font-medium text-[#272343]">Support</p>
        <p className="text-[16px] font-medium text-[#272343]">Help & Support</p>
        <p className="text-[16px] font-medium text-[#272343]">Terms & Conditions</p>
        <p className="text-[16px] font-medium text-[#272343]">Privacy Policy</p>
        <p className="text-[16px] font-medium text-[#272343]">Help</p>
      </div>

      {/* Newsletter Section */}
      <div className="flex flex-col space-y-5">
        <p className="text-[14px] font-medium text-[#272343]">Newsletter</p>
        <div className="flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-3">
          <div className="flex-grow p-3 border-[1.5px] rounded-md border-[#007580] flex items-center">
            <p className="text-[16px] font-normal text-[#272343]">Enter your email</p>
          </div>
          <button className="w-full md:w-[127px] h-[46px] flex justify-center items-center bg-[#007580] rounded-md">
            <p className="text-[16px] font-semibold text-white">Subscribe</p>
          </button>
        </div>
        <div className="text-[15px] text-[#272343] text-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
