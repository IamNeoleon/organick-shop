import React from 'react';
import { useGetProductsQuery } from '@/features/product/api/productsApi';
import { TProduct } from '@/features/product/model';
import { getRandomProducts } from '@/utils';
import ProductCard from '@/shared/ui/ProductCard/ProductCard';
import ProductCardLoader from '@/shared/ui/ProductCardLoader/ProductCardLoader';
import Button from '@/shared/ui/Button/Button';

const Offer: React.FC = () => {
   const { data, isLoading, error } = useGetProductsQuery({ page: 1, limit: 16 })
   let randomProducts: TProduct[] = [];

   if (data?.items) {
      randomProducts = getRandomProducts(data.items, 4)
   }

   return (
      <>
         <div className="section bg-primary">
            <div className="container">
               <div className='flex justify-between items-center mb-12 max-lg:flex-col max-lg:text-center'>
                  <div className='max-lg:mb-3'>
                     <div className="subtext">
                        Offer
                     </div>
                     <div className='title text-white'>
                        We Offer Organic For You
                     </div>
                  </div>
                  <Button to='/shop' variant='yellow' text='Load More Products' />
               </div>
               <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-24 max-lg:mb-20 max-md:mb-16 max-sm:mb-10'>
                  {error ? (
                     <div className='col-span-full pt-28 text-lg font-bold text-red-500 text-center'>{`Error loading related products: ${JSON.stringify(error)}`}</div>
                  ) : (
                     isLoading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                           <ProductCardLoader key={index} />
                        ))
                     ) : (
                        randomProducts && randomProducts.map(product => (
                           <ProductCard
                              key={product.id}
                              name={product.name}
                              category={product.category}
                              imageUrl={product.imageUrl}
                              price={product.price}
                              rating={product.rating}
                           />
                        ))
                     )
                  )
                  }
               </div>
            </div>
         </div>
      </>
   );
};

export default Offer;