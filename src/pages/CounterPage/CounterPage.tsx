import { FC } from 'react';
import { useAppDispatch, useAppSelector } from 'store/hooks';
import { decrement, increment, selectCounter } from 'store/reducers/countSlice';
import s from './CounterPage.module.scss';

export const CounterPage: FC = () => {
  const count = useAppSelector(selectCounter);
  const dispatch = useAppDispatch();

  return (
    <div className={s.counter_wrapper}>
      <div>
        <div>{count}</div>
      </div>
      <div>
        <button type="button" onClick={() => dispatch(decrement())}>
          -
        </button>
        <button type="button" onClick={() => dispatch(increment())}>
          +
        </button>
      </div>
    </div>
  );
};
