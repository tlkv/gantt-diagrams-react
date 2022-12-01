import { FC } from 'react';
import { v4 } from 'uuid';
import { Route, Routes } from 'react-router-dom';
import { ROUTES_LIST } from './routes';

export const RoutesWrapper: FC = () => {
  console.log('rerender RoutesWrapper');
  return (
    <Routes>
      {ROUTES_LIST.map(({ path, component }) => (
        <Route path={path} element={component} key={v4()} />
      ))}
    </Routes>
  );
};
