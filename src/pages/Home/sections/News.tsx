import React from 'react';
import Button from '@/shared/ui/Button/Button';

const News: React.FC = () => {
   return (
      <>
         <div className="section">
            <div className="container">
               <div className='flex justify-between items-center mb-12 max-lg:flex-col max-lg:text-center'>
                  <div className='max-lg:mb-3'>
                     <div className="subtext">News</div>
                     <div className="title">Discover weekly content about <br /> organic food, & more</div>
                  </div>
                  <Button text='More News' variant='ghost' />
               </div>
               <div className="grid grid-cols-2 gap-11 max-lg:grid-cols-1 max-lg:justify-items-center">
                  {/* <NewsBlock />
                  <NewsBlock /> */}
               </div>
            </div>
         </div>
      </>
   );
};

export default News;