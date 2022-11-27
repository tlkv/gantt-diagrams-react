import { FC } from 'react';
import { ChartHeader } from 'components/ChartHeader/ChartHeader';
import { ChartTasks } from '../../components/ChartTasks/ChartTasks';
import { ChartTimeline } from '../../components/ChartTimeline/ChartTimeline';

export const ChartPage: FC = () => {
  return (
    <>
      <ChartHeader />
      <ChartTasks />
      <ChartTimeline />
    </>
  );
};
