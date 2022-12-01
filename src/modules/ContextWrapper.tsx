import { createContext, ReactNode, useMemo } from 'react';
import { toggleShow } from '../store/utils';
import { useAppDispatch } from '../store/hooks';
import { chartApi } from '../store/chartApi';

export const ChartContext = createContext({} as { toggleExpand: (id?: number) => void });

export const ContextWrapper = ({ children }: { children: ReactNode }) => {
  const dispatch = useAppDispatch();

  const toggleExpand = (id?: number) => {
    if (!id) return;
    dispatch(
      chartApi.util.updateQueryData('getChart', '', (currentChart) => {
        toggleShow(currentChart.chart, id);
      })
    );
  };

  const chartStore = useMemo(
    () => ({
      toggleExpand,
    }),
    []
  );

  return <ChartContext.Provider value={chartStore}>{children}</ChartContext.Provider>;
};
