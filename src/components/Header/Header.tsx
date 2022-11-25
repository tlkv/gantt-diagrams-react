import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';

export const Header: FC = () => {
  return (
    <header className={s.header}>
      <nav className={s.navbar}>
        <NavLink to="/" className={s['header-item']}>
          Home
        </NavLink>
        <NavLink to="/counter" className={s['header-item']}>
          Counter
        </NavLink>
      </nav>
    </header>
  );
};
