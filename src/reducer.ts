import _ from 'lodash'
import {ActionType, REDUX_INIT} from './actions'
import {State} from './types'

export const INITIAL_STATE = {
  hoveredItem: null,
  selectedItems: [],
  nonSelectedItems: [],
  allItems: [],
  titleAttr: '',
  subtitleAtrr: '',
  valueAttr: ''
}

function selectItem (state, action) {
  const {nonSelectedItems, selectedItems} = state
  const item = nonSelectedItems[action.index]
  selectedItems.push(item)
  return {
    selectedItems,
    nonSelectedItems: _.without(nonSelectedItems, )
  }
}

function deselectItem () {

}

export default function reducer<T> (state:State<T>, action) {
  let nextState
  switch(action.type) {
      case ActionType.DOUBLE_CLICK_ITEM:
        nextState = {
          hoveredItem: null
        }
        if (action.isSelectedItem) {
          deselectItem
        } else {
          selectItem
        }

      case ActionType.CLICK_ITEM:

      case ActionType.HOVER_NEXT_ITEM:

      case ActionType.HOVER_PREV_ITEM:

      case ActionType.SELECT_ITEM:

      case ActionType.DESELECT_ITEM:

      case REDUX_INIT:
        break
      default:
        throw new Error(`Action ${action.type} unrecognized`)
  }

  return _.defaults(nextState, state)
}
