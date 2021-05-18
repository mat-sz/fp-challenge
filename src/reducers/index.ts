import { Store } from 'redux';
import { data } from '../data';
import { ActionModel, DataEntry } from '../types/Models';

export interface StateType {
  entries: DataEntry[];
}

let initialState: StateType = {
  entries: data.data,
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    default:
      return state;
  }

  return newState;
}
