import React from 'react';
import HeroSlider from './home/HeroSlider';
import IconSlider from './home/IconSlider';
import Categories from './new/Categories';
import ArchitectureLights from './new/ArchitectureLights';
import CommercialLedLight from './new/CommercialLedLight';

import VideoSection from './home/VideoSection';
import Review from './review';
// import FAQ from './home/FAQ';
// import ElectricBulbShowcase from './home/electric';
import ProductGrid from './products/ProductGrid';
import WhatsAppButton from './home/whatapp';
import ProductGrid1 from './products/Domesub1';

import WaveGrid from './home/WaveGrid';
import MagneticTrackLight from './home/MagneticTrackLight';

import ClientCategories from './home/ClientCategories';
// import bannerr from "../../../pictures/"
// main/category/CHAMP TILTABLE (LOW HEIGHT TILTABLE)/DSC_4166.JPG

// import DecorativeLighting from './cards'; 
// import LightingCard from './cardsM';
import DecorativeLightingD from './cardsD';

import Banner from './home/Banner';

// import SlideP from './home/slidePendant';
// import SlideC from './home/slideC';

// import Slideshow from './home/Slideshow';
import HomeVideo from './new/HomeVideo'

import ProductSlideshow from './productCategories';


const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <WhatsAppButton />
      <HomeVideo url={`/videos/homevideo.mp4`} />

      <Categories />
      <br />
      <ProductSlideshow />
      <WaveGrid />
    
      <ArchitectureLights />
      <CommercialLedLight />
      <Banner
        imageUrl="/pictures/DSC_4166.JPG"
        altText="Sample Banner"
        width="100%"
        height="700px"
      />


      {/* <Slideshow/> */}
      {/* <ElectricBulbShowcase /> */}
      {/* <DecorativeLighting/>
  <LightingCard/> */}
      <DecorativeLightingD />
      <MagneticTrackLight />






      {/* <SlideP/>
      <SlideC/> */}
      <ClientCategories />
      <VideoSection />
      {/* <FAQ /> */}
      <Review />
      <iframe src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3763.1829437759575!2d72.86312507521362!3d19.404499981868867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDI0JzE2LjIiTiA3MsKwNTEnNTYuNSJF!5e0!3m2!1sen!2sin!4v1735846832174!5m2!1sen!2sin" width="100%" height="500px"   ></iframe>

    </div>
  );
};

export default Home;