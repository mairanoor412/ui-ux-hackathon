
import HeroSection from "./components/hero-section/hero-section";
import BrowseTheRange from "./components/browse-the-range/browse-the-range";
import OurProducts from "./components/our-products/our-products";
import Rooms from "./components/rooms/rooms";
import Furniture from "./components/furniture/furniture";
import Footer from "./components/footer/footer";
import Carousels from "./components/caroursel/carousel";







const Home = ()=>{
  return(
      <div>
      
        <HeroSection></HeroSection>
        {/* <Carousels></Carousels> */}
        <BrowseTheRange></BrowseTheRange>
        <OurProducts></OurProducts>
        <Rooms></Rooms>
        <Furniture></Furniture>
        
      </div>
  )
}

export default Home;