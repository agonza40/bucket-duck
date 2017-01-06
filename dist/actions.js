"use strict";
exports.REDUX_INIT = '@@redux/init';
var ActionType;
(function (ActionType) {
    ActionType[ActionType["CLICK_ITEM"] = 0] = "CLICK_ITEM";
    ActionType[ActionType["DOUBLE_CLICK_ITEM"] = 1] = "DOUBLE_CLICK_ITEM";
    ActionType[ActionType["SELECT_ITEM"] = 2] = "SELECT_ITEM";
    ActionType[ActionType["DESELECT_ITEM"] = 3] = "DESELECT_ITEM";
    ActionType[ActionType["HOVER_NEXT_ITEM"] = 4] = "HOVER_NEXT_ITEM";
    ActionType[ActionType["HOVER_PREV_ITEM"] = 5] = "HOVER_PREV_ITEM";
    ActionType[ActionType["CLEAR_HOVER"] = 6] = "CLEAR_HOVER";
    ActionType[ActionType["SELECT_HOVER"] = 7] = "SELECT_HOVER";
})(ActionType = exports.ActionType || (exports.ActionType = {}));
(function (ActionType) {
    function asString(type) {
        return ActionType[type];
    }
})(ActionType = exports.ActionType || (exports.ActionType = {}));
function simpleAction(action) {
    return {
        get type() {
            return action;
        }
    };
}
exports.simpleAction = simpleAction;
var CLICK_ITEM = ActionType.CLICK_ITEM, DOUBLE_CLICK_ITEM = ActionType.DOUBLE_CLICK_ITEM, SELECT_ITEM = ActionType.SELECT_ITEM, DESELECT_ITEM = ActionType.DESELECT_ITEM, HOVER_NEXT_ITEM = ActionType.HOVER_NEXT_ITEM, HOVER_PREV_ITEM = ActionType.HOVER_PREV_ITEM, CLEAR_HOVER = ActionType.CLEAR_HOVER, SELECT_HOVER = ActionType.SELECT_HOVER;
function clickItem(index, isSelectedItem) {
    return {
        type: CLICK_ITEM,
        isSelectedItem: isSelectedItem,
        index: index
    };
}
exports.clickItem = clickItem;
function doubleClickItem(isSelectedItem, index) {
    return {
        type: DOUBLE_CLICK_ITEM,
        isSelectedItem: isSelectedItem,
        index: index
    };
}
exports.doubleClickItem = doubleClickItem;
function selectItem(index) {
    return {
        type: SELECT_ITEM,
        index: index
    };
}
exports.selectItem = selectItem;
function deselectItem(index) {
    return {
        type: DESELECT_ITEM,
        index: index
    };
}
exports.deselectItem = deselectItem;
exports.hoverNextItem = simpleAction(HOVER_NEXT_ITEM);
exports.hoverPrevItem = simpleAction(HOVER_PREV_ITEM);
exports.clearHover = simpleAction(CLEAR_HOVER);
exports.selectHover = simpleAction(SELECT_HOVER);
