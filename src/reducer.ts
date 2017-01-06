import * as _ from 'lodash'
import {ActionType, REDUX_INIT, Action} from './actions'
import {State, StatePartial} from './types'

export const INITIAL_STATE = {
  hoveredItem: null,
  selectedItems: [],
  nonSelectedItems: [],
  allItems: []
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

export default function reducer<T> (state:State<T>, action:Action):State<T> {
  let nextState:StatePartial<T> | undefined
  switch (action.type) {
      case ActionType.DOUBLE_CLICK_ITEM:
        nextState = {
          hoveredItem: null
        }
        if (action.isSelectedItem) {
          nextState = deselectItem(state, action.index)
        } else {
          nextState = selectItem(state, action.index)
        }
        break

      case ActionType.CLICK_ITEM:
        nextState = hoverItem<T>(action.index, action.isSelectedItem)
        break

      case ActionType.HOVER_NEXT_ITEM:
        nextState = hoverNext(state)
        break

      case ActionType.HOVER_PREV_ITEM:
        nextState = hoverPrev(state)
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

      case REDUX_INIT:
        break

      default:
        throw new Error(`Action ${(action as Action).type} unrecognized`)
  }

  return _.defaults(nextState, state)
}
