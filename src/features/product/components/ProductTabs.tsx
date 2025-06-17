import React, { useState } from 'react';
import classNames from 'classnames';
import { motion, AnimatePresence } from 'framer-motion';
import { TTab } from '../model';

interface IProductTabsProps {
   tabs: TTab[]
}

const ProductTabs: React.FC<IProductTabsProps> = ({ tabs }) => {
   const [activeTab, setActiveTab] = useState<TTab>(() => tabs[0]);

   return (
      <div className='max-w-[1130px] mx-auto'>
         <div className='flex justify-center gap-5 mb-6 max-md:flex-col'>
            {tabs.map(tab => (
               <motion.div
                  key={tab.id}
                  onClick={() => setActiveTab(tab)}
                  whileTap={{ scale: 0.95 }}
                  className={classNames(
                     'max-md:text-center cursor-pointer font-osans text-2xl font-bold text-primary rounded-2xl bg-lgMint py-6 px-12',
                     {
                        'text-white bg-primary': tab.id === activeTab.id,
                     }
                  )}
               >
                  {tab.title}
               </motion.div>
            ))}
         </div>
         <div>
            <AnimatePresence mode='wait'>
               <motion.p
                  key={activeTab.id}
                  className='text text-center'
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  transition={{ duration: 0.2 }}
               >
                  {activeTab.text}
               </motion.p>
            </AnimatePresence>
         </div>
      </div>
   );
};

export default ProductTabs;