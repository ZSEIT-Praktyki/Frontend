import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@utils/assets/constants/routes";

interface UpdateProps {
  listing_id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export interface SoldProps extends ListingMinified {
  order_id: number;
  purchased_at: Date;
}

export const accountApi = createApi({
  reducerPath: "account",
  baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include" }),
  tagTypes: ["Acc"],
  endpoints: (builder) => ({
    getActiveListings: builder.query<ListingMinified[], unknown>({
      query: () => "/listings/managment/active",
      providesTags: ["Acc"],
    }),

    getSingleListing: builder.query<ListingProps, number>({
      query: (id) => "/listings/managment/" + id,
      providesTags: ["Acc"],
    }),

    updateSingleListing: builder.mutation<ListingMinified[], UpdateProps>({
      query: ({ listing_id, ...rest }) => ({
        method: "PUT",
        url: "/listings/managment/" + listing_id,
        body: {
          ...rest,
          price: rest?.price * 100,
        },
      }),
      invalidatesTags: ["Acc"],
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

    getPurchases: builder.query<SoldProps[], any>({
      query: () => "/orders/history",
    }),

    getSold: builder.query<SoldProps[], any>({
      query: () => "/orders/sold",
    }),
  }),
});

export const {
  useGetActiveListingsQuery,
  useGetNotActiveListingsQuery,
  useRemoveListingMutation,
  useActivateListingMutation,
  useGetSingleListingQuery,
  useUpdateSingleListingMutation,
  useGetPurchasesQuery,
  useGetSoldQuery,
} = accountApi;
