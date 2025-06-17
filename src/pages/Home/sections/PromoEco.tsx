import React from 'react';
import ecoImg from '@/assets/images/pages/home/eco-promo/01.jpg';

const PromoEco: React.FC = () => {
   return (
      <>
         <div className="flex max-lg:flex-col-reverse">
            <div>
               <img className='h-[100%]' src={ecoImg} alt="eco image" />
            </div>
            <div className='flex items-center max-lg:text-center'>
               <div className='max-w-[850px] py-20 px-24 rounded-[30px] -ml-20 bg-white max-lg:max-w-full max-lg:ml-0 max-lg:px-[15px] max-sm:py-12'>
                  <div className='mb-6 max-md:mb-1'>
                     <div className="subtext">Eco Friendly</div>
                     <div className="title">Econis is a Friendly Organic Store</div>
                  </div>
                  <div>
                     <div className='mb-8 max-md:mb-5'>
                        <div className="text-primary text-2xl font-medium max-md:text-xl">Start with Our Company First</div>
                        <div className='text'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</div>
                     </div>
                     <div className='mb-8 max-md:mb-5'>
                        <div className="text-primary text-2xl font-medium max-md:text-xl">Learn How to Grow Yourself</div>
                        <div className='text'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</div>
                     </div>
                     <div>
                        <div className="text-primary text-2xl font-medium max-md:text-xl">Farming Strategies of Today</div>
                        <div className='text'>Sed ut perspiciatis unde omnis iste natus error sit voluptat accusantium doloremque laudantium. Sed ut perspiciatis.</div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PromoEco;