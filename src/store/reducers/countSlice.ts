import { createSlice } from '@reduxjs/toolkit';
import { DEFAULT_STATE } from '../../data/constants';
import { RootState } from '../store';

const initialState = { ...DEFAULT_STATE };

export const countSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

export const { increment, decrement } = countSlice.actions;

export const selectCounter = (state: RootState) => state.count.value;

export default countSlice.reducer;
