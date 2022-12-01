import { FcWrapper } from 'data/types';
import { Provider } from 'react-redux';
import store from './store';

export const StoreWrapper: FcWrapper = ({ children }) => {
  console.log('rerender StoreWrapper');
  return <Provider store={store}>{children}</Provider>;
};
