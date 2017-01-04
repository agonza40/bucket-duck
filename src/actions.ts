export const REDUX_INIT = '@@redux/init'
export type Init = {type: '@@redux/init'}

export enum ActionType {
  CLICK_ITEM,
  DOUBLE_CLICK_ITEM,
  SELECT_ITEM,
  DESELECT_ITEM,
  HOVER_NEXT_ITEM,
  HOVER_PREV_ITEM
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
  HOVER_PREV_ITEM
} = ActionType

export interface ClickItem {
  type: ActionType.CLICK_ITEM;
  index: number;
}

export function clickItem (index:number):ClickItem {
  return {
    type: CLICK_ITEM,
    index
  }
}

export interface DoubleClickItem {
  type: ActionType.DOUBLE_CLICK_ITEM;
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

type HoverNextItem = SimpleAction<ActionType.HOVER_NEXT_ITEM>
export const selectNextItem:HoverNextItem = simpleAction(HOVER_NEXT_ITEM)

type HoverPrevItem = SimpleAction<ActionType.HOVER_PREV_ITEM>
export const selectPrevItem:HoverPrevItem = simpleAction(HOVER_PREV_ITEM)

export type Action = ClickItem |
  DoubleClickItem |
  SelectItem |
  DeselectItem |
  HoverNextItem |
  HoverPrevItem |
  Init