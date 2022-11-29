import { Spin } from 'antd';
import { Suspense } from 'react';
import { FcWrapper } from '../../data/types';

export const SuspenseWrapper: FcWrapper = ({ children }) => {
  return (
    <Suspense fallback={<Spin style={{ display: 'block', margin: ' 50px auto' }} size="large" />}>
      {children}
    </Suspense>
  );
};
