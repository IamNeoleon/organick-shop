import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const ProductCardLoader: React.FC = () => {
   return (
      <div className="border rounded-[30px] p-[30px] shadow-md w-[335px]">
         {/* Tag */}
         <div className="mb-2">
            <Skeleton width={100} height={25} borderRadius={10} />
         </div>

         {/* Image */}
         <div className="mb-4 mx-auto flex justify-center">
            <Skeleton width={275} height={265} borderRadius={10} />
         </div>

         {/* Title */}
         <div className="mb-1">
            <Skeleton width={150} height={20} />
         </div>
         <div className='flex justify-between items-center'>
            {/* Price */}
            <div className="flex items-center gap-2">
               <Skeleton width={50} height={20} />
               <Skeleton width={30} height={20} />
            </div>

            {/* Rating */}
            <div className="mt-2">
               <Skeleton width={100} height={20} />
            </div>
         </div>
      </div>
   );
};

export default ProductCardLoader;
