import { FaAngleRight } from "react-icons/fa";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";



const SingleProduct = () => {
    return (
        <div>
            {/* 1st section */}
            {/* container */}
            <div className=" w-auto   bg-[#F9F1E7] ">
                <div className=" h-[70px] lg:h-[100px] grid grid-cols-1  justify-items-center md:justify-items-start md:pl-20 lg:pl-40 xl:pl-28">

                    <div className="flex items-center gap-4 md:gap-5 lg:gap-7">
                        <div className="w-[70px] md:w-[82px] flex justify-between items-center">
                            <p className="text-[#9F9F9F] text-[14px] lg:text-[16px]"> Home </p>
                            <FaAngleRight className="text-primary" />
                        </div>

                        <div className="w-[70px] md:w-[82px] flex justify-between items-center">
                            <p className="text-[#9F9F9F] text-[14px] lg:text-[16px]"> Shop</p>
                            <FaAngleRight className="text-primary" />
                        </div>

                        <div className="w-[110px] sm:w-[130px] lg:w-[142px] border-l-[2px] border-[#9F9F9F] flex items-center justify-end ">
                            <p className="text-primary text-[14px] lg:text-[16px]"> Asgaard sofa </p>
                        </div>
                    </div>
                </div>
            </div>



            {/* 2nd section */}
            <div className="py-8 px-2">
                {/* grid container */}
                <div className="grid grid-cols-2">
                    {/* left Image */}
                    <div className="grid grid-cols-4">
                        {/* small */}
                        <div className="col-span-1 ml-auto flex flex-col gap-2">
                            {/* 1 */}
                            <div>
                                <Image src="/image/single-product/Mask group (1).png" alt="image" width={76} height={80} />
                            </div>

                            {/* 2*/}
                            <div>
                                <Image src="/image/single-product/Mask group (2).png" alt="image" width={76} height={80} />
                            </div>

                            {/* 3 */}
                            <div>
                                <Image src="/image/single-product/Group 3.png" alt="image" width={76} height={80} />
                            </div>

                            {/* 4 */}
                            <div>
                                <Image src="/image/single-product/Group 4.png" alt="image" width={76} height={80} />
                            </div>
                        </div>

                        {/* big */}
                        <div className="bg-[#F9F1E7] col-span-3 m-2 md:ml-10 md:mr-24 flex justify-center items-center ">
                            <Image src="/image/single-product/Asgaard sofa 3.png" alt="image" width={423} height={230} className="h-[230px]" />
                        </div>

                    </div>




                    {/* Right Data */}
                    <div className="flex flex-col gap-1 pl-2 md:pl-0">
                        <h1 className="text-primary text-[22px] xl:text-[42px]"> Asgaard sofa </h1>
                        <p className="text-[#9F9F9F] font-[500] text-[12px] lg:text-[24px]"> Rs. 250,000.00 </p>

                        <div className="flex items-center justify-between py-2">
                            <div className="md:w-[124px] flex">
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                                <IoIosStar className="text-[#FFC700]" />
                            </div>
                            <p className="text-[#9F9F9F] text-[8px] md:text-[13px]"> 5 Customer Review </p>
                        </div>

                        {/* paragraph */}
                        <p className="text-primary text-[8px] lg:text-[13px] "> Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.</p>

                        {/* Size */}
                        <div className="flex flex-col gap-1">
                            <p className="text-[#9F9F9F] text-[12px] md:text-[14px]"> Size </p>
                            <div className="flex gap-3">
                                <div className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[#F9F1E7]  hover:bg-[#B88E2F]  text-primary hover:text-secondary flex justify-center items-center rounded-[5px]">
                                    <p className="text-[10px] md:text-[13px]"> L </p>
                                </div>

                                <div className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[#F9F1E7]  hover:bg-[#B88E2F]  text-primary hover:text-secondary flex justify-center items-center rounded-[5px]">
                                    <p className=" text-[10px] md:text-[13px]"> XL </p>
                                </div>

                                <div className="w-[20px] h-[20px] md:w-[30px] md:h-[30px] bg-[#F9F1E7]  hover:bg-[#B88E2F]  text-primary hover:text-secondary flex justify-center items-center rounded-[5px]">
                                    <p className=" text-[10px] md:text-[13px]"> XS </p>
                                </div>
                            </div>
                        </div>

                        {/* Color */}
                        <div className="flex flex-col gap-1">
                            <p className="text-[#9F9F9F] text-[12px] md:text-[14px]"> Color </p>
                            <div className="flex">
                                <p className=" w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full bg-[#816DFA] "></p>
                                <p className=" w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full bg-primary"></p>
                                <p className=" w-[20px] h-[20px] md:w-[30px] md:h-[30px] rounded-full bg-[#B88E2F]"></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleProduct