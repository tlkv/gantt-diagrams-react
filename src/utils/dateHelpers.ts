export const getWeekData = (dateStart: Date, weekInd: number) => {
  const weekFirstDay = new Date(dateStart.getTime() + 24 * 3600 * 1000 * weekInd * 7);
  const weekLastDay = new Date(dateStart.getTime() + 24 * 3600 * 1000 * ((weekInd + 1) * 7 - 1));

  const weekFirstDate = weekFirstDay.getDate().toString().padStart(2, '0');
  const weekFirstMonth = weekFirstDay.toLocaleString('en', { month: 'long' }).slice(0, 3);

  const weekLastDate = weekLastDay.getDate().toString().padStart(2, '0');
  const weekLastMonth = weekLastDay.toLocaleString('en', { month: 'long' }).slice(0, 3);

  return `${weekFirstDate} ${weekFirstMonth} - ${weekLastDate} ${weekLastMonth}`;
};

export const getWeekYear = (dateStart: Date, weekInd: number) => {
  return new Date(dateStart.getTime() + 24 * 3600 * 1000 * ((weekInd + 1) * 7 - 1))
    .getFullYear()
    .toString()
    .slice(2);
};

export const getMonthDay = (dateStart: Date, dayInd: number) => {
  return new Date(dateStart.getTime() + 24 * 3600 * 1000 * dayInd).getDate();
};

export const isWeekend = (dateStart: Date, dayInd: number) => {
  const current = new Date(dateStart.getTime() + 24 * 3600 * 1000 * dayInd).getDay();
  return current === 6 || !current;
};
