import React from 'react';
import { HeroBanner } from '@/widgets/';
import shopBannerImg from '@/assets/images/hero-banners/shop.jpg';
import { PageWrapper } from '@/shared/layouts';
import CartContainer from '@/features/cart/CartContainer';
import { useAppSelector } from '@/shared/hooks';
import { selectCartItems } from '@/features/cart/model';
import { ShoppingCart } from 'lucide-react'
import Button from '@/shared/ui/Button/Button';

const Cart: React.FC = () => {
   const cartItems = useAppSelector(selectCartItems)
   const isEmpty = cartItems.length === 0

   return (
      <>
         <PageWrapper>
            {isEmpty ? (
               <div className="flex flex-col items-center justify-center py-24 text-center">
                  <ShoppingCart className="w-20 h-20 text-gray-300 mb-6" />

                  <h2 className="text-4xl font-bold mb-2">
                     Your cart is empty
                  </h2>

                  <p className="text mb-6">
                     Looks like you haven’t added anything yet
                  </p>
                  <Button text='Go to shop' variant='primary' to='/shop' />
               </div>
            ) : (
               <>
                  <HeroBanner text='Your cart' image={shopBannerImg} />
                  <CartContainer />
               </>

            )}
         </PageWrapper>
      </>
   );
};

export default Cart;