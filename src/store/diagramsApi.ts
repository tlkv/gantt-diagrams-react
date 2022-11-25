import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../data/constants';
import { ChartData } from '../data/types';

export const diagramsApi = createApi({
  reducerPath: 'diagramsApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getDiagram: builder.query<ChartData, string>({
      query: (arg) => arg,
    }),
  }),
});

// Export hooks for usage in function components, which are
// auto-generated based on the defined endpoints
export const { useGetDiagramQuery } = diagramsApi;
