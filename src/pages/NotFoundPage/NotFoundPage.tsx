import { FC } from 'react';
import s from './NotFoundPage.module.scss';

export const NotFoundPage: FC = () => {
  console.log('render NotFoundPage');
  return <div className={s.not_found_page}>Not found</div>;
};
