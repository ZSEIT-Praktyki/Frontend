import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@utils/assets/constants/routes";

interface UpdateProps {
  listing_id: number;
  title: string;
  description: string;
  price: number;
  quantity: number;
}

export interface SoldProps {
  order_id: number;
  purchased_at: Date;
  listing: {
    images: ListingImagesProps | null;
    title: string;
    quantity: number;
    price: number;
  };
  buyer_address: {
    name: string;
    surname: string;
    street: string;
    street_number: string;
    apartment_number: string;
    postal_code: string;
    phone: string;
    state: string;
  };
}

export const accountApi = createApi({
  reducerPath: "account",
  baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include" }),
  tagTypes: ["Acc"],
  endpoints: (builder) => ({
    getActiveListings: builder.query<ListingMinified[], unknown>({
      query: () => "/listings/managment/active",
      providesTags: (result) =>
        result
          ? result.map(({ listing_id }) => ({ type: "Acc", listing_id }))
          : ["Acc"],
    }),

    getSingleListing: builder.query<ListingProps, number>({
      query: (id) => "/listings/managment/" + id,
      providesTags: (result) => [
        {
          listing_id: result?.listing_id,
          type: "Acc",
        },
      ],
    }),

    getListingPreview: builder.query<ListingMinified, number>({
      query: (id) => "/listings/preview/" + id,
      providesTags: (result) => [
        {
          listing_id: result?.listing_id,
          type: "Acc",
        },
      ],
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
      invalidatesTags: ({ listing_id }: any) => [{ type: "Acc", listing_id }],
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
      invalidatesTags: ({ listing_id }: any) => [{ type: "Acc", listing_id }],
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
  useGetListingPreviewQuery,
} = accountApi;
