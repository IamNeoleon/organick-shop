import React from 'react';
import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion';
import { Header, Footer } from '@/widgets/'

const MainLayout: React.FC = () => {
   const location = useLocation()

   return (
      <>
         <Header />
         <AnimatePresence mode="wait">
            <main key={location.pathname}>
               <Outlet />
            </main>
         </AnimatePresence>
         <Footer />
      </>
   )
}

export default MainLayout
