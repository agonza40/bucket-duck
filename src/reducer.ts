import * as _ from 'lodash'
import {ActionType, REDUX_INIT, Action} from './actions'
import {State, StatePartial} from './types'

export const INITIAL_STATE = {
  hoveredItem: null,
  selectedItems: [],
  nonSelectedItems: [],
  allItems: [],
  titleAttr: '',
  subtitleAtrr: '',
  valueAttr: ''
}


function selectItem<T> (state:State<T>, action):StatePartial<T> {
  const {nonSelectedItems, selectedItems} = state
  const item = nonSelectedItems[action.index]
  selectedItems.push(item)
  return {
    selectedItems,
    nonSelectedItems: _.without(nonSelectedItems, item)
  }
}

function deselectItem<T> (state:State<T>, action):StatePartial<T> {
  const {nonSelectedItems, selectedItems} = state
  const item = selectedItems[action.index]
  nonSelectedItems.push(item)
  return {
    selectedItems: _.without(selectedItems, item),
    nonSelectedItems
  }
}

function hoverItem<T> (state:State<T>, action):StatePartial<T> {
  return {

  }
}

export default function reducer<T> (state:State<T>, action:Action) {
  let nextState
  switch(action.type) {
      case ActionType.DOUBLE_CLICK_ITEM:
        nextState = {
          hoveredItem: null
        }
        if (action.isSelectedItem) {
          nextState = deselectItem(state, action)
        } else {
          nextState = selectItem(state, action)
        }
        break;
      case ActionType.CLICK_ITEM:
        nextState = hoverItem(state, action)
        break;

      case ActionType.HOVER_NEXT_ITEM:
        break;
      case ActionType.HOVER_PREV_ITEM:
        break;
      case ActionType.SELECT_ITEM:
        break;
      case ActionType.DESELECT_ITEM:
        break;
      case REDUX_INIT:
        break;
      default:
        throw new Error(`Action ${(<any>action).type} unrecognized`)
  }

  return _.defaults(nextState, state)
}
