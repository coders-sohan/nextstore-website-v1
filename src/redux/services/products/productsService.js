import { baseApi } from "../../api/baseApi";

const producsApiService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => `/product/get-all`,
      providesTags: ["AllProducts"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllProductsQuery } = producsApiService;
