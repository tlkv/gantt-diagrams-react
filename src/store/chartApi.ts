import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { toast } from 'react-toastify';
import { ChartData } from '../data/types';
import { BASE_URL, TOAST_TIMEOUT } from '../data/constants';
import { MOCK_DATA_5Y } from '../data/mockData';
import { transformCopy } from './utils';

export const chartApi = createApi({
  reducerPath: 'chartApi',
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),

  endpoints: (builder) => ({
    getChart: builder.query<ChartData, string>({
      queryFn: () => {
        return { data: transformCopy(MOCK_DATA_5Y) };
      },

      onCacheEntryAdded(arg, { updateCachedData }) {
        setTimeout(async (): Promise<void> => {
          try {
            const result = await fetch(BASE_URL);
            const data: ChartData = await result.json();
            updateCachedData(() => transformCopy(data));
            toast.success('Data fetched successfully.', {
              autoClose: TOAST_TIMEOUT,
            });
          } catch (err) {
            toast.info('Request failed. Chart will be filled with mock data.', {
              autoClose: TOAST_TIMEOUT,
            });
          }
        }, 200);
      },
    }),
  }),
});

export const { useGetChartQuery } = chartApi;
