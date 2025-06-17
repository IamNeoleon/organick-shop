import React from 'react';
import { TProduct } from '@/features/product/model'
import { useGetProductsQuery } from '@/features/product/api/productsApi'
import { getRandomProducts } from '@/utils';
import { ProductCard, ProductCardLoader } from '@/shared/ui';


const RelatedProducts: React.FC = () => {
   const dataProducts = useGetProductsQuery({ page: 1, limit: 20 })
   let randomProducts: TProduct[] = [];

   if (dataProducts?.data?.items) {
      const products = dataProducts?.data?.items;
      randomProducts = getRandomProducts(products, 4)
   }

   return (
      <>
         <div className='py-32 max-lg:py-20 max-md:py-14 max-xs:py-10'>
            <div className='container'>
               <div className="text-5xl font-extrabold text-center mb-10">Related Products</div>
               <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
                  {
                     dataProducts.error ? (
                        <div className='col-span-full pt-28 text-lg font-bold text-red-500 text-center'>{`Error loading related products: ${JSON.stringify(dataProducts.error)}`}</div>
                     ) : (
                        dataProducts.isLoading ? (
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

export default RelatedProducts;