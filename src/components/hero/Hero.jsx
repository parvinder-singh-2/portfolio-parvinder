import BackgroundLayout from "../layout/BackgroundLayout"; 
import HeroContent from "./HeroContent"; 
import HeroSphere from "./HeroSphere"; 
import HeroStats from "./HeroStats"; 

function Hero() { 
  return ( 
    <div className="min-h-screen flex items-center pt-20 mx-auto justify-center" id="hero"> 
      <div className="mx-auto min-h-screen max-w-7xl px-6 sm:px-8 lg:px-12"> 
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:mt-0 mt-14"> 
          <HeroContent /> 
          <HeroSphere className= ""/> 
        </div> 
        <HeroStats /> 
      </div> 
    </div> 
  ); 
}

export default Hero;