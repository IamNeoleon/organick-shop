import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from '@/shared/api/baseApi'
import filterReducer from '@/features/product/model/filtersSlice'
import cartReducer from '@/features/cart/model/cartSlice'

export const store = configureStore({
   reducer: {
      [baseApi.reducerPath]: baseApi.reducer,
      filters: filterReducer,
      cart: cartReducer
   },
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(baseApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch