import { FC } from 'react';
import { ChartHeader } from 'components/ChartHeader/ChartHeader';
import { ChartTasks } from '../../components/ChartTasks/ChartTasks';
import { ChartTimeline } from '../../components/ChartTimeline/ChartTimeline';
import s from './ChartPage.module.scss';
import ErrorBoundary from '../../components/UI/ErrorBoudary';

const ChartPage: FC = () => {
  return (
    <>
      <ChartHeader />
      <div className={s.charts_wrapper}>
        <ErrorBoundary>
          <ChartTasks />
        </ErrorBoundary>
        <ErrorBoundary>
          <ChartTimeline />
        </ErrorBoundary>
      </div>
    </>
  );
};

export default ChartPage;
