import { FC } from 'react';
import { useGetChartQuery } from '../../store/chartApi';
import s from './ChartTasks.module.scss';
import st from './ChartTaskRecursive/ChartTasksRecursive.module.scss';
import { ChartTaskRecursive } from './ChartTaskRecursive/ChartTaskRecursive';

export const ChartTasks: FC = () => {
  const { data } = useGetChartQuery('');

  return (
    <section className={s.chart_tasks}>
      <header className={s.inner_heading}>
        <span>Work item</span>
      </header>
      <div className={s.tasks_list}>
        <div className={st.tasks_list_item} />
        <ChartTaskRecursive taskElem={data?.chart} />
      </div>
    </section>
  );
};
