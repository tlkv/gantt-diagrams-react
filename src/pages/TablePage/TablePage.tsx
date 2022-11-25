import { useEffect, FC } from 'react';
import { toast } from 'react-toastify';
import { BASE_URL, RESP_DEFAULT, TOAST_TIMEOUT } from '../../data/constants';
import s from './TablePage.module.scss';
import { useGetDiagramQuery } from '../../store/diagramsApi';

export const TablePage: FC = () => {
  const { data = RESP_DEFAULT, isError } = useGetDiagramQuery('');

  if (isError) {
    toast.error('Request failed. Loaded mock data instead :-)', {
      autoClose: TOAST_TIMEOUT,
    });
  }

  return (
    <div className={s['table-wrapper']}>
      <h2>Table Page</h2>
      <div style={{ whiteSpace: 'pre' }}>{JSON.stringify(data, null, 4)}</div>
    </div>
  );
};
