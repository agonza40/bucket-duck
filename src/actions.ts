export const REDUX_INIT = '@@redux/init'
export type Init = {type: '@@redux/init'}

export enum ActionType {
  CLICK_ITEM,
  DOUBLE_CLICK_ITEM,
  SELECT_ITEM,
  DESELECT_ITEM,
  HOVER_NEXT_ITEM,
  HOVER_PREV_ITEM,
  CLEAR_HOVER,
  SELECT_HOVER
}

export namespace ActionType {
  function asString(type:ActionType) {
    return ActionType[type]
  }
}

export type SimpleAction <T extends ActionType> = {type:T}
export function simpleAction <T extends ActionType>(action:T):SimpleAction<T> {
  return {
    get type ():T {
      return action
    }
  }
}

const {
  CLICK_ITEM,
  DOUBLE_CLICK_ITEM,
  SELECT_ITEM,
  DESELECT_ITEM,
  HOVER_NEXT_ITEM,
  HOVER_PREV_ITEM,
  CLEAR_HOVER,
  SELECT_HOVER
} = ActionType

export interface ClickItem {
  type:ActionType.CLICK_ITEM;
  isSelectedItem:boolean;
  index:number;
}

export function clickItem (index:number, isSelectedItem:boolean):ClickItem {
  return {
    type: CLICK_ITEM,
    isSelectedItem,
    index
  }
}

export interface DoubleClickItem {
  type:ActionType.DOUBLE_CLICK_ITEM;
  isSelectedItem:boolean;
  index:number;
}

export function doubleClickItem (isSelectedItem:boolean, index:number):DoubleClickItem {
  return {
    type: DOUBLE_CLICK_ITEM,
    isSelectedItem,
    index
  }
}

export interface SelectItem {
  type:ActionType.SELECT_ITEM;
  index:number;
}

export function selectItem (index:number):SelectItem {
  return {
    type: SELECT_ITEM,
    index
  }
}

export interface DeselectItem {
  type:ActionType.DESELECT_ITEM;
  index:number;
}

export function deselectItem (index:number):DeselectItem {
  return {
    type: DESELECT_ITEM,
    index
  }
}

export type HoverNextItem = SimpleAction<ActionType.HOVER_NEXT_ITEM>
export const hoverNextItem:HoverNextItem = simpleAction(HOVER_NEXT_ITEM)

export type HoverPrevItem = SimpleAction<ActionType.HOVER_PREV_ITEM>
export const hoverPrevItem:HoverPrevItem = simpleAction(HOVER_PREV_ITEM)

export type ClearHover = SimpleAction<ActionType.CLEAR_HOVER>
export const clearHover:ClearHover = simpleAction(CLEAR_HOVER)

export type SelectHover = SimpleAction<ActionType.SELECT_HOVER>
export const selectHover:SelectHover = simpleAction(SELECT_HOVER)

export type Action =
  ClickItem |
  DoubleClickItem |
  SelectItem |
  DeselectItem |
  HoverNextItem |
  HoverPrevItem |
  ClearHover |
  SelectHover |
  Init