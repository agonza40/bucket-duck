import { StatePartial } from './types';
export declare const REDUX_INIT = "@@redux/INIT";
export declare type Init = {
    type: '@@redux/INIT';
};
export declare namespace ActionType {
    type SELECT_ITEM = 'frost-buckets/SELECT_ITEM';
    const SELECT_ITEM: "frost-buckets/SELECT_ITEM";
    type DESELECT_ITEM = 'frost-buckets/DESELECT_ITEM';
    const DESELECT_ITEM: "frost-buckets/DESELECT_ITEM";
    type HOVER_SELECTED = 'frost-buckets/HOVER_SELECTED';
    const HOVER_SELECTED: "frost-buckets/HOVER_SELECTED";
    type HOVER_NON_SELECTED = 'frost-buckets/HOVER_NON_SELECTED';
    const HOVER_NON_SELECTED: "frost-buckets/HOVER_NON_SELECTED";
    type HOVER_NEXT_ITEM = 'frost-buckets/HOVER_NEXT_ITEM';
    const HOVER_NEXT_ITEM: "frost-buckets/HOVER_NEXT_ITEM";
    type HOVER_PREV_ITEM = 'frost-buckets/HOVER_PREV_ITEM';
    const HOVER_PREV_ITEM: "frost-buckets/HOVER_PREV_ITEM";
    type CLEAR_HOVER = 'frost-buckets/CLEAR_HOVER';
    const CLEAR_HOVER: "frost-buckets/CLEAR_HOVER";
    type SELECT_HOVER = 'frost-buckets/SELECT_HOVER';
    const SELECT_HOVER: "frost-buckets/SELECT_HOVER";
    type RECEIVED_STATE = 'frost-buckets/RECEIVED_STATE';
    const RECEIVED_STATE: "frost-buckets/RECEIVED_STATE";
    type REORDER_ITEMS = 'frost-buckets/REORDER_ITEMS';
    const REORDER_ITEMS: "frost-buckets/REORDER_ITEMS";
}
export declare type SimpleAction<T> = {
    type: T;
};
export declare function simpleAction<T>(action: T): () => SimpleAction<T>;
export interface ItemAction {
    type: ActionType.SELECT_ITEM | ActionType.DESELECT_ITEM | ActionType.HOVER_SELECTED | ActionType.HOVER_NON_SELECTED;
    index: number;
}
export declare function clickItem(index: number, isSelectedItem: boolean): ItemAction;
export declare function doubleClickItem(isSelectedItem: boolean, index: number): ItemAction;
export declare function selectItem(index: number): ItemAction;
export declare function deselectItem(index: number): ItemAction;
export declare function hoverSelected(index: number): ItemAction;
export declare function hoverNonSelected(index: number): ItemAction;
export interface ReceivedStateAction<T> {
    type: ActionType.RECEIVED_STATE;
    state: StatePartial<T>;
}
export declare function receivedState<T>(state: StatePartial<T>): ReceivedStateAction<T>;
export interface ReorderItemsAction<T> {
    type: ActionType.REORDER_ITEMS;
    newOrder: T[];
    item: T;
}
export declare function reorderItems<T>(newOrder: T[], item: T): ReorderItemsAction<T>;
export declare type SimpleBucketActions = SimpleAction<ActionType.HOVER_NEXT_ITEM | ActionType.HOVER_PREV_ITEM | ActionType.CLEAR_HOVER | ActionType.SELECT_HOVER>;
export declare const hoverNextItem: () => SimpleBucketActions;
export declare const hoverPrevItem: () => SimpleBucketActions;
export declare const clearHover: () => SimpleBucketActions;
export declare const selectHover: () => SimpleBucketActions;
export declare type Action<T> = ItemAction | SimpleBucketActions | ReceivedStateAction<T> | ReorderItemsAction<T> | Init;
