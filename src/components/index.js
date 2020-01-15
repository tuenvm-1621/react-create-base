import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Child from './Child';
import { store, persistor } from '../store';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Child />
    </PersistGate>
  </Provider>
);
