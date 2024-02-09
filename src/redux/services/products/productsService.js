import { baseApi } from "../../api/baseApi";

const productsApiService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/get-all`,
      providesTags: ["AllProducts"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery } = productsApiService;
