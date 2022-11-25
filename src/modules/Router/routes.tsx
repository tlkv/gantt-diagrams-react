import { Navigate } from 'react-router-dom';
import { CounterPage } from 'pages/CounterPage/CounterPage';
import { MainPage } from 'pages/MainPage/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { TablePage } from '../../pages/TablePage/TablePage';

export const ROUTES_LIST = [
  { path: '/counter', component: <CounterPage /> },
  { path: '/', component: <TablePage /> },
  { path: '/main', component: <MainPage /> },
  { path: '/404', component: <NotFoundPage /> },
  { path: '*', component: <Navigate to="/404" /> },
];
