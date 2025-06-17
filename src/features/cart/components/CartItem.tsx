import React, { useEffect, useState } from 'react';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { TCartProduct, onDeleteItem, updateCountItem } from '../model/';
import { useAppDispatch } from '@/shared/hooks';


const CartItem: React.FC<TCartProduct> = ({ id, name, price, quantity, imageUrl }) => {
   const dispatch = useAppDispatch();
   const [countItems, setCountItems] = useState<number>(quantity);
   const [total, setTotal] = useState<number>()

   const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(e.target.value);
      if (!isNaN(value)) {
         setCountItems(value);
      }
   }

   const handleDeleteItem = () => {
      dispatch(onDeleteItem(id))
   }

   useEffect(() => {
      setTotal(price * countItems)
      dispatch(updateCountItem({ id, quantity: countItems }))
   }, [countItems])

   return (
      <>
         <motion.div
            layout
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-between relative border-b-2 py-3"
         >
            <div className='basis-1/2 max-sm:basis-full'>
               <div className='flex items-center'>
                  <Link to={`/shop/${id}`}>
                     <div className='aspect-[3/4] max-w-[120px]'>
                        <img className='block w-full h-full object-cover' src={imageUrl} alt="product image" />
                     </div>
                  </Link>
                  <div className='pl-3 basis-full flex items-center justify-between max-lg:flex-col max-lg:items-start gap-2'>
                     <div>
                        <div className='text-lg font-semibold mb-3 max-lg:mb-1'>{name}</div>
                        <div className='text-primary font-bold text-lg font-osans'>${price}</div>
                     </div>
                     <div className='flex items-center justify-between border rounded-lg h-8'>
                        <button disabled={countItems === 1} onClick={() => setCountItems(prev => --prev)} className='disabled:text-grey px-1'><Minus width={20} /></button>
                        <div className='h-full border-x px-1 flex items-center'>
                           <input onChange={handleChangeInput} className='text-center text-base font-medium w-7 outline-none' type="number" value={countItems} />
                        </div>
                        <button onClick={() => setCountItems(prev => ++prev)} className='px-1'><Plus width={20} /></button>
                     </div>
                  </div>
               </div>

            </div>
            <div className='max-sm:hidden pr-28 text-xl font-medium'>${total}</div>
            <button onClick={handleDeleteItem} className='hover:text-grey transition-colors absolute top-1/2 right-0 -translate-y-1/2'>
               <Trash2 width={25} />
            </button>
         </motion.div>
      </>
   );
};

export default CartItem;