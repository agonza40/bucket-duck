export declare const REDUX_INIT = "@@redux/init";
export declare type Init = {
    type: '@@redux/init';
};
export declare enum ActionType {
    CLICK_ITEM = 0,
    DOUBLE_CLICK_ITEM = 1,
    SELECT_ITEM = 2,
    DESELECT_ITEM = 3,
    HOVER_NEXT_ITEM = 4,
    HOVER_PREV_ITEM = 5,
    CLEAR_HOVER = 6,
    SELECT_HOVER = 7,
}
export declare namespace ActionType {
}
export declare type SimpleAction<T extends ActionType> = {
    type: T;
};
export declare function simpleAction<T extends ActionType>(action: T): () => SimpleAction<T>;
export interface ClickItem {
    type: ActionType.CLICK_ITEM;
    isSelectedItem: boolean;
    index: number;
}
export declare function clickItem(index: number, isSelectedItem: boolean): ClickItem;
export interface DoubleClickItem {
    type: ActionType.DOUBLE_CLICK_ITEM;
    isSelectedItem: boolean;
    index: number;
}
export declare function doubleClickItem(isSelectedItem: boolean, index: number): DoubleClickItem;
export interface SelectItem {
    type: ActionType.SELECT_ITEM;
    index: number;
}
export declare function selectItem(index: number): SelectItem;
export interface DeselectItem {
    type: ActionType.DESELECT_ITEM;
    index: number;
}
export declare function deselectItem(index: number): DeselectItem;
export declare type HoverNextItem = SimpleAction<ActionType.HOVER_NEXT_ITEM>;
export declare const hoverNextItem: () => HoverNextItem;
export declare type HoverPrevItem = SimpleAction<ActionType.HOVER_PREV_ITEM>;
export declare const hoverPrevItem: () => HoverPrevItem;
export declare type ClearHover = SimpleAction<ActionType.CLEAR_HOVER>;
export declare const clearHover: () => ClearHover;
export declare type SelectHover = SimpleAction<ActionType.SELECT_HOVER>;
export declare const selectHover: () => SelectHover;
export declare type Action = ClickItem | DoubleClickItem | SelectItem | DeselectItem | HoverNextItem | HoverPrevItem | ClearHover | SelectHover | Init;
