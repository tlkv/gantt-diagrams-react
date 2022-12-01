import { FC, useContext } from 'react';
import { ChartTask } from '../../../data/types';
import s from './ChartTimelineRecursive.module.scss';
import { ChartContext } from '../../../modules/ContextWrapper';

const ChartTimelineRecursive: FC<{ taskElem?: ChartTask }> = ({ taskElem }) => {
  const { toggleExpand } = useContext(ChartContext);

  return (
    <>
      <div
        className={s.chart_line}
        onClick={() => toggleExpand(taskElem?.id)}
        style={{
          cursor: taskElem?.subtasks ? 'pointer' : 'default',
        }}>
        {taskElem?.title}
      </div>
      {taskElem?.open &&
        taskElem?.sub?.map((subTask) => {
          return <ChartTimelineRecursive key={subTask.id} taskElem={subTask} />;
        })}
    </>
  );
};

export default ChartTimelineRecursive;
