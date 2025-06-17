import React from 'react';

interface IHeroBannerProps {
   image: string,
   text: string
}

const HeroBanner: React.FC<IHeroBannerProps> = ({ image, text }) => {
   return (
      <div className='py-28 text-center relative max-lg:py-20 max-md:py-10'>
         <img className='absolute top-0 left-0 w-full h-full object-cover -z-10' src={image} alt="" />
         <h1 className='title capitalize'>{text}</h1>
      </div>
   );
};

export default HeroBanner;