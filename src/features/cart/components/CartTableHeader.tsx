import React from 'react';


const CartTableHeader: React.FC = () => {
   return (
      <>
         <div className="flex items-center justify-between text-lg font-osans font-semibold border-b-2 pb-2">
            <div className=''>
               Product
            </div>
            <div className='max-lg:hidden pr-28'>
               Total
            </div>
         </div>
      </>
   );
};

export default CartTableHeader;