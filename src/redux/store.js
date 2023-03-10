import createSagaMiddleware from 'redux-saga'
import { createWrapper } from 'next-redux-wrapper'
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from './reducers/index'
import rootSaga from './sagas/rootSaga'
import logger from 'redux-logger'

// const bindMiddleware = (middleware) => {
//   if (process.env.NODE_ENV !== 'production') {
//     const { composeWithDevTools } = require('redux-devtools-extension')
//     return composeWithDevTools(applyMiddleware(...middleware))
//   }
//   return applyMiddleware(...middleware)
// }

export const makeStore = (context) => {
  let sagaMiddleware = createSagaMiddleware();
  const middleware = [sagaMiddleware, logger];
  const store = configureStore({
    reducer: rootReducer,
    devTools:true,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({serializableCheck: false}).concat(middleware),
  });

  store.sagaTask = sagaMiddleware.run(rootSaga)

  return store
}

export const wrapper = createWrapper(makeStore)
