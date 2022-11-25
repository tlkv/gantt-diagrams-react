import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import countReducer from './reducers/countSlice';
import { diagramsApi } from './diagramsApi';

const store = configureStore({
  reducer: {
    count: countReducer,
    [diagramsApi.reducerPath]: diagramsApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(diagramsApi.middleware),
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
