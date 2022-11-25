import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { BASE_URL, RESP_DEFAULT } from '../../data/constants';
import { ChartData } from '../../data/types';

export const fetchDiagram = createAsyncThunk('diagram', async () => {
  try {
    const { data }: { data: ChartData } = await axios.get(BASE_URL);
    return data;
  } catch (err) {
    console.error(err);
    return RESP_DEFAULT;
  }
});

const initialState: { diagram: ChartData } = {
  diagram: RESP_DEFAULT,
};

export const apiSlice = createSlice({
  name: 'api',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDiagram.fulfilled, (state, action) => {
      state.diagram = action.payload;
    });
  },
});

export default apiSlice.reducer;
