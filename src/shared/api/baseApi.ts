import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
   reducerPath: 'baseApi',
   baseQuery: fetchBaseQuery({
      baseUrl: 'https://76ba0f505211cf48.mokky.dev',
   }),
   endpoints: () => ({})
});
