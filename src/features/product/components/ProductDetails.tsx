import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { TTab } from '../model';
import { TCartProduct } from '@/features/cart/model'
import ProductTabs from './ProductTabs';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { onAddItem, selectCart } from '@/features/cart/model';
import { useNavigate } from 'react-router-dom';
import Button from '@/shared/ui/Button/Button';

interface IProductDetailsProps {
   id: number,
   title: string,
   category: string,
   imageUrl: string,
   description: string,
   price: number,
   rating: number,
   addInfo: string
}

const ProductDetails: React.FC<IProductDetailsProps> = ({ id, title, category, imageUrl, description, price, addInfo }) => {
   const dispatch = useAppDispatch()
   const navigate = useNavigate()
   const { cartItems } = useAppSelector(selectCart)
   const [inputValue, setInputValue] = useState<number>(1);

   const isAdded = cartItems.some(item => item.id === id)

   const productTabs: TTab[] = [
      {
         id: 1,
         title: 'Product Description',
         text: description
      },
      {
         id: 2,
         title: 'Additional Info',
         text: addInfo
      }
   ]

   const handleChangeInput = (value: string) => {
      const parsed = Number(value);
      if (!isNaN(parsed) && parsed > 0) {
         setInputValue(parsed);
      }
   }

   const onAddToCart = () => {
      if (!isAdded) {
         const item: TCartProduct = {
            id,
            name: title,
            imageUrl,
            price,
            quantity: inputValue
         }

         dispatch(onAddItem(item))
      } else {
         navigate('/cart')
      }
   }

   return (
      <>
         <div className='flex items-center max-lg:flex-col max-lg:gap-5 max-sm:gap-3 mb-20'>
            <div className='basis-1/2 max-lg:w-full'>
               <div className="max-lg:mx-auto aspect-[590/560] max-w-[590px] border-[3px] rounded-[25px] relative">
                  <img className='p-5 block w-full h-full object-cover' src={imageUrl} alt="product image" />
                  <div className='absolute top-[35px] left-[35px] capitalize bg-primary px-3 py-1 font-osans font-semibold text-[15px] text-white rounded-lg'>{category}</div>
               </div>
            </div>
            <div className='max-xl:pl-6 basis-1/2 max-lg:w-full max-lg:text-center max-lg:pl-0'>
               <div className='text-5xl font-semibold mb-3 max-lg:mb-1 max-sm:text-4xl'>{title}</div>
               <div className='flex mb-3 max-lg:justify-center max-lg:mb-1'>
                  <div className='flex gap-[2px] '>
                     <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                     </svg>
                     <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                     </svg>
                     <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                     </svg>
                     <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                     </svg>
                     <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.67806 1.09367C6.98566 0.189974 8.26378 0.189977 8.57138 1.09367L9.5549 3.98313C9.69285 4.3884 10.0735 4.66091 10.5016 4.66091H13.5818C14.5617 4.66091 14.9569 5.92416 14.1517 6.48262L11.7409 8.15456C11.3741 8.40901 11.2203 8.87584 11.3642 9.29851L12.3036 12.0586C12.6145 12.9718 11.5798 13.7523 10.7871 13.2025L8.19462 11.4046C7.85187 11.1668 7.39758 11.1668 7.05483 11.4046L4.46235 13.2025C3.66969 13.7523 2.63496 12.9718 2.9458 12.0586L3.88528 9.29851C4.02915 8.87584 3.87539 8.40901 3.50851 8.15456L1.09777 6.48263C0.292535 5.92416 0.687722 4.66091 1.66767 4.66091H4.74788C5.17598 4.66091 5.55659 4.3884 5.69454 3.98313L6.67806 1.09367Z" fill="#FFA858" />
                     </svg>
                  </div>
               </div>
               <div className='text-2xl font-bold mb-2 max-lg:mb-1'>
                  ${price}
               </div>
               <div className='text mb-8 max-lg:mb-2'>{description}</div>
               <div className='flex items-center gap-5 max-lg:flex-col max-sm:gap-3'>
                  <div className='flex items-center text-xl font-bold text-primary max-lg:flex-col'>
                     <span className='mr-5 max-lg:mr-0 max-lg:mb-1'>Quantity:</span>
                     <div className='px-3 w-32 h-20 border-2 rounded-2xl border-primary flex items-center justify-between'>
                        <button disabled={inputValue === 1 || isAdded} onClick={() => setInputValue(prev => --prev)}
                           className='h-full w-6 text-2xl font-medium cursor-pointer disabled:text-grey'>
                           <Minus width={20} />
                        </button>
                        <input disabled={isAdded} className='max-w-6 outline-none text-center disabled:text-grey' type="number" value={inputValue} onChange={(e) => handleChangeInput(e.target.value)} />
                        <button disabled={isAdded} onClick={() => setInputValue(prev => ++prev)}
                           className='h-full w-6 text-2xl font-medium cursor-pointer disabled:text-grey'><Plus width={20} /></button>
                     </div>
                  </div>
                  <Button onClick={onAddToCart} text={!isAdded ? 'Add to cart' : 'Added to cart'} variant='primary' />
               </div>
            </div>
         </div>
         <ProductTabs tabs={productTabs} />
      </>
   );
};

export default ProductDetails;


