import { lazy, Suspense } from 'react';
import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/shared/layouts';
import PageLoader from '@/shared/ui/PageLoader/PageLoader';
import { CheckoutFake } from '@/features/checkout/components/CheckoutFake';

const Home = lazy(() => import('@/pages/Home/Home'));
const About = lazy(() => import('@/pages/About/About'));
const Shop = lazy(() => import('@/pages/Shop/Shop'));
const ProductPage = lazy(() => import('@/pages/ProductPage/ProductPage'));
const Cart = lazy(() => import('@/pages/Cart/Cart'));
const Checkout = lazy(() => import('@/pages/Checkout/Checkout'));
const NotFound = lazy(() => import('@/pages/NotFound/NotFound'));


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
         {
            path: 'checkout',
            element: (
               <Suspense fallback={<PageLoader />}>
                  <Checkout />
               </Suspense>
            ),
         },
         {
            path: 'checkout/payment',
            element: (
               <CheckoutFake />
            )
         },
         {
            path: '*',
            element: (
               <Suspense fallback={<PageLoader />}>
                  <NotFound />
               </Suspense>
            )
         }
      ],
   },
];

