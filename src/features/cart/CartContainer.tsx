import React, { useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/shared/hooks/';
import { selectCart, setCartFromLs, setCartSum } from './model';
import { getCartFromLs, saveCartToLs } from '@/utils';
import CartTableHeader from './components/CartTableHeader';
import CartItem from './components/CartItem';
import Button from '@/shared/ui/Button/Button';

interface ICartContainerProps { }

const CartContainer: React.FC<ICartContainerProps> = () => {
   const dispatch = useAppDispatch()
   const { cartItems, cartTotal } = useAppSelector(selectCart)

   const calculateCartTotal = () => {
      let sum = 0

      for (let i = 0; i < cartItems.length; i++) {
         const item = cartItems[i];

         sum += item.price * item.quantity
      }

      return sum
   }

   useEffect(() => {
      const cartFromLs = getCartFromLs();
      if (cartItems.length === 0 && cartFromLs.length > 0) {
         dispatch(setCartFromLs(cartFromLs));
      }
   }, [dispatch]);

   useEffect(() => {
      saveCartToLs(cartItems);
      dispatch(setCartSum(calculateCartTotal()))
   }, [cartItems, dispatch]);

   return (
      <>
         <CartTableHeader />
         <div>
            <AnimatePresence>
               {cartItems?.map(cartItem => (
                  <CartItem key={cartItem.id} id={cartItem.id} name={cartItem.name} price={cartItem.price} quantity={cartItem.quantity} imageUrl={cartItem.imageUrl} />
               ))}
            </AnimatePresence>
         </div>
         <div className='pt-9 text-right flex flex-col items-end'>
            <div className="text-xl font-osans flex items-center justify-end gap-3 mb-1">Subtotal: <span className='text-2xl font-medium'>${cartTotal}</span></div>
            <div className='text-base italic mb-4'>Taxes and shipping are calculated at checkout</div>
            <Button text='Go to checkout' variant='primary' />
         </div>
      </>
   );
};

export default CartContainer;