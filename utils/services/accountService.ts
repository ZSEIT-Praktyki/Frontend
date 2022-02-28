import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@utils/assets/constants/routes";

export const accountApi = createApi({
  reducerPath: "account",
  baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include" }),
  endpoints: (builder) => ({
    getActiveListings: builder.query<ListingMinified[], unknown>({
      query: () => "/listings/managment/active",
    }),
    getNotActiveListings: builder.query<ListingMinified[], unknown>({
      query: () => "/listings/managment/not-active",
    }),
  }),
});

export const { useGetActiveListingsQuery, useGetNotActiveListingsQuery } =
  accountApi;
