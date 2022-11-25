import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';
import { FcWrapper } from 'data/types';
import s from './Layout.module.scss';

export const Layout: FcWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <div className={s['main-container']}>{children}</div>
    </>
  );
};
