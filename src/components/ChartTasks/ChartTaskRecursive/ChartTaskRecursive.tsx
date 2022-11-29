import { FC } from 'react';
import { ChartTask } from '../../../data/types';
import { useAppDispatch } from '../../../store/hooks';
import { chartApi } from '../../../store/chartApi';
import { toggleShow } from '../../../store/utils';
import s from './ChartTasksRecursive.module.scss';

export const ChartTaskRecursive: FC<{ taskElem?: ChartTask }> = ({ taskElem }) => {
  const dispatch = useAppDispatch();

  const toggleExpand = (id?: number) => {
    if (!id) return;
    dispatch(
      chartApi.util.updateQueryData('getChart', '', (currentChart) => {
        toggleShow(currentChart.chart, id);
      })
    );
  };

  return (
    <div>
      <div className={s.tasks_list_item} onClick={() => toggleExpand(taskElem?.id)}>
        <div
          className={`${s.task_item_inner} ${s[`task_item_type_${taskElem?.level}`]}`}
          style={{ paddingLeft: 20 * (taskElem?.level || 1) }}
        >
          <span className={s.tasks_counter}>{taskElem?.subtasks}</span>
          {taskElem?.title}
        </div>
      </div>
      {taskElem?.open &&
        taskElem?.sub?.map((subTask) => {
          return (
            <div key={subTask.id}>
              <ChartTaskRecursive taskElem={subTask} />
            </div>
          );
        })}
    </div>
  );
};
