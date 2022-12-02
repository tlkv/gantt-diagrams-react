import { FC, useContext } from 'react';
import { CELL_WIDTH } from 'data/constants';
import { ChartTask } from '../../../data/types';
import s from './ChartTimelineRecursive.module.scss';
import { ChartContext } from '../../../modules/ContextWrapper';

const ChartTimelineRecursive: FC<{ taskElem?: ChartTask }> = ({ taskElem }) => {
  const { toggleExpand } = useContext(ChartContext);

  return (
    <>
      <div
        className={s.chart_item}
        onClick={taskElem?.sub ? () => toggleExpand(taskElem?.id) : undefined}
        style={{
          cursor: taskElem?.subtasks ? 'pointer' : 'default',
        }}>
        <div
          className={`${s.chart_line} ${s[`chart_line_type_${taskElem?.level}`] || ''}`}
          style={{
            marginLeft: (taskElem?.offset || 0) * CELL_WIDTH,
            width: (taskElem?.line_length || 0) * CELL_WIDTH,
          }}
        />
        <div className={s.chart_task_title}>{taskElem?.title}</div>
      </div>
      {taskElem?.open &&
        taskElem?.sub?.map((subTask) => {
          return <ChartTimelineRecursive key={subTask.id} taskElem={subTask} />;
        })}
    </>
  );
};

export default ChartTimelineRecursive;
