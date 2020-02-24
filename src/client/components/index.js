import React from 'react';
import { Provider } from 'react-redux';

import Child from './Child';
import configStore from '../store';

const { store } = configStore();

export default () => (
  <Provider store={store}>
    <Child />
  </Provider>
);
