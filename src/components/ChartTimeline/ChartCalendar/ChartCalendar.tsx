import React, { FC, useContext } from 'react';
import s from './ChartCalendar.module.scss';
import { DAYS_AMOUNT_DEFAULT, DEF_DATE } from '../../../data/constants';
import { getMonthDay, getWeekData, getWeekYear, isWeekend } from '../../../utils/dateHelpers';
import { ChartContext } from '../../../modules/ContextWrapper';

export const ChartCalendar: FC<{ dateStart?: string; daysAmount?: number }> = ({
  dateStart,
  daysAmount,
}) => {
  const { scrollRef } = useContext(ChartContext);
  const incomingDate = (dateStart || DEF_DATE).split('-').map(Number);

  // fix date for ios
  const fixedDate = new Date(incomingDate[0], incomingDate[1] - 1, incomingDate[2]);

  const fixedDaysAmount = daysAmount || DAYS_AMOUNT_DEFAULT;

  return (
    <div className={s.chart_timeline_background}>
      <div ref={scrollRef} className={s.scroll_ref} />
      <div className={s.timeline_sticky}>
        <div className={s.timeline_weeks}>
          {Array.from({ length: Math.round(fixedDaysAmount / 7) }, (elem, ind) => (
            <div key={`week_${ind + 1}`} className={s.week_item}>
              {getWeekData(fixedDate, ind)} &apos;
              <span className={s.light_text}>{getWeekYear(fixedDate, ind)}</span>
            </div>
          ))}
        </div>
        <div className={s.timeline_days}>
          {Array.from({ length: fixedDaysAmount }, (elem, ind) => (
            <div key={`day_${ind + 1}`} className={s.day_item_content}>
              <span className={isWeekend(fixedDate, ind) ? s.light_text : ''}>
                {getMonthDay(fixedDate, ind)}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className={s.timeline_columns}>
        {Array.from({ length: fixedDaysAmount }, (_, ind) => (
          <div key={`col_${ind + 1}`} className={s.day_item_column} />
        ))}
      </div>
    </div>
  );
};
