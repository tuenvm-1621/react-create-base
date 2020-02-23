import { compose, createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore, persistReducer, createTransform } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import withRedux from 'next-redux-wrapper';
import nextReduxSaga from 'next-redux-saga';

import rootReducer from '../reducers';
import rootSaga from '../sagas';

const PERSIST_KEY = 'primary';
const persistConfig = {
  key: PERSIST_KEY,
  storage,
  stateReconciler: autoMergeLevel2,
  // whitelist: ['options'],
  transforms: [
    createTransform(
      inboundState => ({ ...inboundState, error: '' }),
      outboundState => ({ ...outboundState, error: '' })
      // { whitelist: ['options'] }
    ),
  ],
};

const sagaMiddleware = createSagaMiddleware();

const configStore = () => createStore(
  persistReducer(persistConfig, rootReducer),
  ((process.browser && window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose)(applyMiddleware(sagaMiddleware)
  )
);

export const store = configStore();
export const persistor = persistStore(store);
export const withReduxSaga = (BaseComponent) => withRedux(configStore())(nextReduxSaga(BaseComponent));

if (module.hot) {
  module.hot.accept('../reducers', () => {
    const nextRootReducer = require('../reducers').default;
    store.replaceReducer(persistReducer(persistConfig, nextRootReducer));
  });
}

sagaMiddleware.run(rootSaga);
