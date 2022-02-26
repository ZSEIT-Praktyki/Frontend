import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@utils/assets/constants/routes";

export const watchlistApi = createApi({
  reducerPath: "watchlist",
  baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include" }),
  tagTypes: ["WList", "WSingle"],
  endpoints: (builder) => ({
    getWatchlist: builder.query<WatchListProps[], any>({
      query: () => "/watchlist",
      providesTags: ["WList"],
    }),

    checkWatchlist: builder.query<{ isIn: boolean }, number>({
      query: (id) => "/watchlist/check?listing_id=" + id,
      providesTags: ["WSingle"],
    }),

    removeWatchlist: builder.mutation<WatchListProps, number>({
      query: (id) => ({
        method: "DELETE",
        url: `/watchlist/${id}`,
      }),
      invalidatesTags: ["WList", "WSingle"],
    }),
    addWatchlist: builder.mutation<WatchListProps, number>({
      query: (id) => ({
        method: "POST",
        url: "/watchlist",
        body: { listing_id: +id },
      }),
      invalidatesTags: ["WList", "WSingle"],
    }),
  }),
});

export const {
  useGetWatchlistQuery,
  useRemoveWatchlistMutation,
  useAddWatchlistMutation,
  useCheckWatchlistQuery,
} = watchlistApi;
