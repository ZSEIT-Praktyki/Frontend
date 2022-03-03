import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API } from "@utils/assets/constants/routes";

interface SearchProps {
  hasMore: boolean;
  results: ListingMinified[];
  amount: number;
}

interface PagingProps {
  query: string;
  page: number;
  min: number;
  max: number;
  subcategory_id: number;
  sort: "ASC" | "DESC";
  city: string;
}

export const searchApi = createApi({
  reducerPath: "search",
  baseQuery: fetchBaseQuery({ baseUrl: API, credentials: "include" }),
  endpoints: (builder) => ({
    getSubcategories: builder.query<SubcategoryProps[], any>({
      query: () => "/listings/subcategories",
    }),
    getSearchResults: builder.query<SearchProps, PagingProps>({
      query: ({
        max = 9999,
        min = 0,
        query = "",
        page = 1,
        subcategory_id,
        sort,
        city,
      }) => ({
        url: "/listings/search",
        method: "GET",
        params: {
          min: min * 100,
          max: max * 100,
          query,
          page,
          sort,
          city,

          ...(subcategory_id && { subcategory_id }),
        },
      }),
    }),
  }),
});

export const { useGetSubcategoriesQuery, useGetSearchResultsQuery } = searchApi;
