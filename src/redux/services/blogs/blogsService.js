import { baseApi } from "../../api/baseApi";

const blogsApiService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => `/blog/get-all`,
      providesTags: ["AllBlogs"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBlogsQuery } = blogsApiService;
