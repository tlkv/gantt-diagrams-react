import RESP_MOCK from 'data/mockData';
import { ChartData, ChartTask } from '../data/types';

export const transformChart = (
  { chart, dateStart }: { chart: ChartTask; dateStart?: string },
  lvl = 1
) => {
  chart.level = lvl;
  chart.open = true;
  chart.subtasks = chart.sub?.length || 0;

  chart.line_length = Math.round(
    1 +
      (new Date(chart.period_end).getTime() - new Date(chart.period_start).getTime()) /
        (24 * 1000 * 3600)
  );

  if (dateStart) {
    chart.offset = Math.round(
      (new Date(chart.period_start).getTime() - new Date(dateStart).getTime()) / (24 * 1000 * 3600)
    );
  }

  if (chart?.subtasks) {
    chart?.sub?.forEach((item) => {
      transformChart({ chart: item, dateStart }, lvl + 1);
    });
  }
};

export const transformCopy = (data: ChartData): ChartData => {
  try {
    const deepCopy: ChartData = JSON.parse(JSON.stringify(data));
    // eslint-disable-next-line no-unsafe-optional-chaining
    const [newDateStart, newDateEnd] = deepCopy.period
      ?.split('-')
      ?.map((i) => i.split('.'))
      ?.map((i) => new Date(Number(i[2]), Number(i[1]) - 1, Number(i[0])));
    newDateStart.setDate(
      newDateStart.getDate() - (!newDateStart.getDay() ? 6 : newDateStart.getDay() - 1)
    );
    newDateEnd.setDate(newDateEnd.getDate() + ((7 - newDateEnd.getDay()) % 7));
    const datesDiff = Math.round(
      1 + Math.abs(newDateStart.getTime() - newDateEnd.getTime()) / (24 * 1000 * 3600)
    );

    deepCopy.dateStart = `${newDateStart.getFullYear()}-${
      newDateStart.getMonth() + 1
    }-${newDateStart.getDate()}`;
    deepCopy.daysAmount = datesDiff;
    transformChart(deepCopy);
    return deepCopy;
  } catch (err) {
    console.error(err);
  }
  return transformCopy(RESP_MOCK);
};

export const toggleShow = (elem: ChartTask, fId: number): boolean => {
  if (elem.id === fId) {
    elem.open = !elem.open;
    return true;
  }
  if (elem?.sub) {
    elem?.sub?.forEach((item) => {
      toggleShow(item, fId);
    });
  }
  return false;
};
