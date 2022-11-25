import { Header } from 'components/Header/Header';
import { ToastContainer } from 'react-toastify';
import { FcWrapper } from 'data/types';
import 'react-toastify/dist/ReactToastify.css';
import s from './Layout.module.scss';

export const Layout: FcWrapper = ({ children }) => {
  return (
    <>
      <Header />
      <ToastContainer limit={1} newestOnTop />
      <div className={s['main-container']}>{children}</div>
    </>
  );
};
