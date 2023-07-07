import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import allreducers from './combineReducers';

const store = configureStore({
  reducer: allreducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTools: process.env.NODE_ENV !== 'production',  // devtools disabled for production
  // preloadedState,   It is out initial state
  // enhancers: [batchedSubscribe(debounceNotify)],
});

export default store;