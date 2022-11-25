import { FC } from 'react';
import s from './Footer.module.scss';

export const Footer: FC = () => {
  return (
    <footer className={s.footer}>
      <div className={s['footer-content']}>footer</div>
    </footer>
  );
};
