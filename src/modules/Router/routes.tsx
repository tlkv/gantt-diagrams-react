import { Navigate } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { ChartPage } from '../../pages/ChartPage/ChartPage';

export const ROUTES_LIST = [
  { path: '/', component: <ChartPage /> },
  { path: '/404', component: <NotFoundPage /> },
  { path: '*', component: <Navigate to="/404" /> },
];
