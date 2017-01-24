import * as _ from 'lodash'
import {ActionType, REDUX_INIT, Action} from './actions'
import {State, StatePartial} from './types'

interface HoverState {
  index:number
  isSelected:boolean
}

export const INITIAL_STATE:State<any> = {
  hoveredItem: null,
  selectedItems: [],
  nonSelectedItems: [],
  allItems: [],
  selectedChanged: false
}

function selectItem<T> (state:State<T>, index:number):StatePartial<T> {
  const {nonSelectedItems, selectedItems} = state
  const item = nonSelectedItems[index]
  selectedItems.push(item)
  return {
    selectedItems,
    nonSelectedItems: _.without(nonSelectedItems, item)
  }
}

function deselectItem<T> (state:State<T>, index:number):StatePartial<T> {
  const {nonSelectedItems, selectedItems} = state
  const item = selectedItems[index]
  nonSelectedItems.push(item)
  return {
    selectedItems: _.without(selectedItems, item),
    nonSelectedItems
  }
}

function hoverItem<T> (index:number, isSelected:boolean):StatePartial<T> {
  return {
    hoveredItem: {index, isSelected}
  }
}

function hoverNext<T> (state:State<T>):StatePartial<T> {
  const {hoveredItem} = state
  if (hoveredItem === null) {
    return state
  }
  const {index, isSelected} = hoveredItem
  const items = isSelected ? state.selectedItems : state.nonSelectedItems
  if (index > -1 && index < items.length - 1) {
    return hoverItem<T>(index + 1, isSelected)
  }
  return state
}

function hoverPrev<T> (state:State<T>):StatePartial<T> {
  const {hoveredItem} = state
  if (hoveredItem === null) {
    return state
  }
  const {index, isSelected} = hoveredItem
  if (index > 0) {
    return hoverItem<T>(index - 1, isSelected)
  }
  return state
}

function hoveredOutOfBounds<T> (hoveredItem:HoverState, selectedItems:T[], nonSelectedItems:T[]) {
  return hoveredItem.index < 0 ||
      (hoveredItem.isSelected && hoveredItem.index >= selectedItems.length) ||
      hoveredItem.index >= nonSelectedItems.length
}

function receiveState<T> (state:State<T>, newStateProps:StatePartial<T>) {
  const nonSelectedItems = newStateProps.nonSelectedItems || state.nonSelectedItems
  const selectedItems = newStateProps.selectedItems || state.nonSelectedItems
  let hoveredItem = newStateProps.hoveredItem
  if (hoveredItem !== null && hoveredItem !== undefined) {
    if (hoveredOutOfBounds(hoveredItem, selectedItems, nonSelectedItems)) {
      hoveredItem = null
    }
  }
  return _.assign(newStateProps, {
    hoveredItem,
    selectedChanged: false
  })
}
export default function reducer<T> (state:State<T>, action:Action<T>):State<T> {
  let nextState:StatePartial<T> | undefined
  switch (action.type) {
      case ActionType.HOVER_NEXT_ITEM:
        nextState = hoverNext(state)
        break

      case ActionType.HOVER_PREV_ITEM:
        nextState = hoverPrev(state)
        break

      case ActionType.HOVER_SELECTED:
        nextState = hoverItem<T>(action.index, true)
        break

      case ActionType.HOVER_NON_SELECTED:
        nextState = hoverItem<T>(action.index, false)
        break

      case ActionType.CLEAR_HOVER:
        nextState = {hoveredItem: null}
        break

      case ActionType.SELECT_ITEM:
        nextState = selectItem(state, action.index)
        break

      case ActionType.DESELECT_ITEM:
        nextState = deselectItem(state, action.index)
        break

      case ActionType.SELECT_HOVER:
        if (state.hoveredItem === null) {
          break
        }
        if (state.hoveredItem.isSelected) {
          nextState = deselectItem(state, state.hoveredItem.index)
          nextState.hoveredItem = null
        } else {
          nextState = selectItem(state, state.hoveredItem.index)
          nextState.hoveredItem = null
        }
        break

      case ActionType.RECEIVED_STATE:
        nextState = receiveState(state, action.state)
        break

      case ActionType.REORDER_ITEMS:
        nextState ={
          hoveredItem: {
            index: _.findIndex(action.newOrder, action.item),
            isSelected: true
          },
          selectedItems: action.newOrder,
          selectedChanged: true
        }
        break
      case REDUX_INIT:
        break

      default:
        throw new Error(`Action ${(action as Action<T>).type} unrecognized`)
  }

  return _.defaults(nextState, state)
}
