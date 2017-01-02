import _ from 'lodash'
import * as ACTIONS from './actions'
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
    nonSelectedItems: _.without()
  }
}

function deselectItem () {

}

const actionFunctions = {
  [ACTIONS.DOUBLE_CLICK_ITEM] (state, {isSelectedItem, index}) {
    const nextState = {
      hoveredItem: null
    }
    if (isSelectedItem) {
      deselectItem
    } else {
      selectItem
    }
    return nextState
  },
  [ACTIONS.CLICK_ITEM] (state, action) {

  },
  [ACTIONS.HOVER_NEXT_ITEM] (state, action) {

  },
  [ACTIONS.HOVER_PREV_ITEM] (state, action) {

  },
  [ACTIONS.SELECT_ITEM] (state, action) {

  },
  [ACTIONS.DESELECT_ITEM] (state, action) {

  },
  [ACTIONS.REDUX_INIT]: _.noop
}

export default function reducer (state, action) {
  const reducerFunction = actionFunctions[action.type]

  if (reducerFunction === undefined) {
    throw new Error(`Action ${action.type} unrecognized`)
  }

  return _.defaults(reducerFunction(state, action), state)
}
