import { Inter, Open_Sans, Roboto } from "next/font/google";
import React from "react";
import { GoPlus } from "react-icons/go";;


const openSans = Open_Sans({
  subsets: ["latin"], // Include
});

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});
const inter = Inter({ subsets: ["latin"] });
const page = () => {
  return (
    <div
      className={`w-full px-[15%] flex flex-col pt-6 pb-6 space-y-4 items-center ${inter.className}`}
    >
      <p className="helvetica font-bold text-[48px]">Questions Looks Here</p>
      <p className="text-[#cccccc]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the </p>
      <div className={`${inter.className} w-full space-y-3`}>
        <div
          className={`${inter.className} w-full flex space-x-3 md:h-[170px]`}
        >
          <div
            className={`${inter.className}   bg-[#f7f7f7] w-[50%] flex flex-col space-x-3 md:h-[170px] border rounded-md`}
          >
            <div className="flex w-full justify-between py-3 px-3"><p className={`${inter.className} font-bold text-[18px]`}>What types of chairs do you offer?</p> <GoPlus  className="size-[24px]"/>
            </div>
            <div className="flex w-full justify-between py-3 pr-3"><p className={`${inter.className} text-[6px] xs:text-[7px]
                sm:text-[10px]  lg:text-[16px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
          </div>
          <div
            className={`${inter.className}   bg-[#f7f7f7] w-[50%] flex flex-col space-x-3 md:h-[170px] border rounded-md`}
          >
            <div className="flex w-full justify-between py-3 px-3"><p className={`${inter.className} font-bold text-[18px]`}>What types of chairs do you offer?</p> <GoPlus  className="size-[24px]"/>
            </div>
            <div className="flex w-full justify-between py-3 pr-3"><p className={`${inter.className} text-[6px] xs:text-[7px]
                sm:text-[10px] lg:text-[16px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
          </div>
        </div>
        <div
          className={`${inter.className} w-full flex space-x-3 md:h-[170px]`}
        >
          <div
            className={`${inter.className}  bg-[#f7f7f7] w-[50%] flex  flex-col space-x-3 md:h-[170px] border rounded-md`}
          >
            <div className="flex w-full justify-between py-3 px-3"><p className={`${inter.className} font-bold text-[18px]`}>What types of chairs do you offer?</p> <GoPlus  className="size-[24px]"/>
            </div>
            <div className="flex w-full justify-between py-3 pr-3 "><p className={`${inter.className} text-[6px] xs:text-[7px]
                sm:text-[10px]  lg:text-[16px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
          </div>
          <div
            className={`${inter.className}  bg-[#f7f7f7] w-[50%] flex flex-col space-x-3 md:h-[170px] border rounded-md`}
          >
            {" "}
            <div className="flex w-full justify-between py-3 px-3"><p className={`${inter.className} font-bold text-[18px]`}>What types of chairs do you offer?</p> <GoPlus  className="size-[24px]"/>
            </div>
            <div className="flex w-full justify-between py-3 pr-3"><p className={`${inter.className} text-[6px] xs:text-[7px]
                sm:text-[10px]  lg:text-[16px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
          </div>
        </div>
        <div
          className={`${inter.className} w-full flex space-x-3 md:h-[170px]`}
        >
          <div
            className={`${inter.className} w-[50%]  bg-[#f7f7f7] flex flex-col space-x-3 md:h-[170px] border rounded-md`}
          >
            <div className="flex w-full justify-between py-3 px-3"><p className={`${inter.className} font-bold text-[18px]`}>What types of chairs do you offer?</p> <GoPlus  className="size-[24px]"/>
            </div>
            <div className="flex w-full justify-between py-3 pr-3"><p className={`${inter.className} text-[6px] xs:text-[7px]
                sm:text-[10px]  lg:text-[16px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
          </div>
          <div
            className={`${inter.className} w-[50%]  bg-[#f7f7f7] flex flex-col space-x-3 md:h-[170px] border rounded-md `}
          >
            <div className="flex w-full justify-between py-3 px-3"><p className={`${inter.className} font-bold text-[18px]`}>What types of chairs do you offer?</p> <GoPlus  className="size-[24px]"/>
            </div>
            <div className="flex w-full  py-3 pr-3"><p className={`${inter.className} text-[6px] xs:text-[7px]
                sm:text-[10px]  lg:text-[16px]`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis modi ullam amet debitis libero veritatis enim repellat optio natus eum delectus deserunt, odit expedita eos molestiae ipsa totam quidem?</p></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
