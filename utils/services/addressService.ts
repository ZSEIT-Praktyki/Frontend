import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { API } from "@utils/assets/constants/routes";

interface StatesProps {
  state: string;
}

export interface AddressProps {
  name: string;
  surname: string;
  street: string;
  street_number: string;
  postal_code: string;
  city: string;
  phone: string;
  state: string;
  address_id: number;
}

export const addressService = createApi({
  reducerPath: "address",
  baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include" }),
  tagTypes: ["Adr"],
  endpoints: (builder) => ({
    getAddresses: builder.query<AddressProps[], any>({
      query: () => "/orders/address",
      providesTags: ["Adr"],
    }),

    getStates: builder.query<StatesProps[], any>({
      query: () => "/orders/states",
    }),

    postAddress: builder.mutation<any, AddressProps>({
      query: (v) => ({
        url: "/orders/address",
        method: "POST",
        body: v,
      }),
      invalidatesTags: ["Adr"],
    }),
  }),
});

export const {
  useGetAddressesQuery,
  usePostAddressMutation,
  useGetStatesQuery,
} = addressService;
