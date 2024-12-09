import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import { LuDot } from "react-icons/lu";


const Rooms = ()=>{
    return(
        <div className="overflow-x-hidden w-full h-auto xl:h-[670px] flex flex-col justify-center items-center bg-[#FCF8F3]">
        <div className=" grid sm:grid-cols-12 gap-10">

            {/* left data */}
            
            <div className=" flex flex-col justify-center items-center sm:items-start sm:col-span-5  gap-10 py-10 px-20 sm:px-1 md:px-5 lg:px-8 xl:px-32">
                <div className="flex flex-col gap-5">
                    <h1 className="text-[25px] font-[700] sm-text-[20px] sm:w-[200px] md:text-[40px] md:w-[300px] leading-[48px] text-[#3A3A3A]  lg:w-[422px]"> 50+ Beautiful rooms inspiration </h1>
                    <p className="text-[12px]  font-[500] sm:text-[10px] sm:w-[200px] md:text-[16px] md:w-[300px] text-[#616161]  lg:w-[368px]"> Our designer already made a lot of beautiful prototipe of rooms that inspire you </p> 
                </div>
            <button className="w-[176px] py-[12px] bg-[#B88E2F] text-[16px] font-[600] "> Explore More </button>
            </div>
            

            {/* image-1 */}
            <div className="hidden sm:block  col-span-3 relative">
                <div className="hidden xl:block">
                <div className="flex flex-row items-end absolute bottom-0 left-[20px] ">
                <div className="w-[217px] h-[130px] bg-secondary opacity-[75%]  flex flex-col justify-center items-center ">
                    <div className=" h-[24px] flex items-center gap-[8px]">
                        <p> 01 </p>
                        <hr className="border-[#616161] border-[1px] w-[27px]"></hr>
                        <p className="text-[16px] font-[500]">Bed Room</p>
                    </div>

                    <p className="text-[#3A3A3A] text-[28px] font-[600]">Inner Peace</p>
                </div>

                <div className="w-[48px] h-[48px] bg-[#B88E2F] flex justify-center items-center">
                <FaArrowRight className="text-secondary size-5" />
                </div>
                </div>
                </div>

                <Image src="/image/rooms/Rectangle 24.png" alt="image" width={404} height={582} className="w-[404px] h-[582px]"/>
            </div>
            
            {/* image-2 */}
            <div className="hidden sm:block col-span-3">
            <Image src="/image/rooms/Rectangle 25.png" alt="image" width={372} height={486} className="w-[372px] h-[486px]"/>
            <div className="flex flex-row pt-6 ">
            <LuDot className="size-10 text-[#B88E2F]" />
            <LuDot className="size-10 text-[#D8D8D8]"/>
            <LuDot className="size-10 text-[#D8D8D8]"/>
            <LuDot className="size-10 text-[#D8D8D8]"/>
            </div>
            </div>

            {/* image-3 */}
            <div className="hidden sm:block col-span-1 ">
            <Image src="/image/rooms/Rectangle 26.png" alt="image" width={372} height={486} className="w-[372px] h-[486px]"/>
            </div>




        </div>
        </div>
    )
}

export default Rooms;