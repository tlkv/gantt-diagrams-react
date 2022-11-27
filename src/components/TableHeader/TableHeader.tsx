import { FC } from 'react';
import RESP_MOCK from '../../data/constants';
import { useGetChartQuery } from '../../store/chartApi';
import s from './TableHeader.module.scss';

export const TableHeader: FC = () => {
  const { data = RESP_MOCK } = useGetChartQuery('');

  return (
    <header className={s.header}>
      <h2 className={s.header_title}>
        {data.project} / {data.period}
      </h2>
      <button className={s.header_btn} type="button">
        <span className={s.btn_text}>Export</span>
      </button>
    </header>
  );
};
