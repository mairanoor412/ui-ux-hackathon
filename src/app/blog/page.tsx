import { FaGreaterThan } from "react-icons/fa6";
import Image from "next/image";


const Blog = () => {
    return (
        <div>
            {/* 1st section */}
            <div className="bg-[url('/image/shop/Rectangle-1.png')] h-[200px] md:h-[316px] bg-cover ">
                {/* heading */}
                <div className="h-[200px] md:h-[316px] flex flex-col justify-center items-center">

                    <Image src="/image/header/Meubel House_Logos-05.png" alt="logo" width={50} height={41} className="" />
                    <h1 className="text-primary text-[32px] sm:text-[36px] md:text-[48px] font-[500] xl:leading-[72px]"> Blog </h1>


                    <div className="gap-[2px] sm:gap-[5px] md:w-[121px] flex items-center justify-between">
                        <p className="text-[12px] md:text-[16px] font-[500]"> Home </p>
                        <FaGreaterThan className="size-2 md:size-3" />
                        <p className="text-[12px] md:text-[16px] font-[300]"> Blog </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog;