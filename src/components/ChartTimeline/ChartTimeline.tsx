import React, { FC } from 'react';
import { useGetChartQuery } from '../../store/chartApi';
import s from './ChartTimeline.module.scss';
import ChartTimelineRecursive from './ChartTimelineRecursive/ChartTimelineRecursive';
import { ChartCalendar } from './ChartCalendar/ChartCalendar';

export const ChartTimeline: FC = () => {
  const { data } = useGetChartQuery('');

  return (
    <section className={s.chart_timeline}>
      <ChartCalendar dateStart={data?.dateStart} daysAmount={data?.daysAmount} />
      <div className={s.chart_timeline_graphics}>
        <ChartTimelineRecursive taskElem={data?.chart} />
      </div>
    </section>
  );
};
