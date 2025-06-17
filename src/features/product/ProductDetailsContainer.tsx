import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetProductByIdQuery } from './api/productsApi';
import { AnimatePresence, motion } from 'framer-motion';
import ProductDetails from './components/ProductDetails';

const ProductDetailsContainer: React.FC = () => {
   const { id } = useParams<{ id: string }>()
   const { data, isLoading, error } = useGetProductByIdQuery(Number(id))

   return (
      <>
         <div className='py-32 max-lg:py-20 max-md:py-14 max-xs:py-10'>
            <div className="container">
               {
                  error ? (
                     <div className='pt-28 text-lg font-bold text-red-500 text-center'>{`Error loading product: ${JSON.stringify(error)}`}</div>
                  ) : (
                     isLoading ? (
                        <div className='text-center text-2xl font-bold'>Loading...</div>
                     ) : (
                        <AnimatePresence mode="wait">
                           {
                              data && (
                                 <motion.div
                                    key={data.id}
                                    initial={{ opacity: 0, y: 50 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -50 }}
                                    transition={{ duration: 0.5, ease: "easeInOut" }}
                                 >
                                    <ProductDetails
                                       id={data.id}
                                       title={data.name}
                                       category={data.category}
                                       imageUrl={data.imageUrl}
                                       description={data.description}
                                       price={data.price}
                                       rating={data.rating}
                                       addInfo={'Welcome to the world of natural and organic. Here you can discover the bounty of nature. We have grown on the principles of health, ecology, and care. We aim to give our customers a healthy chemical-free meal for perfect nutrition. It offers about 8–10% carbs. Simple sugars — such as glucose and fructose — make up 70% and 80% of the carbs in raw.'}
                                    />
                                 </motion.div>
                              )
                           }
                        </AnimatePresence>
                     )
                  )
               }
            </div>
         </div>
      </>
   );
};

export default ProductDetailsContainer;