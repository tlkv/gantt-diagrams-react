import { FC } from 'react';
import { Layout } from 'modules/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { StoreWrapper } from 'store/StoreWrapper';
import { RoutesWrapper } from 'modules/Router/RoutesWrapper';

export const App: FC = () => {
  return (
    <StoreWrapper>
      <BrowserRouter>
        <Layout>
          <RoutesWrapper />
        </Layout>
      </BrowserRouter>
    </StoreWrapper>
  );
};
