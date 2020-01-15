import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Next from './next';
import { store, persistor } from '../store';

export default () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <Next />
    </PersistGate>
  </Provider>
);
