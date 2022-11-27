import { FC } from 'react';
import RESP_MOCK from '../../data/constants';
import { useGetChartQuery } from '../../store/chartApi';
import s from './ChartTimeline.module.scss';
import { transformCopy } from '../../store/utils';
import { ChartTimelineRecursive } from './ChartTimelineRecursive/ChartTimelineRecursive';

export const ChartTimeline: FC = () => {
  const { data = transformCopy(RESP_MOCK) } = useGetChartQuery('');

  // const {data = RESP_MOCK} = useGetChartQuery('');

  return (
    <section className={s.chart_timeline}>
      <div style={{ whiteSpace: 'pre' }}>
        <ChartTimelineRecursive taskElem={data?.chart} />
      </div>
      <div className={s.shadow_right} />
    </section>
  );
};
