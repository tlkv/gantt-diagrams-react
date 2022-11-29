import { FC, useEffect, useState } from 'react';
import { v4 } from 'uuid';
import s from './ChartCalendar.module.scss';
import { DAYS_AMOUNT_DEFAULT, DEF_DATE } from '../../../data/constants';
import { getMonthDay, getWeekData, getWeekYear, isWeekend } from '../../../utils/dateHelpers';

export const ChartCalendar: FC<{ period?: string }> = ({ period }) => {
  const [{ dateStart, daysAmount }, setDates] = useState({
    dateStart: new Date(DEF_DATE),
    daysAmount: DAYS_AMOUNT_DEFAULT,
  });

  useEffect(() => {
    if (period) {
      try {
        // eslint-disable-next-line no-unsafe-optional-chaining
        const [newDateStart, newDateEnd] = period
          ?.split('-')
          ?.map((i) => i.split('.'))
          ?.map((i) => new Date(Number(i[2]), Number(i[1]) - 1, Number(i[0])));
        console.log(
          'newDateEnd.getDay()',
          newDateStart.getDay(),
          'newDateEnd.getDay()',
          newDateEnd.getDay()
        );
        newDateStart.setDate(
          newDateStart.getDate() - (!newDateStart.getDay() ? 6 : newDateStart.getDay() - 1)
        );
        newDateEnd.setDate(newDateEnd.getDate() + ((7 - newDateEnd.getDay()) % 7));
        console.log('newDateStart', newDateStart, 'newDateEnd', newDateEnd);
        const datesDiff = Math.round(
          1 + Math.abs(newDateStart.getTime() - newDateEnd.getTime()) / 3600 / 24 / 1000
        );
        console.log(
          'newDateEnd.getDay()',
          newDateStart.getDay(),
          'newDateEnd.getDay()',
          newDateEnd.getDay()
        );
        setDates({ dateStart: newDateStart, daysAmount: datesDiff });
      } catch (err) {
        console.error(err);
      }
    }
  }, [period]);

  return (
    <div className={s.chart_timeline_background}>
      <div className={s.timeline_weeks}>
        {new Array(Math.round(daysAmount / 7)).fill(0).map((elem, ind) => (
          <div key={v4()} className={s.week_item}>
            {getWeekData(dateStart, ind)} &apos;
            <span className={s.light_text}>{getWeekYear(dateStart, ind)}</span>
          </div>
        ))}
      </div>
      <div className={s.timeline_days}>
        {new Array(daysAmount).fill(0).map((elem, ind) => (
          <div key={v4()} className={s.day_item_container}>
            <div className={s.day_item_content}>
              <span className={isWeekend(dateStart, ind) ? s.light_text : ''}>
                {getMonthDay(dateStart, ind)}
              </span>
            </div>
            <div className={s.day_item_bottom} />
          </div>
        ))}
      </div>
    </div>
  );
};
