import { ActionType } from '../types/ActionType';
import { ActionModel } from '../types/Models';

export function selectIdAction(id: string): ActionModel {
  return {
    type: ActionType.SELECT_ID,
    value: id,
  };
}
