import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, RESP_MOCK } from '../../data/constants';
import { ChartData } from '../../data/types';

export const fetchChart = createAsyncThunk('diagram', async () => {
  try {
    const { data }: { data: ChartData } = await axios.get(BASE_URL);
    return data;
  } catch (err) {
    console.error(err);
    return RESP_MOCK;
  }
});

const initialState: { chart: ChartData } = {
  chart: RESP_MOCK,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChart.fulfilled, (state, action) => {
      state.chart = action.payload;
    });
  },
});

export default apiSlice.reducer;
