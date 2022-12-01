import { Spin } from 'antd';
import { FC, ReactElement, Suspense } from 'react';
import { FcWrapper } from '../data/types';

export const SuspenseWrapper: FcWrapper = ({ children }) => {
  console.log('susp');
  return (
    <Suspense fallback={<Spin style={{ display: 'block', margin: ' 50px auto' }} size="large" />}>
      {children}
    </Suspense>
  );
};

export const SuspenseElem: FC<ReactElement> = (elem) => {
  return <SuspenseWrapper>{elem}</SuspenseWrapper>;
};
