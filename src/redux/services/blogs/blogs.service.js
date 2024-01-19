import { baseApi } from "../../api/baseApi";

const blogsApiService = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.mutation({
      query: () => ({
        url: "/blog/get-all",
        method: "GET",
      }),
      invalidatesTags: ["AllBlogs"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetAllBlogsMutation } = blogsApiService;
