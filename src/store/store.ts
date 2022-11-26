import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import countReducer from './reducers/countSlice';
import { chartApi } from './chartApi';

const store = configureStore({
  reducer: {
    count: countReducer,
    [chartApi.reducerPath]: chartApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(chartApi.middleware),
});

export default store;

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
