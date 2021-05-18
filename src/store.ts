import { createStore } from 'redux';

import { applicationState, StoreType } from './reducers';

export const newStore = (): StoreType => {
  const store = createStore(applicationState);

  return store;
};
