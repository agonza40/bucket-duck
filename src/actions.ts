import {StatePartial} from './types'

export const REDUX_INIT = '@@redux/INIT'
export type Init = {type:'@@redux/INIT'}

export namespace ActionType {
  export type SELECT_ITEM = 'frost-buckets/SELECT_ITEM'
  export const SELECT_ITEM = 'frost-buckets/SELECT_ITEM' as SELECT_ITEM

  export type DESELECT_ITEM = 'frost-buckets/DESELECT_ITEM'
  export const DESELECT_ITEM = 'frost-buckets/DESELECT_ITEM' as DESELECT_ITEM

  export type HOVER_SELECTED = 'frost-buckets/HOVER_SELECTED'
  export const HOVER_SELECTED = 'frost-buckets/HOVER_SELECTED' as HOVER_SELECTED

  export type HOVER_NON_SELECTED = 'frost-buckets/HOVER_NON_SELECTED'
  export const HOVER_NON_SELECTED = 'frost-buckets/HOVER_NON_SELECTED' as HOVER_NON_SELECTED

  export type HOVER_NEXT_ITEM = 'frost-buckets/HOVER_NEXT_ITEM'
  export const HOVER_NEXT_ITEM = 'frost-buckets/HOVER_NEXT_ITEM' as HOVER_NEXT_ITEM

  export type HOVER_PREV_ITEM = 'frost-buckets/HOVER_PREV_ITEM'
  export const HOVER_PREV_ITEM = 'frost-buckets/HOVER_PREV_ITEM' as HOVER_PREV_ITEM

  export type CLEAR_HOVER = 'frost-buckets/CLEAR_HOVER'
  export const CLEAR_HOVER = 'frost-buckets/CLEAR_HOVER' as CLEAR_HOVER

  export type SELECT_HOVER = 'frost-buckets/SELECT_HOVER'
  export const SELECT_HOVER = 'frost-buckets/SELECT_HOVER' as SELECT_HOVER

  export type RECEIVED_STATE = 'frost-buckets/RECEIVED_STATE'
  export const RECEIVED_STATE = 'frost-buckets/RECEIVED_STATE' as RECEIVED_STATE

  export type REORDER_ITEMS = 'frost-buckets/REORDER_ITEMS'
  export const REORDER_ITEMS = 'frost-buckets/REORDER_ITEMS' as REORDER_ITEMS
}

export type SimpleAction <T> = {type:T}
export function simpleAction <T>(action:T):() => SimpleAction<T> {
  const actionObj = {
    get type ():T {
      return action
    }
  }
  return function () {
    return actionObj
  }
}

export interface ItemAction {
  type:ActionType.SELECT_ITEM | ActionType.DESELECT_ITEM | ActionType.HOVER_SELECTED | ActionType.HOVER_NON_SELECTED
  index:number
}

export function clickItem (index:number, isSelectedItem:boolean):ItemAction {
  if (isSelectedItem) {
    return hoverSelected(index)
  }

  return hoverNonSelected(index)
}

export function doubleClickItem (isSelectedItem:boolean, index:number):ItemAction {
  if (isSelectedItem) {
    return deselectItem(index)
  }

  return selectItem (index)
}

export function selectItem (index:number):ItemAction {
  return {
    type: ActionType.SELECT_ITEM,
    index
  }
}

export function deselectItem (index:number):ItemAction {
  return {
    type: ActionType.DESELECT_ITEM,
    index
  }
}

export function hoverSelected (index:number):ItemAction {
  return {
    type: ActionType.HOVER_SELECTED,
    index
  }
}

export function hoverNonSelected (index:number):ItemAction {
  return {
    type: ActionType.HOVER_NON_SELECTED,
    index
  }
}

export interface ReceivedStateAction<T> {
  type:ActionType.RECEIVED_STATE
  state:StatePartial<T>
}

export function receivedState<T> (state:StatePartial<T>):ReceivedStateAction<T> {
  return {
    type: ActionType.RECEIVED_STATE,
    state
  }
}

export interface ReorderItemsAction<T> {
  type:ActionType.REORDER_ITEMS
  newOrder:T[]
  item:T
}

export function reorderItems<T> (newOrder:T[], item:T):ReorderItemsAction<T> {
  return {
    type: ActionType.REORDER_ITEMS,
    newOrder,
    item
  }
}

export type SimpleBucketActions = SimpleAction<
  ActionType.HOVER_NEXT_ITEM |
  ActionType.HOVER_PREV_ITEM |
  ActionType.CLEAR_HOVER |
  ActionType.SELECT_HOVER
>

export const hoverNextItem:() => SimpleBucketActions = simpleAction(ActionType.HOVER_NEXT_ITEM)

export const hoverPrevItem:() => SimpleBucketActions = simpleAction(ActionType.HOVER_PREV_ITEM)

export const clearHover:() => SimpleBucketActions = simpleAction(ActionType.CLEAR_HOVER)

export const selectHover:() => SimpleBucketActions = simpleAction(ActionType.SELECT_HOVER)

export type Action<T> =
  ItemAction |
  SimpleBucketActions |
  ReceivedStateAction<T> |
  ReorderItemsAction<T> |
  Init
