import { useEffect, FC } from 'react';
import { getData } from '../../utils/api';
import { BASE_URL } from '../../data/constants';
import s from './TablePage.module.scss';

export const TablePage: FC = () => {
  useEffect(() => {
    const data = getData(BASE_URL);
  }, []);

  return (
    <>
      <h2>Table Page</h2>
      <div className={s['table-wrapper']}>Table Wrapper</div>
    </>
  );
};
