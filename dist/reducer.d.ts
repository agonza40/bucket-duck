import { Action } from './actions';
import { State } from './types';
export declare const INITIAL_STATE: {
    hoveredItem: null;
    selectedItems: never[];
    nonSelectedItems: never[];
    allItems: never[];
};
export default function reducer<T>(state: State<T>, action: Action): State<T>;
