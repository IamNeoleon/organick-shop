import { RouteObject } from 'react-router-dom';
import { MainLayout } from '@/shared/layouts';
import { Home, About, Shop, ProductPage, Cart } from '@/pages/';

export const routes: RouteObject[] = [
   {
      path: '/',
      element: <MainLayout />,
      children: [
         { index: true, element: <Home /> },
         { path: 'about', element: <About /> },
         { path: 'shop', element: <Shop /> },
         { path: 'shop/:id', element: <ProductPage /> },
         { path: 'cart', element: <Cart /> },
      ],
   },
];
