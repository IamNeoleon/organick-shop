import { ReactNode } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from '@/app/store';
import { BrowserRouter } from 'react-router-dom';

export const AppProviders = ({ children }: { children: ReactNode }) => {
   return (
      <ReduxProvider store={store}>
         <BrowserRouter>
            {children}
         </BrowserRouter>
      </ReduxProvider>
   );
};
