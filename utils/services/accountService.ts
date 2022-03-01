import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@utils/assets/constants/routes";

export const accountApi = createApi({
  reducerPath: "account",
  baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include" }),
  tagTypes: ["Acc"],
  endpoints: (builder) => ({
    getActiveListings: builder.query<ListingMinified[], unknown>({
      query: () => "/listings/managment/active",
      providesTags: ["Acc"],
    }),
    getNotActiveListings: builder.query<ListingMinified[], unknown>({
      query: () => "/listings/managment/not-active",
      providesTags: ["Acc"],
    }),
    removeListing: builder.mutation<ListingMinified[], number>({
      query: (listing_id) => ({
        url: "/listings/managment/archive/" + listing_id,
        method: "PUT",
      }),
      invalidatesTags: ["Acc"],
    }),
    activateListing: builder.mutation<ListingMinified[], number>({
      query: (listing_id) => ({
        url: "/listings/managment/activate/" + listing_id,
        method: "PUT",
      }),
      invalidatesTags: ["Acc"],
    }),
  }),
});

export const {
  useGetActiveListingsQuery,
  useGetNotActiveListingsQuery,
  useRemoveListingMutation,
  useActivateListingMutation,
} = accountApi;
