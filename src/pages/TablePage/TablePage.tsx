import { FC } from 'react';
import { toast } from 'react-toastify';
import { TableHeader } from 'components/TableHeader/TableHeader';
import { TOAST_TIMEOUT } from '../../data/constants';
import { useGetChartQuery } from '../../store/chartApi';
import { TableTasks } from '../../components/TableTasks/TableTasks';
import { TableTimeline } from '../../components/TableTimeline/TableTimeline';

export const TablePage: FC = () => {
  const { isError } = useGetChartQuery('');

  if (isError) {
    toast.error('Request failed. Loaded mock data instead :-)', {
      autoClose: TOAST_TIMEOUT,
    });
  }

  return (
    <>
      <TableHeader />
      <TableTasks />
      <TableTimeline />
    </>
  );
};
