import React from 'react';
import { Dropdown } from '@/shared/ui';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectFilters, setCategory, setOrder } from '../model';

const categoriesList = [
   "vegetable",
   "fruit",
   "nuts",
   "bean",
   "groceries"
]

const orderSortList = [
   "Price (ASC)",
   "Price (DESC)",
   "Rating (ASC)",
   "Rating (DESC)"
]

const ShopFilters: React.FC = () => {
   const { selectedCategory, selectedOrder } = useAppSelector(selectFilters)
   const dispatch = useAppDispatch();

   const handleCategoryChange = (category: string) => {
      dispatch(setCategory(category));
   };

   const handleOrderChange = (order: string) => {
      dispatch(setOrder(order));
   }

   return (
      <div className='mt-3'>
         <div className="container">
            <div className='flex justify-between max-xs:flex-col max-xs:items-center max-xs:gap-2'>
               <Dropdown options={categoriesList} selected={selectedCategory} onSelect={handleCategoryChange} label='category' defaultValue='all products' />
               <Dropdown options={orderSortList} selected={selectedOrder} onSelect={handleOrderChange} label='order' defaultValue='Default order' />
            </div>
         </div>
      </div>
   );
};

export default ShopFilters;