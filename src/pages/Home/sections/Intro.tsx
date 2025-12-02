import React from 'react';
import introBg from '@/assets/images/pages/home/intro/01.jpg'
import Button from '@/shared/ui/Button/Button';

const Intro: React.FC = () => {
   return (
      <>
         <div style={{ backgroundImage: `url(${introBg})` }} className='bg-cover bg-no-repeat bg-center py-[245px] max-lg:py-[150px] max-md:py-[80px]'>
            <div className="container">
               <div>
                  <div className="subtext mb-2">
                     100% Natural Food
                  </div>
                  <div className='title text-[70px] mb-5 max-md:text-6xl max-md:leading-snug max-[425px]:text-4xl max-[425px]:leading-relaxed max-sm:text-5xl max-sm:leading-normal'>
                     Choose the best <br />
                     healthier way <br />
                     of life <br />
                  </div>
                  {/*  */}
                  <Button variant='yellow' text='Explore Now' to='/shop' />
               </div>
            </div>
         </div>
      </>
   );
};

export default Intro;