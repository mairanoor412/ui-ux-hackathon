import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
  



const Carousels =()=>{
    return(
            <Carousel className=" min-w-[360px] m-auto  bg-yellow-500 flex justify-center">
  <CarouselContent>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
    <CarouselItem>...</CarouselItem>
  </CarouselContent>
  <CarouselPrevious className="absolute left-0" />
  <CarouselNext className="absolute right-0" />
</Carousel>

    )
}

export default Carousels