import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
   initial: { opacity: 0, y: 20 },
   animate: { opacity: 1, y: 0 },
   exit: { opacity: 0, y: -20 },
};

const pageTransition = {
   duration: 0.4,
};

const PageWrapper: React.FC<React.PropsWithChildren> = ({ children }) => {
   return (
      <motion.main
         variants={pageVariants}
         initial="initial"
         animate="animate"
         exit="exit"
         transition={pageTransition}
      >
         {children}
      </motion.main>
   );
};

export default PageWrapper;
