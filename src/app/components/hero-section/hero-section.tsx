


const HeroSection = ()=>{
    return(
        <div className="w-full overflow-x-hidden">
            
            {/* background image */}
            <div className="bg-[url('/image/hero-section/scandinavian-interior-mockup-wall-decal-background-1.png')]  h-[40vh] bg-cover bg-center  sm:h-[60vh] md:h-screen lg:h-screen xl:h-[812.53px] ">
            
            {/* content */}
            <div className="relative sm:top-[100px] sm:left-[190px] md:left-[500px] lg:left-[730px] xl:w-[663px] xl:h-[443px] xl:bg-[#FFF3E3]  xl:top-[253px] xl:left-[739px] xl:rounded-[10px]">
                {/* container */}
                <div className="flex flex-col sm:gap-1 md:gap-5 lg:gap-6 xl:gap-2 xl:w-[561px] xl:h-[344px]  xl:mx-auto relative top-[50px] ">
                    <p className="text-[10px] xl:text-[16px] xl:font-[600]"> New Arrival </p>
                    <h1 className="text-[17px]  xl:w-[559px] xl:text-[52px] xl:font-[700] xl:text-[#B88E2F] xl:pr-40 xl:leading-[65px]"> Discover Our New Collection</h1>
                    <p className="text-[12px] w-[300px] xl:w-[564px] xl:text-[18px] font-[500] text-[#333333] xl:pr-9"> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
                    <div className="xl:pt-9">
                    <button className="xl:w-[222px] xl:bg-[#B88E2F] xl:text-[16px] xl:font-[700] xl:py-[25px] xl:text-secondary "> BUY Now </button>
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default HeroSection;