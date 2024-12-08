import { Inter } from 'next/font/google';
import Image from 'next/image';
import React from 'react'
import { Roboto } from 'next/font/google'
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
    subsets: ['latin'], // Include
  });

const roboto = Roboto({
    weight: '400',
    subsets: ['latin'],
  })
const inter = Inter({ subsets: ["latin"] });
const page = () => {
  return (<div>
    <div className={`w-full px-[15%] flex flex-col pt-6 pb-6 space-y-4 ${inter.className}`}>
        <div><p className='text-[32px] font-semibold'>All Products</p></div>
        <div className='flex flex-col space-y-3 md:flex-row md:space-x-3'>
            <div> <Image width={312} height={377} alt="Products" src="/images/nchair4.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/product2.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/product3.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/product4.png"/></div>
        </div>
        <div className='flex flex-col space-y-3 md:flex-row md:space-x-3'>
            <div> <Image width={312} height={377} alt="Products" src="/images/library.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/nchair2.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/product5.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/nchair4.png"/></div>
        </div>
        <div className='flex flex-col space-y-3 md:flex-row md:space-x-3'>
        <div> <Image width={312} height={377} alt="Products" src="/images/nchair.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/product2.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/product3.png"/></div>
            <div> <Image width={312} height={377} alt="Products" src="/images/stool.png"/></div>
        </div>
      
    </div><div className={`w-full px-[20%] flex flex-col pt-6 pb-6 space-y-4 ${roboto.className} bg-[#f4f4f5] items-center`}>
        <p className={`text-[50px] font-medium ${roboto.className}`}>Or subscribe to the newsletter </p>
        <div className='md:w-[760px]w-auto md:h-[32px] h-max flex flex-col md:flex-row md:justify-between space-y-2'><div className='md:w-[643px] h-[32px] text-[12px] text-topheadertext pl-3 border-b-2'><p>Email address...</p></div><div className='w-[91px] h-[32px]  text-topheadertext flex justify-center items-center border-b-2'><p className={`${openSans.className}`}>Submit</p></div></div>
        <p className={`text-[50px] font-medium ${roboto.className}`}>Follow products and discounts on Instagram</p>
        <div className=' flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-2'>
            <Image width={200} height={200} src="/images/woodenchair.png" alt="MOre"/>
            <Image width={200} height={200} src="/images/fancychair.png" alt="MOre"/>
            <Image width={200} height={200} src="/images/pinkchair.png" alt="MOre"/>
            <Image width={200} height={200} src="/images/whitechair.png" alt="MOre"/>
            <Image width={200} height={200} src="/images/grid.png" alt="MOre"/>
            <Image width={200} height={200} src="/images/comfortchair.png" alt="MOre"/>

        </div>

        </div>
        <br /><br /><br />
    </div>
  )
}

export default page
