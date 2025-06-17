import React from 'react';
import { HeroBanner } from '@/widgets/';
import shopBannerImg from '@/assets/images/hero-banners/shop.jpg';
import { PageWrapper } from '@/shared/layouts';
import CartContainer from '@/features/cart/CartContainer';

const Cart: React.FC = () => {

   return (
      <>
         <PageWrapper>
            <HeroBanner text='Your cart' image={shopBannerImg} />
            <div className='py-12'>
               <div className="container">
                  <CartContainer />
               </div>
            </div>
         </PageWrapper>
      </>
   );
};

export default Cart;