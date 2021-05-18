import { Store } from 'redux';
import { data } from '../data';
import { ActionType } from '../types/ActionType';
import { ActionModel, DataEntry } from '../types/Models';

export interface StateType {
  entries: DataEntry[];
  selectedId: string;
}

let initialState: StateType = {
  entries: data.data,
  selectedId: data.data[0].id,
};

export type StoreType = Store<StateType, ActionModel>;

export function applicationState(state = initialState, action: ActionModel) {
  const newState = { ...state };

  switch (action.type) {
    case ActionType.SELECT_ID:
      newState.selectedId = action.value as string;
      break;
    default:
      return state;
  }

  return newState;
}
