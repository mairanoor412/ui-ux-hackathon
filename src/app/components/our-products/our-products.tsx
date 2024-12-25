import Image from "next/image";
import { CiShare2 } from "react-icons/ci";
import { MdOutlineCompareArrows } from "react-icons/md";
import { CiHeart } from "react-icons/ci";


const OurProducts = () => {
    return (
        <div className=" overflow-x-hidden w-full bg-secondary">
            {/* heading */}
            <div className="grid grid-cols-1 place-items-center py-14">
                <h1 className="text-[22px] sm:text-[25px] md:text-[30px] lg:text-[32px] font-[700] xl:text-[40px] "> Our Products </h1>
            </div>

            {/* cards */}
            <div className="xl:w-[1236px] xl:m-auto  ">
                {/* container */}
                <div className="grid grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded-[5px]">

                    {/* card-1 */}

                    <div className="w-[285px] h-[446px] bg-[#F4F5F7] rounded-[5px]  relative">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -30% </div>

                        <Image src="/image/products/1-image 1.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>
                    </div>


                    {/* card-2 */}
                    <div className="w-[285px] h-[446px]  opacity-[72%] z-20 rounded-[5px] lg:hidden xl:block relative">
                        <div className="absolute inset-0 bg-[#3A3A3A] opacity-[72%]  rounded-[5px]"></div>
                        {/* Add to Card */}
                        <div className="w-[252px] h-[96px] flex flex-col items-center gap-[24px] m-auto absolute top-[175px] left-[16px] ">
                            {/* card button */}
                            <button className="w-[202px] h-[48px] text-[16px] font-[600] leading-[24px] text-[#B88E2F] bg-secondary"> Add to cart</button>

                            {/* share/compare/like */}
                            <div className="h-[24px] gap-[20px] flex">
                                {/* share */}
                                <div className="flex items-center gap-[2px]">
                                    <CiShare2 className="w-[16px] h-[16px] text-secondary" />
                                    <p className="text-secondary text-[16px] font-[600]"> Share</p>
                                </div>

                                {/* compare */}
                                <div className="flex items-center gap-[2px]">
                                    <MdOutlineCompareArrows className="w-[16px] h-[16px] text-secondary" />
                                    <p className="text-secondary text-[16px] font-[600]"> Compare </p>
                                </div>

                                {/* like */}
                                <div className="flex items-center gap-[2px]">
                                    <CiHeart className="w-[16px] h-[16px] text-secondary" />
                                    <p className="text-secondary text-[16px] font-[600]"> Like </p>
                                </div>
                            </div>
                        </div>

                        <Image src="/image/products/image 2.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />


                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4 bg-[#F4F5F7]">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Syltherine </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Stylish cafe chair </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 2.500.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 3.500.000</p>
                            </div>

                        </div>

                    </div>



                    {/* card-3 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative lg:hidden xl:block">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -50% </div>
                        <Image src="/image/products/3-image 3.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Lolito </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Luxury big sofa </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 7.000.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 14.000.000</p>
                            </div>

                        </div>
                    </div>



                    {/* card-4 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/4-image 4.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Respira </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Outdoor bar table and stool </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 500.000 </p>

                            </div>

                        </div>
                    </div>



                    {/* card-5 */}
                    <div className="w-[285px] h-[446px]  rounded-[5px] bg-[#F4F5F7]">
                        <Image src="/image/products/5-images.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Grifo </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Night lamp </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 1.500.000 </p>

                            </div>

                        </div>
                    </div>



                    {/* card-6 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/6-image 6.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Muggo </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Small mug </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 150.000 </p>

                            </div>

                        </div>
                    </div>


                    {/* card-7 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#E97171] rounded-full absolute top-[18px] right-[15px] z-20"> -50% </div>
                        <Image src="/image/products/7-image 7.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Pingky </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Cute bed set </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 7.000.000 </p>
                                <p className="text-[16px] text-[#B0B0B0] line-through">Rp 14.000.000</p>
                            </div>

                        </div>
                    </div>



                    {/* card-8 */}
                    <div className="w-[285px] h-[446px] bg-[#F4F5F7]  rounded-[5px] relative">
                        <div className="h-[48px] w-[48px] flex items-center justify-center text-[16px] font-[500] text-secondary bg-[#2EC1AC] rounded-full absolute top-[18px] right-[15px] z-20"> New </div>
                        <Image src="/image/products/8-image 8.png" alt="image" width={285} height={301} className=" rounded-t-[5px]" />
                        {/* bottom data */}
                        <div className=" h-[99px] pl-3 mt-4">

                            <div className="flex flex-col gap-3">
                                <h1 className="text-[24px] font-[600] text-[#3A3A3A] "> Potty </h1>
                                <p className="text-[16px] font-[500] text-[#898989]"> Minimalist flower pot </p>
                            </div>

                            <div className="flex flex-row h-[30px] items-center mt-2 gap-3">
                                <p className="text-[20px] font-[600] text-[#3A3A3A]">Rp 500.000 </p>

                            </div>

                        </div>
                    </div>

                </div>
            </div>

            <div className=" flex justify-center w-[245px]  border-[1px] border-[#B88E2F]  rounded-[5px] m-auto my-10">
                <button className="w-[245px] py-[12px] text-[16px] font-[600] text-[#B88E2F]"> Show More</button>
            </div>
        </div>
    )
}

export default OurProducts;