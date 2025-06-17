import React from 'react';
import promoImg1 from '@/assets/images/pages/home/promo/01.png'
import promoImg2 from '@/assets/images/pages/home/promo/02.png'

const Promo: React.FC = () => {
   return (
      <>
         <div className='section'>
            <div className="container">
               <div className='flex max-md:flex-col max-md:justify-start max-md:items-start gap-9 justify-between items-center'>
                  <div style={{ backgroundImage: `url(${promoImg1})` }} className='max-[375px]:py-10 max-md:py-12 max-lg:py-20 flex-auto max-md:w-full rounded-[30px] py-28 px-14 bg-center bg-cover bg-no-repeat'>
                     <div className="max-[375px]:text-xl max-lg:text-2xl subtext text-white mb-1">Natural!!</div>
                     <div className="max-[375px]:text-3xl max-lg:text-[32px] title text-[40px] text-white">Get Garden <br /> Fresh Fruits</div>
                  </div>
                  <div style={{ backgroundImage: `url(${promoImg2})` }} className='max-[375px]:py-10 max-md:py-12 max-lg:py-20 flex-auto max-md:w-full rounded-[30px] py-28 px-14 bg-center bg-cover bg-no-repeat'>
                     <div className="max-[375px]:text-xl max-lg:text-2xl subtext mb-1">Offer!!</div>
                     <div className="max-[375px]:text-3xl max-lg:text-[32px] title text-[40px]">Get 10% off <br />
                        on Vegetables</div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Promo;