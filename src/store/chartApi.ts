import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { ChartData } from '../data/types';
import { BASE_URL, TOAST_TIMEOUT } from '../data/constants';
import RESP_MOCK from '../data/mockData';
import { transformCopy, transformData } from './utils';

export const chartApi = createApi({
  reducerPath: 'chartApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  // fix URL
  endpoints: (builder) => ({
    getChart: builder.query<ChartData, string>({
      queryFn: async () => {
        return { data: transformCopy(RESP_MOCK) };
      },

      async onCacheEntryAdded(arg, { updateCachedData, cacheEntryRemoved }) {
        setTimeout(async () => {
          try {
            const result = await fetch(BASE_URL);
            const data: ChartData = await result.json();
            transformData(data.chart);
            updateCachedData(() => data);
            // toast.success('Data fetched successfully.', {
            //   autoClose: TOAST_TIMEOUT,
            // });
          } catch (err) {
            // toast.info('GET request failed. Chart will be filled with mock data.', {
            //   autoClose: TOAST_TIMEOUT,
            // });
          }
        }, 500);
      },
    }),
  }),
});

export const { useGetChartQuery } = chartApi;
