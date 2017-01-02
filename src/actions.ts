export function simpleAction (action) {
  return {
    get type () {
      return action
    }
  }
}

export const REDUX_INIT = '@@redux/init'

export function dragItem () {

}

export function dropItem () {

}

export const CLICK_ITEM = 'CLICK_ITEM'
export function clickItem (isSelectedItem, itemIndex) {
  return {
    type: CLICK_ITEM,
    index: itemIndex
  }
}

export const DOUBLE_CLICK_ITEM = 'DOUBLE_CLICK_ITEM'
export function doubleClickItem (isSelectedItem, index) {
  return {
    type: DOUBLE_CLICK_ITEM,
    isSelectedItem,
    index
  }
}

export const SELECT_ITEM = 'SELECT_ITEM'
export function selectItem (isSelectedItem, index) {
  return {
    type: SELECT_ITEM,
    isSelectedItem,
    index
  }
}
export const DESELECT_ITEM = 'DESELECT_ITEM'
export function deselectItem (isSelectedItem, index) {
  return {
    type: DESELECT_ITEM,
    isSelectedItem,
    index
  }
}

export const HOVER_NEXT_ITEM = 'HOVER_NEXT_ITEM'
export const selectNextItem = simpleAction(HOVER_NEXT_ITEM)

export const HOVER_PREV_ITEM = 'HOVER_PREV_ITEM'
export const selectPrevItem = simpleAction(HOVER_PREV_ITEM)
