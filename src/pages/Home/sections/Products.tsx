import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useGetProductsQuery } from '@/features/product/api/productsApi';
import { TProduct } from '@/features/product/model';
import { getRandomProducts } from '@/utils';
import ProductCard from '@/shared/ui/ProductCard/ProductCard';
import ProductCardLoader from '@/shared/ui/ProductCardLoader/ProductCardLoader';
import Button from '@/shared/ui/Button/Button';

const Products: React.FC = () => {
   const { data, isLoading, error } = useGetProductsQuery({ page: 1, limit: 24 })
   let randomProducts: TProduct[] = [];

   if (data?.items) {
      randomProducts = getRandomProducts(data.items, 8)
   }

   return (
      <>
         <div className='section'>
            <div className='container'>
               <div className='text-center mb-10'>
                  <div className="subtext mb-2">Categories</div>
                  <div className='title'>Our Products</div>
               </div>
               <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 mb-24 max-lg:mb-20 max-md:mb-16 max-sm:mb-10'>
                  {error ? (
                     <div className='col-span-full pt-28 text-lg font-bold text-red-500 text-center'>{`Error loading related products: ${JSON.stringify(error)}`}</div>
                  ) : (
                     isLoading ? (
                        Array.from({ length: 8 }).map((_, index) => (
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
               <div className='flex justify-center'>
                  <Button to='/shop' variant='primary' text='Load More' />
               </div>
            </div>
         </div>
      </>
   );
};

export default Products;