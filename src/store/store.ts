import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import countReducer from './reducers/countSlice';

const store = configureStore({
  reducer: {
    count: countReducer,
  },
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
