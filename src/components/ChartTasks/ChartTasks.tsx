import { FC, useEffect } from 'react';
import RESP_MOCK, { RESP_MOCK2, RESP_MOCK3 } from '../../data/constants';
import { chartApi, useGetChartQuery } from '../../store/chartApi';
import s from './ChartTasks.module.scss';
import st from './ChartTaskRecursive/ChartTasksRecursive.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { transformCopy } from '../../store/utils';
import { ChartTaskRecursive } from './ChartTaskRecursive/ChartTaskRecursive';

export const ChartTasks: FC = () => {
  const { data = transformCopy(RESP_MOCK) } = useGetChartQuery('');

  const dispatch = useAppDispatch();

  const handleDataSource2 = () => {
    dispatch(chartApi.util.updateQueryData('getChart', '', () => transformCopy(RESP_MOCK2)));
  };

  const handleDataSource3 = () => {
    dispatch(chartApi.util.updateQueryData('getChart', '', () => transformCopy(RESP_MOCK3)));
  };

  useEffect(() => {
    const [dateStart, dateEnd] = data!.period
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

  return (
    <section className={s.chart_tasks}>
      <div className={s.inner_heading}>
        <span>Work item</span>
        <button type="button" onClick={handleDataSource2}>
          DataSource2
        </button>
        <button type="button" onClick={handleDataSource3}>
          data3
        </button>
      </div>
      <div className={s.tasks_list}>
        <div className={st.tasks_list_item} />
        <ChartTaskRecursive taskElem={data?.chart} />
      </div>
    </section>
  );
};
