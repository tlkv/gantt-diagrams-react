import { FC } from 'react';
import { Layout } from 'modules/Layout/Layout';
import { BrowserRouter } from 'react-router-dom';
import { StoreWrapper } from 'store/StoreWrapper';
import { RoutesWrapper } from 'modules/Router/RoutesWrapper';
import ErrorBoundary from '../modules/ErrorBoudary';
import { ContextWrapper } from '../modules/ContextWrapper';

export const App: FC = () => {
  console.log('rerender App');
  return (
    <StoreWrapper>
      <BrowserRouter>
        <ErrorBoundary>
          <Layout>
            <ContextWrapper>
              <RoutesWrapper />
            </ContextWrapper>
          </Layout>
        </ErrorBoundary>
      </BrowserRouter>
    </StoreWrapper>
  );
};
