import { ChartTask } from '../../../data/types';
import { useAppDispatch } from '../../../store/hooks';
import { chartApi } from '../../../store/chartApi';
import { toggleShow } from '../../../store/utils';

export const ChartTimelineRecursive = ({ taskElem }: { taskElem: ChartTask }) => {
  const dispatch = useAppDispatch();

  const toggleExpand = (id: number) => {
    dispatch(
      chartApi.util.updateQueryData('getChart', '', (currentChart) => {
        toggleShow(currentChart.chart, id);
      })
    );
  };
  return (
    <div>
      <div onClick={() => toggleExpand(taskElem.id)}>{taskElem.title}</div>
      {taskElem.open &&
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
