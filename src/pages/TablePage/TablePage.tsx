import { FC } from 'react';
import { TableHeader } from 'components/TableHeader/TableHeader';
import { TableTasks } from '../../components/TableTasks/TableTasks';
import { TableTimeline } from '../../components/TableTimeline/TableTimeline';

export const TablePage: FC = () => {
  return (
    <>
      <TableHeader />
      <TableTasks />
      <TableTimeline />
    </>
  );
};
