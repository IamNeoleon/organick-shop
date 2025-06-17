import React from 'react';
import img1 from '@/assets/images/pages/home/catalog/01.jpg'
import img2 from '@/assets/images/pages/home/catalog/02.jpg'
import img3 from '@/assets/images/pages/home/catalog/03.jpg'

const Catalog: React.FC = () => {
   return (
      <>
         <div className="section bg-lgMint grid grid-cols-3 gap-[42px] max-lg:grid-cols-2 max-sm:grid-cols-1 max-md:gap-7 max-sm:gap-4">
            <div className="relative">
               <img src={img1} alt="" />
               <button className='max-lg:py-6 max-lg:px-18 max-lg:text-lg max-sm:py-5 max-sm:px-16 max-sm:text-base whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 px-20 bg-white rounded-[20px] text-primary text-2xl font-medium pointer hover:bg-primary hover:text-white transition-colors'>Organic Juice</button>
            </div>
            <div className="relative">
               <img src={img2} alt="" />
               <button className='max-lg:py-6 max-lg:px-18 max-lg:text-lg max-sm:py-5 max-sm:px-16 max-sm:text-base whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 px-20 bg-white rounded-[20px] text-primary text-2xl font-medium pointer hover:bg-primary hover:text-white transition-colors'>Organic Food</button>
            </div>
            <div className="relative">
               <img src={img3} alt="" />
               <button className='max-lg:py-6 max-lg:px-18 max-lg:text-lg max-sm:py-5 max-sm:px-16 max-sm:text-base whitespace-nowrap absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 py-7 px-20 bg-white rounded-[20px] text-primary text-2xl font-medium pointer hover:bg-primary hover:text-white transition-colors'>Nuts Cookies</button>
            </div>
         </div>
      </>
   );
};

export default Catalog;