import RESP_MOCK from 'data/mockData';
import { ChartData, ChartTask } from '../data/types';

export const transformChart = (elem: ChartTask, lvl = 1) => {
  elem.level = lvl;
  elem.open = true;
  elem.subtasks = elem.sub?.length || 0;
  if (elem?.subtasks) {
    elem?.sub?.forEach((item) => {
      transformChart(item, lvl + 1);
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
      1 + Math.abs(newDateStart.getTime() - newDateEnd.getTime()) / 3600 / 24 / 1000
    );

    deepCopy.dateStart = `${newDateStart.getFullYear()}-${
      newDateStart.getMonth() + 1
    }-${newDateStart.getDate()}`;
    deepCopy.daysAmount = datesDiff;
    transformChart(deepCopy.chart);
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
