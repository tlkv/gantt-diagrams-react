import { Navigate } from 'react-router-dom';
import { NotFoundPage } from 'pages/NotFoundPage/NotFoundPage';
import { TablePage } from '../../pages/TablePage/TablePage';

export const ROUTES_LIST = [
  { path: '/', component: <TablePage /> },
  { path: '/404', component: <NotFoundPage /> },
  { path: '*', component: <Navigate to="/404" /> },
];
