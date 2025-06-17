import React from 'react';
import { ArrowRight } from 'lucide-react';
import aboutImg from '@/assets/images/pages/home/about/01.png';
import plateIcon from '@/assets/icons/plate.svg';
import mailboxIcon from '@/assets/icons/mailbox.svg';
import Button from '@/shared/ui/Button/Button';

const About: React.FC = () => {
   return (
      <>
         <div className='section bg-bgGrey'>
            <div className="container">
               <div className="flex items-center max-lg:flex-col-reverse">
                  <div className='basis-2/4 max-lg:basis-full'>
                     <img src={aboutImg} alt="about image" className='block max-w-full h-auto' />
                  </div>
                  <div className='basis-2/4 max-lg:basis-full max-lg:text-center'>
                     <div className="subtext mb-2">
                        About Us
                     </div>
                     <div className="title mb-3 max-sm:mb-2">
                        We Believe in Working <br className='max-md:hidden' />
                        Accredited Farmers
                     </div>
                     <div className="text mb-10 max-sm:mb-7">
                        Simply dummy text of the printing and typesetting industry. Lorem had ceased to
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.
                     </div>
                     <div className='mb-11'>
                        <div className='flex items-center mb-7 max-lg:flex-col-reverse max-lg:gap-5 max-lg:mb-5'>
                           <div className='rounded-[20px] w-[100px] h-[100px] flex justify-center items-center bg-white mr-5 max-md:mr-0'>
                              <img className='block w-[53px] h-[46px]' src={plateIcon} alt="" />
                           </div>
                           <div>
                              <div className='sm-title mb-1 '>Organic Foods Only</div>
                              <div className='text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                           </div>
                        </div>
                        <div className='flex items-center max-lg:flex-col-reverse max-lg:gap-5'>
                           <div className='rounded-[20px] w-[100px] h-[100px] flex justify-center items-center bg-white mr-5 max-md:mr-0'>
                              <img className='block w-[53px] h-[46px]' src={mailboxIcon} alt="" />
                           </div>
                           <div>
                              <div className='sm-title mb-1 '>Quality Standards</div>
                              <div className='text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                           </div>
                        </div>
                     </div>
                     <Button variant='primary' text='Shop Now' to='/shop' />
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default About;