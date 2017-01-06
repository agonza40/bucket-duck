"use strict";
var _ = require("lodash");
var actions_1 = require("./actions");
exports.INITIAL_STATE = {
    hoveredItem: null,
    selectedItems: [],
    nonSelectedItems: [],
    allItems: []
};
function selectItem(state, index) {
    var nonSelectedItems = state.nonSelectedItems, selectedItems = state.selectedItems;
    var item = nonSelectedItems[index];
    selectedItems.push(item);
    return {
        selectedItems: selectedItems,
        nonSelectedItems: _.without(nonSelectedItems, item)
    };
}
function deselectItem(state, index) {
    var nonSelectedItems = state.nonSelectedItems, selectedItems = state.selectedItems;
    var item = selectedItems[index];
    nonSelectedItems.push(item);
    return {
        selectedItems: _.without(selectedItems, item),
        nonSelectedItems: nonSelectedItems
    };
}
function hoverItem(index, isSelected) {
    return {
        hoveredItem: { index: index, isSelected: isSelected }
    };
}
function hoverNext(state) {
    var hoveredItem = state.hoveredItem;
    if (hoveredItem === null) {
        return state;
    }
    var index = hoveredItem.index, isSelected = hoveredItem.isSelected;
    var items = isSelected ? state.selectedItems : state.nonSelectedItems;
    if (index > -1 && index < items.length - 1) {
        return hoverItem(index + 1, isSelected);
    }
    return state;
}
function hoverPrev(state) {
    var hoveredItem = state.hoveredItem;
    if (hoveredItem === null) {
        return state;
    }
    var index = hoveredItem.index, isSelected = hoveredItem.isSelected;
    if (index > 0) {
        return hoverItem(index - 1, isSelected);
    }
    return state;
}
function reducer(state, action) {
    var nextState;
    switch (action.type) {
        case actions_1.ActionType.DOUBLE_CLICK_ITEM:
            nextState = {
                hoveredItem: null
            };
            if (action.isSelectedItem) {
                nextState = deselectItem(state, action.index);
            }
            else {
                nextState = selectItem(state, action.index);
            }
            break;
        case actions_1.ActionType.CLICK_ITEM:
            nextState = hoverItem(action.index, action.isSelectedItem);
            break;
        case actions_1.ActionType.HOVER_NEXT_ITEM:
            nextState = hoverNext(state);
            break;
        case actions_1.ActionType.HOVER_PREV_ITEM:
            nextState = hoverPrev(state);
            break;
        case actions_1.ActionType.CLEAR_HOVER:
            nextState = { hoveredItem: null };
            break;
        case actions_1.ActionType.SELECT_ITEM:
            nextState = selectItem(state, action.index);
            break;
        case actions_1.ActionType.DESELECT_ITEM:
            nextState = deselectItem(state, action.index);
            break;
        case actions_1.ActionType.SELECT_HOVER:
            if (state.hoveredItem === null) {
                break;
            }
            if (state.hoveredItem.isSelected) {
                nextState = deselectItem(state, state.hoveredItem.index);
                nextState.hoveredItem = null;
            }
            else {
                nextState = selectItem(state, state.hoveredItem.index);
                nextState.hoveredItem = null;
            }
            break;
        case actions_1.REDUX_INIT:
            break;
        default:
            throw new Error("Action " + action.type + " unrecognized");
    }
    return _.defaults(nextState, state);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
