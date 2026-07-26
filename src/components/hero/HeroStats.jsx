import HeroStatCard from "./HeroStatCard"; 
import { heroStats } from "../../data/heroData"; 

function HeroStats() { 
  return ( 
  
    <div className=" mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 " > 
      {heroStats.map((stat) => ( 
        <HeroStatCard 
          key={stat.id} {...stat} /> ))} 
    </div> 
  ); 
} 

export default HeroStats;