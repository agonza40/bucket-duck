"use strict";
function simpleAction(action) {
    return {
        get type() {
            return action;
        }
    };
}
exports.simpleAction = simpleAction;
exports.REDUX_INIT = '@@redux/init';
function dragItem() {
}
exports.dragItem = dragItem;
function dropItem() {
}
exports.dropItem = dropItem;
exports.CLICK_ITEM = 'CLICK_ITEM';
function clickItem(isSelectedItem, itemIndex) {
    return {
        type: exports.CLICK_ITEM,
        index: itemIndex
    };
}
exports.clickItem = clickItem;
exports.DOUBLE_CLICK_ITEM = 'DOUBLE_CLICK_ITEM';
function doubleClickItem(isSelectedItem, index) {
    return {
        type: exports.DOUBLE_CLICK_ITEM,
        isSelectedItem: isSelectedItem,
        index: index
    };
}
exports.doubleClickItem = doubleClickItem;
exports.SELECT_ITEM = 'SELECT_ITEM';
function selectItem(isSelectedItem, index) {
    return {
        type: exports.SELECT_ITEM,
        isSelectedItem: isSelectedItem,
        index: index
    };
}
exports.selectItem = selectItem;
exports.DESELECT_ITEM = 'DESELECT_ITEM';
function deselectItem(isSelectedItem, index) {
    return {
        type: exports.DESELECT_ITEM,
        isSelectedItem: isSelectedItem,
        index: index
    };
}
exports.deselectItem = deselectItem;
exports.HOVER_NEXT_ITEM = 'HOVER_NEXT_ITEM';
exports.selectNextItem = simpleAction(exports.HOVER_NEXT_ITEM);
exports.HOVER_PREV_ITEM = 'HOVER_PREV_ITEM';
exports.selectPrevItem = simpleAction(exports.HOVER_PREV_ITEM);
