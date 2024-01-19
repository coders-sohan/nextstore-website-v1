import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://nextstore-server.onrender.com/api/v1",
    headers: {
      "Content-Type": "application/json",
    },
  }),
  tagTypes: ["AllBlogs", "AllProducts"],
  endpoints: () => ({}),
});
