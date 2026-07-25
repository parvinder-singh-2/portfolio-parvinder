import React from 'react'
import BackgroundLayout from '../layout/BackgroundLayout'
import AboutContext from "../about/AboutContext" 
import AboutInfoCard from "../about/AboutInfoCard" 

const About = () => {
  return (
    <section className="relative flex min-h-screen items-center py-20 lg:py-0" id='about'>
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AboutContext />
            <AboutInfoCard />
            </div>
        </div>
    </section>
  );
};

export default About;