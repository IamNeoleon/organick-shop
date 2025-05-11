import React from 'react';
import { ArrowRight } from 'lucide-react';
import aboutImg from '../assets/about/1.png';
import aboutIcon1 from '../assets/about/icons/1.svg';
import aboutIcon2 from '../assets/about/icons/2.svg';
import Card from '../components/Card';
import TestimonialSlider from '../components/TestimonialSlider';

const Home: React.FC = () => {
   return (
      <>
         {/* Intro */}
         <div className='bg-[url(../assets/intro-bg.jpg)] bg-cover bg-no-repeat bg-center py-[245px] max-lg:py-[150px] max-md:py-[80px]'>
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
                  <div className="justify-center items-center btn btn-yellow">
                     <span className='mr-[10px]'>Explore Now</span>
                     <div className='w-[19px] h-[19px] bg-primary flex justify-center items-center rounded-full'>
                        <ArrowRight width={13} color='#fff' />
                     </div>
                  </div>
               </div>
            </div>
         </div>

         {/* Promo */}
         <div className='section'>
            <div className="container">
               <div className='flex max-md:flex-col max-md:justify-start max-md:items-start gap-9 justify-between items-center'>
                  <div className='max-[375px]:py-10 max-md:py-12 max-lg:py-20 flex-auto max-md:w-full rounded-[30px] py-28 px-14 bg-[url(../assets/promo/1.png)] bg-center bg-cover bg-no-repeat'>
                     <div className="max-[375px]:text-xl max-lg:text-2xl subtext text-white mb-1">Natural!!</div>
                     <div className="max-[375px]:text-3xl max-lg:text-[32px] title text-[40px] text-white">Get Garden <br /> Fresh Fruits</div>
                  </div>
                  <div className='max-[375px]:py-10 max-md:py-12 max-lg:py-20 flex-auto max-md:w-full rounded-[30px] py-28 px-14 bg-[url(../assets/promo/2.png)] bg-center bg-cover bg-no-repeat'>
                     <div className="max-[375px]:text-xl max-lg:text-2xl subtext mb-1">Offer!!</div>
                     <div className="max-[375px]:text-3xl max-lg:text-[32px] title text-[40px]">Get 10% off <br />
                        on Vegetables</div>
                  </div>
               </div>
            </div>
         </div>

         {/* About */}
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
                              <img className='block w-[53px] h-[46px]' src={aboutIcon1} alt="" />
                           </div>
                           <div>
                              <div className='sm-title mb-1 '>Organic Foods Only</div>
                              <div className='text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                           </div>
                        </div>
                        <div className='flex items-center max-lg:flex-col-reverse max-lg:gap-5'>
                           <div className='rounded-[20px] w-[100px] h-[100px] flex justify-center items-center bg-white mr-5 max-md:mr-0'>
                              <img className='block w-[53px] h-[46px]' src={aboutIcon2} alt="" />
                           </div>
                           <div>
                              <div className='sm-title mb-1 '>Quality Standards</div>
                              <div className='text'>Simply dummy text of the printing and typesetting industry. Lorem Ipsum</div>
                           </div>
                        </div>
                     </div>
                     <button className="btn btn-primary flex items-center max-lg:mx-auto">
                        <span className='mr-4'>Shop Now</span> <div className='w-5 h-5 rounded-full bg-[#335b6b] flex justify-center items-center'><ArrowRight width={13} /></div>
                     </button>
                  </div>
               </div>
            </div>
         </div>

         {/* Products */}
         <div className='section'>
            <div className='container'>
               <div className='text-center mb-10'>
                  <div className="subtext mb-2">Categories</div>
                  <div className='title'>Our Products</div>
               </div>
               <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-24 max-lg:mb-20 max-md:mb-16 max-sm:mb-10'>
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
               </div>
               <button className="btn mx-auto btn-primary flex items-center max-lg:mx-auto">
                  <span className='mr-4'>View More</span>
                  <div className='w-5 h-5 rounded-full bg-[#335b6b] flex justify-center items-center'>
                     <ArrowRight width={13} />
                  </div>
               </button>
            </div>
         </div>

         {/* Testimonials */}
         <div className='section'>
            <div className="container">
               <div className='mb-14 text-center max-lg:mb-12 max-md:mb-8 max-sm:md-4'>
                  <div className="subtext mb-2">Testimonials</div>
                  <div className="title">What Our Customer Saying?</div>
               </div>
               <div>
                  <TestimonialSlider />
               </div>
            </div>
         </div>
      </>
   );
};

export default Home;