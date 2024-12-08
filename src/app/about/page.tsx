import { Inter } from 'next/font/google';
import React from 'react'
import Image from 'next/image';

const inter = Inter({ subsets: ["latin"] });
const page = () => {
  return (
    <div className={`w-full px-[20%] flex flex-col pt-6 pb-6 space-y-6 ${inter.className}`}>
        <div className='flex justify-between'>
            <div className='w-[55%] bg-[rgb(0,117,128)] flex flex-col space-y-5 lg:pt-[2.5%] lg:pb-[1.5%] py-[5%] px-[5%] justify-center md:justify-between md:space-y-3     '><p className={`${inter.className} font-bold text-sm lg:text-[32px] text-white`}>About Us - Comforty</p>
            <p className='lg:text-[18px]  text-[4px] xs:text-[6px] sm:text-[8px] text-white'>At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
            <div className='w-[40%] px-[5%] py-[5%]   flex justify-center items-center bg-[#258992]'><p className='text-white text-[3px] xs:text-[6px] sm:8px lg:text-[12px] '>View Collection</p></div></div>
            <div className='w-[42%]  flex justify-center items-center sm:flex-none'><Image width={672} height={478} src="/images/whitechair.png" alt='picture'/></div>
        </div>
        <div className='w-full h-[35px] flex items-center justify-center'><p className={`${inter.className} font-semibold lg:text-[32px] text-[10px] xs:text-[12px] sm:text-[16px] md:text-[24px]`}>What makes our Brand Different</p></div>
        <div className='w-full justify-between flex space-x-2 '>
            <div className='full'><Image width={309} height={244} src="/images/different.png" alt='difference'/></div>
            <div className='w-auto'><Image width={309} height={244} src="/images/different2.png" alt='difference'/></div>
            <div className='w-auto'><Image width={309} height={244} src="/images/different3.png" alt='difference'/></div>
            <div className='w-auto'><Image width={309} height={244} src="/images/different4.png" alt='difference'/></div>

        </div>
        <div className='w-full h-[35px] flex items-center'><p className={`${inter.className} font-semibold lg:text-[32px] text-[10px] xs:text-[12px] sm:text-[16px] md:text-[24px]`}>Our Popular Products</p></div>
        <div className=' w-full grid grid-cols-4 gap-x-2'>
            <div className='col-span-2'> <Image width={630} height={462} src="/images/popularproduct.png" alt='PopularProducts'/></div>
            <div> <Image width={305} height={462} src="/images/popularproduct2.png" alt='PopularProducts'/></div>
            <div> <Image width={305} height={462} src="/images/popularproduct3.png" alt='PopularProducts'/></div>

        </div>
      
    </div>
  )
}

export default page
