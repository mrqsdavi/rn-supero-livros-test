import {applyMiddleware, compose, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import reducers from '../ducks/index';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/index';
import {
  seamlessImmutableReconciler,
  seamlessImmutableTransformCreator,
} from 'redux-persist-seamless-immutable';

const transformerConfig = {};

const persistConfig = {
  key: 'supero-davi-test',
  storage: AsyncStorage,
  stateReconciler: seamlessImmutableReconciler,
  transforms: [seamlessImmutableTransformCreator(transformerConfig)],
};

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistedReducer = persistReducer(persistConfig, reducers);

const store = createStore(
  persistedReducer,
  {},
  composeEnhancers(applyMiddleware(...middlewares)),
);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

if (module.hot) {
  // Enable Webpack hot module replacement for reducers
  module.hot.accept('../ducks/index', () => {
    const nextRootReducer = require('../ducks/index');
    store.replaceReducer(nextRootReducer);
  });
}

export {store, persistor};
