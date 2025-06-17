import React from 'react';
import { Link } from 'react-router-dom';
import ReactPaginate from 'react-paginate';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '@/shared/hooks';
import { selectFilters, setCurrentPage } from './model';
import { useGetProductsQuery } from './api/productsApi';
import { ProductCard, ProductCardLoader } from '@/shared/ui';


const ProductListContainer: React.FC = () => {
   const dispatch = useAppDispatch();
   const { selectedCategory, currentPage, searchValue, selectedOrder } = useAppSelector(selectFilters);
   const { data, isLoading, error } = useGetProductsQuery({ page: currentPage, limit: 12, category: selectedCategory, search: searchValue, sortBy: selectedOrder });

   const handlePageClick = (selectedItem: { selected: number }) => {
      dispatch(setCurrentPage(selectedItem.selected + 1));
   };

   return (
      <>
         <div className="container py-6">
            <div className='grid grid-cols-4 gap-5 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1'>
               {
                  error ? (
                     <div className='col-span-full pt-28 text-lg font-bold text-red-500 text-center'>{`Error loading products: ${JSON.stringify(error)}`}</div>
                  ) : (
                     isLoading ? (
                        Array.from({ length: 12 }).map((_, index) => (
                           <ProductCardLoader key={index} />
                        ))
                     ) : (
                        <AnimatePresence>
                           {
                              data?.items.map(product => (
                                 <motion.div
                                    key={product.id}
                                    layout
                                    transition={{ duration: 0.3 }}
                                 >
                                    <Link to={`${product.id}`}>
                                       <ProductCard
                                          name={product.name}
                                          category={product.category}
                                          imageUrl={product.imageUrl}
                                          price={product.price}
                                          rating={product.rating}
                                       />
                                    </Link>
                                 </motion.div>
                              ))
                           }
                        </AnimatePresence>
                     )
                  )
               }
            </div>
            <div className="flex mt-8">
               {data && (
                  <ReactPaginate
                     previousLabel={<ChevronLeft size={25} />}
                     nextLabel={<ChevronRight size={25} />}
                     breakLabel={'...'}
                     pageCount={data.meta.total_pages}
                     marginPagesDisplayed={2}
                     pageRangeDisplayed={3}
                     onPageChange={handlePageClick}
                     containerClassName={'flex gap-2 text-lg font-medium text-primary'}
                     pageClassName={`relative w-[45px] h-[45px] border border-grey rounded cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                     pageLinkClassName={'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center'}
                     activeClassName={'bg-mint text-white'}
                     previousClassName={`w-[45px] h-[45px] relative border border-grey rounded cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                     previousLinkClassName='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center'
                     nextClassName={`w-[45px] h-[45px] relative border border-grey rounded cursor-pointer ${isLoading ? 'opacity-50 cursor-not-allowed' : ''}`}
                     nextLinkClassName='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center'
                     disabledClassName={'opacity-50 cursor-not-allowed'}
                     forcePage={currentPage - 1}
                  />
               )}
            </div>
         </div>
      </>
   );
};

export default ProductListContainer;