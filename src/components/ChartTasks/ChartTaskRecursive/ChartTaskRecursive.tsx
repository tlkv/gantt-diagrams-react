import { FC, useContext } from 'react';
import { ChartTask } from '../../../data/types';
import s from './ChartTasksRecursive.module.scss';
import { ChartContext } from '../../../modules/ContextWrapper';

export const ChartTaskRecursive: FC<{ taskElem?: ChartTask }> = ({ taskElem }) => {
  const { toggleExpand } = useContext(ChartContext);

  return (
    <>
      <div
        className={`${s.tasks_list_item} ${s[`task_item_type_${taskElem?.level}`]}`}
        onClick={() => toggleExpand(taskElem?.id)}
        style={{
          paddingLeft: 20 * (taskElem?.level || 1),
          cursor: taskElem?.subtasks ? 'pointer' : 'default',
        }}>
        <span className={s.tasks_counter}>{taskElem?.subtasks}</span>
        <span className={s.tasks_title}>{taskElem?.title}</span>
      </div>
      {taskElem?.open &&
        !!taskElem?.subtasks &&
        taskElem?.sub?.map((subTask) => {
          return <ChartTaskRecursive taskElem={subTask} key={subTask.id} />;
        })}
    </>
  );
};
