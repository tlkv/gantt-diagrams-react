import { FC } from 'react';
import s from './MainPage.module.scss';

export const MainPage: FC = () => {
  const content = 'Lorem, ipsum dolor sit...';
  return <div className={s.main_page}>{content}</div>;
};
