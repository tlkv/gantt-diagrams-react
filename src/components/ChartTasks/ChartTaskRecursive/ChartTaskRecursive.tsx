import { FC, useContext } from 'react';
import { ChartTask } from '../../../data/types';
import s from './ChartTasksRecursive.module.scss';
import { ChartContext } from '../../../modules/ContextWrapper';

export const ChartTaskRecursive: FC<{ taskElem?: ChartTask }> = ({ taskElem }) => {
  const { toggleExpand } = useContext(ChartContext);

  return (
    <>
      <div
        className={`${s.tasks_list_item} ${
          s[`task_item_type_${(taskElem?.level || 1) % 5}`] || ''
        }`}
        onClick={taskElem?.sub ? () => toggleExpand(taskElem?.id) : undefined}
        style={{
          paddingLeft: 20 * (taskElem?.level || 1),
          cursor: taskElem?.subtasks ? 'pointer' : 'default',
        }}>
        <div
          className={s.tasks_list_arrow}
          style={{
            opacity: taskElem?.sub ? 1 : 0,
            transform: taskElem?.open ? 'rotate(0deg)' : 'rotate(-90deg)',
          }}
        />
        <div className={s.tasks_list_icon} />
        <div className={s.tasks_counter}>{taskElem?.subtasks}</div>
        <div className={s.tasks_title}>{taskElem?.title}</div>
      </div>
      {taskElem?.open &&
        taskElem?.sub?.map((subTask) => {
          return <ChartTaskRecursive taskElem={subTask} key={subTask.id} />;
        })}
    </>
  );
};
