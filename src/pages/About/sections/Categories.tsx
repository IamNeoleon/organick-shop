import React from 'react';
import categoryImage1 from '@/assets/images/pages/about/categories/01.jpg';
import categoryImage2 from '@/assets/images/pages/about/categories/02.jpg';
import categoryImage3 from '@/assets/images/pages/about/categories/03.jpg';
import categoryImage4 from '@/assets/images/pages/about/categories/04.jpg';

const Categories: React.FC = () => {
   return (
      <>
         <section className='section bg-primary'>
            <div className="container">
               <div className='text-center mb-7'>
                  <div className="subtext">About Us</div>
                  <div className="title text-white">
                     What We Offer for You
                  </div>
               </div>
               <div className='grid grid-cols-4 gap-5 max-xl:grid-cols-3 max-lg:grid-cols-2 max-sm:grid-cols-1'>
                  <div className='aspect-[167/157] bg-white flex justify-center rounded-3xl'>
                     <img className='rounded-3xl w-full h-full object-cover' src={categoryImage1} alt="category image" />
                  </div>
                  <div className='aspect-[167/157] bg-white flex justify-center rounded-3xl'>
                     <img className='rounded-3xl w-full h-full object-cover' src={categoryImage2} alt="category image" />
                  </div>
                  <div className='aspect-[167/157] bg-white flex justify-center rounded-3xl'>
                     <img className='rounded-3xl w-full h-full object-cover' src={categoryImage3} alt="category image" />
                  </div>
                  <div className='aspect-[167/157] bg-white flex justify-center rounded-3xl'>
                     <img className='rounded-3xl w-full h-full object-cover' src={categoryImage4} alt="category image" />
                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Categories;