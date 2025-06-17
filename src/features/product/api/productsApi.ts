import { baseApi } from "@/shared/api/baseApi";
import { TProduct, IResponseProducts, ProductsQueryParams } from '../model/types'
import { buildSortByParam } from "@/utils/";

export const productsApi = baseApi.injectEndpoints({
   endpoints: (builder) => ({
      getProducts: builder.query<IResponseProducts, ProductsQueryParams>({
         query: ({ page = 1, limit = 10, category, sortBy, search } = {}) => {
            const params: Record<string, any> = { page, limit };

            if (sortBy) {
               params.sortBy = buildSortByParam(sortBy)
            }
            if (category) {
               params.category = category;
            }
            if (search) {
               params.name = `*${search}`;
            }

            return {
               url: '/products',
               params,
            };
         },
      }),
      getProductById: builder.query<TProduct, number>({
         query: (id) => `/products/${id}`,
      }),
   }),
   overrideExisting: false
})

export const { useGetProductsQuery, useGetProductByIdQuery } = productsApi;