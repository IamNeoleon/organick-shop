import React from 'react';
import bgImage from '@/assets/images/newsletter/01.jpg';
import Button from '@/shared/ui/Button/Button';

const NewsletterBlock: React.FC = () => {
   return (
      <div className="container">
         <div className='py-24 px-16 relative max-lg:py-20 max-lg:px-14 max-sm:py-12 max-sm:px-4'>
            <img className='object-cover absolute top-0 left-0 w-full h-full -z-10 rounded-[30px]' src={bgImage} alt="" />
            <div className='flex justify-between items-center max-lg:flex-col max-lg:text-center max-lg:gap-3'>
               <div className="title text-white max-sm:text-3xl">Subscribe to <br className='max-lg:hidden' /> our Newsletter</div>
               <form className='flex items-center gap-[6px] max-lg:flex-col max-lg:w-full' action="/">
                  <input className='max-[425px]:h-16 max-[425px]:placeholder:text-base max-lg:w-full h-[80px] rounded-2xl text-black text w-[350px] p-6 placeholder:text-lg placeholder:italic placeholder:font-roboto placeholder:text-[#ababab]' placeholder='Your Email Address' type="text" />
                  <Button text='Subscribe' variant='primary' arrow={false} type='submit' />
               </form>
            </div>
         </div>
      </div>
   );
};

export default NewsletterBlock;