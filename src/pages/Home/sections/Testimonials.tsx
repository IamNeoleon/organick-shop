import React from 'react';
import { Slider, Statistic } from '@/widgets/'
import bgImage from '@/assets/images/pages/home/testimonials/bg.jpg'

const Testimonials: React.FC = () => {
   return (
      <>
         <div style={{ backgroundImage: `url(${bgImage})` }} className='bg-cover bg-no-repeat bg-center section'>
            <div className="container">
               <div className='mb-14 text-center max-lg:mb-12 max-md:mb-8 max-sm:md-4'>
                  <div className="subtext mb-2">Testimonials</div>
                  <div className="title">What Our Customer Saying?</div>
               </div>
               <div>
                  <Slider />
                  <div className='max-[552px]:grid-cols-1 max-[375px]:gap-4 max-w-[1030px] mx-auto pt-24 grid grid-cols-4 gap-[62px] max-lg:grid-cols-2 max-md:pt-10 max-md:gap-6'>
                     <div className='flex justify-center items-center'>
                        <Statistic title='100%' text='Organic' />
                     </div>
                     <div className='flex justify-center items-center'>
                        <Statistic title='285' text='Active Product' />
                     </div>
                     <div className='flex justify-center items-center'>
                        <Statistic title='350+' text='Organic Orchads' />
                     </div>
                     <div className='flex justify-center items-center'>
                        <Statistic title='25+' text='Years of Farming' />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default Testimonials;