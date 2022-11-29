import { FC } from 'react';
import { Layout } from 'modules/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { StoreWrapper } from 'store/StoreWrapper';
import { RoutesWrapper } from 'modules/Router/RoutesWrapper';
import ErrorBoundary from '../components/UI/ErrorBoudary';
import { SuspenseWrapper } from '../components/UI/SuspenseWrapper';

export const App: FC = () => {
  return (
    <StoreWrapper>
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            <SuspenseWrapper>
              <RoutesWrapper />
            </SuspenseWrapper>
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreWrapper>
  );
};
