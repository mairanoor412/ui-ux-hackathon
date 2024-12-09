
import HeroSection from "./components/hero-section/hero-section";
import BrowseTheRange from "./components/browse-the-range/browse-the-range";
import OurProducts from "./components/our-products/our-products";
import Rooms from "./components/rooms/rooms";
import Furniture from "./components/furniture/furniture";
import Footer from "./components/footer/footer";






const Home = ()=>{
  return(
      <div>
      
        <HeroSection></HeroSection>
        <BrowseTheRange></BrowseTheRange>
        <OurProducts></OurProducts>
        <Rooms></Rooms>
        <Furniture></Furniture>
        <Footer></Footer>
      </div>
  )
}

export default Home;