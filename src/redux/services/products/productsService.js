import { baseApi } from "../../api/baseApi";

const productsApiService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/get-all`,
      providesTags: ["AllProducts"],
    }),
    getProductById: builder.query({
      query: (id) => `/product/get-product-by-id/${id}`,
      providesTags: ["Product"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery, useGetProductByIdQuery } =
  productsApiService;
