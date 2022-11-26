import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../data/constants';
import { ChartData } from '../data/types';

export const chartApi = createApi({
  reducerPath: 'chartApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    getChart: builder.query<ChartData, string>({
      query: (arg) => {
        console.log('arg', arg);
        console.log('Hello I am here!');
        return `test/${arg}`;
      },
    }),
  }),
});

export const { useGetChartQuery } = chartApi;
