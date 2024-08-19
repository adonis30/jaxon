"use client";

import React from 'react';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { FaLocationArrow } from 'react-icons/fa6';
import { ImagesSlider } from './ui/ImagesSlider';
import { image8, image1, image2, image3, image4, image5, image6, image7 } from "@/public/images";

const images = [
  image8,
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
  image7,
];

const Hero = () => {
  return (
    <div className='relative py-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      </div>

      <ImagesSlider className="absolute mt-20 top-0 left-0 w-full h-full rounded-3xl" images={images}>
        {/* This could be any valid React node */}
        <div></div>
      </ImagesSlider>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>
            JAXON INVESTMENTS LIMITED
          </p>
          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80'>
            building with you
          </h2>
          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words='Transforming concepts into seamless experiences, we specialize in delivering innovative solutions across various sectors, including domestic and industrial power tools, hardware and building materials, cement, Rhino plasters and boards, plumbing supplies, agricultural and irrigation inputs, and electrical supplies.'
          />
          <a href='#works'>
            <MagicButton 
              title="See our Works"
              icon={<FaLocationArrow />} 
              position='right'
            />
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;
