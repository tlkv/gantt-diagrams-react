import { FC, useContext } from 'react';
import { ChartData } from 'data/types';
import { chartApi, useGetChartQuery } from '../../store/chartApi';
import s from './ChartHeader.module.scss';
import { useAppDispatch } from '../../store/hooks';
import { transformCopy } from '../../store/utils';
import { RESP_MOCK2, MOCK_DATA_5Y } from '../../data/mockData';
import { ChartContext } from '../../modules/ContextWrapper';

export const ChartHeader: FC = () => {
  const { data } = useGetChartQuery('');

  const { scrollRef } = useContext(ChartContext);

  const dispatch = useAppDispatch();

  const handleDataSource = (chartAltData: ChartData) => {
    scrollRef.current?.scrollIntoView();
    dispatch(chartApi.util.updateQueryData('getChart', '', () => transformCopy(chartAltData)));
  };

  return (
    <header className={s.header}>
      <h2 className={s.header_title}>
        {data?.project} / {data?.period}
      </h2>
      <div className={s.btn_wrapper}>
        <button type="button" className={s.alt_button} onClick={() => handleDataSource(RESP_MOCK2)}>
          Load Mock Data 2
        </button>
        <button
          type="button"
          className={s.alt_button}
          style={{ fontWeight: 900 }}
          onClick={() => handleDataSource(MOCK_DATA_5Y)}>
          Load data for 5 years
        </button>
        <a
          href={`data:text/json;charset=utf-8,${encodeURIComponent(
            JSON.stringify(data, null, '\t')
          )}`}
          download="export.json"
          className={s.header_btn}>
          <span className={s.btn_text}>Export</span>
        </a>
      </div>
    </header>
  );
};
