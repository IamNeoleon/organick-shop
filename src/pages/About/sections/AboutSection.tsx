import React from 'react';
import { ArrowRight } from 'lucide-react';
import aboutImg from '@/assets/images/pages/about/about/01.jpg';
import tractorSvg from '@/assets/icons/tractor.svg';
import factorySvg from '@/assets/icons/factory.svg';

const AboutSection: React.FC = () => {
   return (
      <>
         <section className='section'>
            <div className="container">
               <div className='flex items-center max-lg:flex-col-reverse max-lg:text-center max-lg:gap-5'>
                  <div className='basis-1/2'>
                     <img src={aboutImg} alt="about image" />
                  </div>
                  <div className='basis-1/2 pt-10 pl-10 max-lg:p-0'>
                     <div className="subtext mb-2">About Us</div>
                     <div className='title mb-2'>
                        We do Creative <br />
                        Things for Success
                     </div>
                     <div className='text mb-11 max-md:mb-6'>
                        <p className='mb-8 max-md:mb-4'>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                        <p>Simply dummy text of the printing and typesetting industry. Lorem had ceased to been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley.</p>
                     </div>
                     <div className='flex items-center gap-16 mb-14 max-lg:gap-5 max-lg:text-left max-xs:flex-col'>
                        <div className='flex items-center gap-4'>
                           <img src={tractorSvg} alt="tractor icon" />
                           <span className='text-2xl font-semibold text-primary'>Modern Agriculture Equipment</span>
                        </div>
                        <div className='flex items-center gap-4'>
                           <img src={factorySvg} alt="factory icon" />
                           <span className='text-2xl font-semibold text-primary'>No growth hormones are used</span>
                        </div>
                     </div>
                     <button className="btn btn-primary flex items-center max-lg:mx-auto">
                        <span className='mr-4'>Explore More</span> <div className='w-5 h-5 rounded-full bg-[#335b6b] flex justify-center items-center'><ArrowRight width={13} /></div>
                     </button>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutSection;