function HeroStatCard({ icon: Icon, value, title, subtitle, }) { 
  return ( 
  
    <div 
      className=" 
        group 
        rounded-3xl 
        border 
        border-white/10
        bg-white/[0.03] 
        p-6 
        backdrop-blur-xl 
        transition-all 
        duration-500 
        hover:-translate-y-2 
        hover:border-violet-500/40 
        hover:shadow-2xl 
        hover:shadow-violet-600/10 " > 
        
          <div className="flex gap-5"> 
            <div className=" 
              lg:mb-6 
              mb-3
              flex
              h-10
              w-10 
              lg:h-16 
              lg:w-16 
              items-center 
              justify-center 
              rounded-2xl 
              bg-violet-500/10 
              lg:text-3xl
              text-xl 
              text-violet-400 
              transition-all 
              duration-300 
              group-hover:scale-110 
              group-hover:bg-violet-600 
              group-hover:text-white " > 
              
                <Icon /> 
            </div> 
            
            <h3 className="lg:text-5xl text-3xl font-bold"> 
              {value} 
            </h3> 
          </div> 
          
          <p className="lg:text-xl text-lg font-semibold"> 
            {title} 
          </p> 
          
          <p className="mt-2 lg:text-sm text-xs text-zinc-400"> 
            {subtitle} 
          </p> 
        </div> 
      ); 
    } 
    
    export default HeroStatCard;
