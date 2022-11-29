import { FC } from 'react';
import { ChartTask } from '../../../data/types';
import { useAppDispatch } from '../../../store/hooks';
import { chartApi } from '../../../store/chartApi';
import { toggleShow } from '../../../store/utils';
import s from './ChartTimelineRecursive.module.scss';

const ChartTimelineRecursive: FC<{ taskElem?: ChartTask }> = ({ taskElem }) => {
  const dispatch = useAppDispatch();

  const toggleTimeline = (id: number | undefined) => {
    if (!id) return;
    dispatch(
      chartApi.util.updateQueryData('getChart', '', (currentChart) => {
        toggleShow(currentChart.chart, id);
      })
    );
  };

  return (
    <div>
      <div className={s.chart_line} onClick={() => toggleTimeline(taskElem?.id)}>
        {taskElem?.title}
      </div>
      {taskElem?.open &&
        taskElem?.sub?.map((subTask) => {
          return (
            <div key={subTask.id}>
              <ChartTimelineRecursive taskElem={subTask} />
            </div>
          );
        })}
    </div>
  );
};

export default ChartTimelineRecursive;
