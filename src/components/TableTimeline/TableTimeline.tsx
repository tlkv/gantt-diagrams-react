import { FC } from 'react';
import RESP_MOCK from '../../data/constants';
import { useGetChartQuery } from '../../store/chartApi';
import s from './TableTimeline.module.scss';

export const TableTimeline: FC = () => {
  const { data = RESP_MOCK } = useGetChartQuery('');

  return (
    <section className={s.table_timeline}>
      <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(data, null, 5)}</div>
      <div className={s.shadow_right} />
    </section>
  );
};
