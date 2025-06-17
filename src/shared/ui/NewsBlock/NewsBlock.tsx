import React from 'react';
import { ArrowRight } from 'lucide-react';

interface INewsBlockProps { }

const NewsBlock: React.FC<INewsBlockProps> = () => {
   return (
      <div className='relative rounded-[30px] max-lg:max-w-[610px]'>
         <img className='rounded-[30px]' src={''} alt="" />
         <div className="max-[425px]:hidden max-sm:top-5 max-sm:left-5 max-sm:w-14 max-sm:h-auto max-sm:py-1 max-sm:rounded-lg absolute top-10 left-8 w-20 h-20 rounded-full bg-white flex justify-center items-center">
            <div className='max-sm:gap-1 max-sm:text-lg max-sm:flex max-sm:items-center text-primary text-2xl font-extrabold text-center leading-none'>
               <div>25</div>
               <span className='text-xl max-sm:text-base'>Nov</span>
            </div>
         </div>
         <div className='max-[425px]:bottom-1 max-[475px]:p-6 max-sm:p-8 w-[90%] absolute -bottom-[68px] max-lg:bottom-[20px] max-lg:p-10 left-1/2 -translate-x-1/2 p-14 bg-white rounded-[30px] shadow-[0_20px_35px_0_rgba(167,167,167,0.25)]'>
            <div className='flex gap-2 items-center mb-3 max-[475px]:mb-0'>
               <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.3161 1.45446C11.4741 0.516515 10.298 0 9 0C7.69504 0 6.51512 0.51339 5.67701 1.44553C4.82983 2.38793 4.41705 3.66873 4.51397 5.05176C4.70608 7.78031 6.71848 9.99994 9 9.99994C11.2815 9.99994 13.2905 7.78076 13.4856 5.05265C13.5838 3.68212 13.1684 2.404 12.3161 1.45446ZM16.6152 19.9999H1.38482C1.18547 20.0026 0.988051 19.9594 0.806921 19.8734C0.625791 19.7874 0.46551 19.6609 0.337738 19.503C0.0564959 19.1561 -0.0568664 18.6825 0.0270736 18.2035C0.392256 16.1133 1.53194 14.3575 3.32323 13.1249C4.91463 12.0307 6.93049 11.4285 9 11.4285C11.0695 11.4285 13.0854 12.0312 14.6768 13.1249C16.4681 14.3571 17.6077 16.1129 17.9729 18.203C18.0569 18.682 17.9435 19.1557 17.6623 19.5026C17.5345 19.6606 17.3743 19.7872 17.1931 19.8732C17.012 19.9592 16.8146 20.0025 16.6152 19.9999Z" fill="#EFD372" />
               </svg>
               <span className='text-primary text-lg'>By Rachi Card</span>
            </div>
            <div className='mb-3'>
               <div className='text-primary text-2xl font-bold truncate whitespace-nowrap overflow-hidden'>The Benefits of Vitamin D & How to Get It</div>
               <div className='text max-[475px]:text-sm'>
                  Simply dummy text of the printing and typesetting industry. Lorem Ipsum
               </div>
            </div>
            <button className="justify-center items-center btn btn-yellow max-sm:py-4 max-sm:px-8 max-sm:text-base">
               <span className='mr-[10px]'>Read More</span>
               <div className='w-[19px] h-[19px] bg-primary flex justify-center items-center rounded-full'>
                  <ArrowRight width={13} color='#fff' />
               </div>
            </button>
         </div>
      </div>
   );
};

export default NewsBlock;