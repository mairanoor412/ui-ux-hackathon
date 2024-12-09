import Image from "next/image";


const BrowseTheRange = ()=>{
    return(
        <div className="overflow-x-hidden w-full  bg-secondary">
            {/* heading */}
            <div className="grid grid-cols-1 place-items-center py-14">
                <h1 className="text-[16px] sm:text-[20px] md:text-[25px] font-[700] xl:text-[32px] "> Browse The Range </h1>
                <p className="text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] text-[#666666]"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            {/* cards */}
            <div className="xl:w-[1183px] xl:m-auto">
                {/* container */}
                <div className="grid grid-cols-1 justify-items-center gap-10  lg:grid-cols-2 xl:grid-cols-3">

                    {/* card-1 */}
                    <div>
                        <Image src="/image/browse/1-Mask Group.png" alt="image" width={381} height={440}  />
                        <div className=" w-[381px] flex justify-center">
                        <p className="text-[24px] font-[600] text-[#333333] pt-3"> Dining </p>
                        </div>
                    </div>


                     {/* card-2 */}
                     <div>
                        <Image src="/image/browse/2-Image-living room.png" alt="image" width={381} height={440}  />
                        <div className=" w-[381px] flex justify-center">
                        <p className="text-[24px] font-[600] text-[#333333] pt-3"> Living </p>
                        </div>
                    </div>


                     {/* card-3 */}
                     <div className="lg:hidden xl:block">
                        <Image src="/image/browse/3-Mask Group (1).png" alt="image" width={381} height={440}  />
                        <div className=" w-[381px] flex justify-center">
                        <p className="text-[24px] font-[600] text-[#333333] pt-3"> Bedroom </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BrowseTheRange;