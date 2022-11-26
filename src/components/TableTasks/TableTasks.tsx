import { FC, useEffect } from 'react';
import { RESP_MOCK } from '../../data/constants';
import { useGetChartQuery } from '../../store/chartApi';
import s from './TableTasks.module.scss';

export const TableTasks: FC = () => {
  const { data = RESP_MOCK, isError } = useGetChartQuery('');

  useEffect(() => {
    const [dateStart, dateEnd] = data.period
      .split('-')
      .map((i) => i.split('.'))
      .map((i) => new Date(Number(i[2]), Number(i[1]) - 1, Number(i[0])));

    console.log(
      'startDate',
      dateStart,
      'endDate',
      dateEnd,
      'diff',
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      Math.round(Math.abs(dateStart - dateEnd) / 3600 / 24 / 1000)
    );
  }, []);
  // const { data = RESP_MOCK, isError } = useGetChartQuery('');
  return (
    <section className={s.table_tasks}>
      <div className={s.inner_heading}>Work item</div>
      <div className={s.tasks_list}>{JSON.stringify(data)}</div>
    </section>
  );
};
