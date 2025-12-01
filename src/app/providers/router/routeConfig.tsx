import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/shared/layouts';
import PageLoader from '@/shared/ui/PageLoader/PageLoader';

const Home = lazy(() => import('@/pages/Home/Home'));
const About = lazy(() => import('@/pages/About/About'));
const Shop = lazy(() => import('@/pages/Shop/Shop'));
const ProductPage = lazy(() => import('@/pages/ProductPage/ProductPage'));
const Cart = lazy(() => import('@/pages/Cart/Cart'));

export const routes: RouteObject[] = [
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {
            index: true,
            element: (
               <Suspense fallback={<PageLoader />}>
                  <Home />
               </Suspense>
            ),
         },
         {
            path: 'about',
            element: (
               <Suspense fallback={<PageLoader />}>
                  <About />
               </Suspense>
            ),
         },
         {
            path: 'shop',
            element: (
               <Suspense fallback={<PageLoader />}>
                  <Shop />
               </Suspense>
            ),
         },
         {
            path: 'shop/:id',
            element: (
               <Suspense fallback={<PageLoader />}>
                  <ProductPage />
               </Suspense>
            ),
         },
         {
            path: 'cart',
            element: (
               <Suspense fallback={<PageLoader />}>
                  <Cart />
               </Suspense>
            ),
         },
      ],
   },
];

