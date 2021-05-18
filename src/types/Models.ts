import { ActionType } from './ActionType';

export interface ActionModel {
  type: ActionType;
  value: any;
}

export interface DataEntry {
  id: string;
  label: string;
  value: number;
  type: 'percentage' | 'number' | 'secs' | 'hours';
  description: string;
  category: string;
}

export interface DataModel {
  data: DataEntry[];
}
