import { FC } from 'react';
import { ChartHeader } from 'components/ChartHeader/ChartHeader';
import { ChartTasks } from '../../components/ChartTasks/ChartTasks';
import { ChartTimeline } from '../../components/ChartTimeline/ChartTimeline';
import ErrorBoundary from '../../components/UI/ErrorBoudary';

const ChartPage: FC = () => {
  return (
    <>
      <ChartHeader />
      <ErrorBoundary>
        <ChartTasks />
      </ErrorBoundary>
      <ErrorBoundary>
        <ChartTimeline />
      </ErrorBoundary>
    </>
  );
};

export default ChartPage;
