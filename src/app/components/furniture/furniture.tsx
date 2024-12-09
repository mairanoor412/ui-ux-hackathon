import Image from "next/image";


const Furniture = ()=>{
    return(
        <div className="overflow-x-hidden bg-secondary">
             {/* heading */}
             <div className="grid grid-cols-1 place-items-center py-14">
             <p className="text-[10px] sm:text-[14px] md:text-[16px] xl:text-[20px] text-[#666666]"> Share your setup with </p>
                <h1 className="text-[16px] sm:text-[20px] md:text-[25px] font-[700] xl:text-[40px] "> #FuniroFurniture </h1>
            </div>
            {/* container */}
            <div className="grid grid-cols-5 grid-rows-2 gap-4">
                 {/* 1 */}
                
                <div className="grid row-span-1 place-items-end">
                    <Image src="/image/furniture/1-Rectangle 36.png" alt="image" width={274} height={382} className="w-[274px] h-[382px]"  />
                </div>

                 {/* 2 */}
                 <div className="grid row-span-1 place-items-end">
                    <Image src="/image/furniture/2-Rectangle 38.png" alt="image" width={451} height={312} className="w-[451px] h-[312px] " />
                </div>

                 {/* 3 */}
                 <div className="row-span-2 grid place-items-center">
                    <Image src="/image/furniture/3-Rectangle 40.png" alt="image" width={295} height={392} className="w-[295px] h-[392px]" />
                </div>

                 {/* 4 */}
                 <div className="grid row-span-1 place-items-end">
                    <Image src="/image/furniture/4-Rectangle 43.png" alt="image" width={290} height={348} className="w-[290px] h-[348px]" />
                </div>

                 {/* 5 */}
                 <div className="grid row-span-1 place-items-end">
                    <Image src="/image/furniture/5-Rectangle 45.png" alt="image" width={425} height={433} className="W-[425PX] H-[433PX]"/>
                </div>

                 {/* 6 */}
                 <div>
                    <Image src="/image/furniture/6-Rectangle 37.png" alt="image" width={381} height={323} className="w-[381px] h-[323px]"/>
                </div>

                 {/* 7 */}
                 <div>
                    <Image src="/image/furniture/7-Rectangle 39.png" alt="image" width={344} height={242} className="w-[344px] h-[242px]"/>
                </div>

                 {/* 8 */}
                 <div>
                    <Image src="/image/furniture/8-Rectangle 41.png" alt="image" width={178} height={242} className="w-[178px] h-[242px]" />
                </div>

                 {/* 9 */}
                 <div  className="grid row-span-1  ">
                    <Image src="/image/furniture/9-Rectangle 44.png" alt="image" width={258} height={196} className="w-[258px] h-[196px]" />
                </div>

                
            </div>
        </div>
    )
}

export default Furniture;