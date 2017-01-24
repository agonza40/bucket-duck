(function (dependencies, factory) {
    if (typeof module === 'object' && typeof module.exports === 'object') {
        var v = factory(require, exports); if (v !== undefined) module.exports = v;
    }
    else if (typeof define === 'function' && define.amd) {
        define(dependencies, factory);
    }
})(["require", "exports"], function (require, exports) {
    "use strict";
    exports.REDUX_INIT = '@@redux/INIT';
    var ActionType;
    (function (ActionType) {
        ActionType.SELECT_ITEM = 'frost-buckets/SELECT_ITEM';
        ActionType.DESELECT_ITEM = 'frost-buckets/DESELECT_ITEM';
        ActionType.HOVER_SELECTED = 'frost-buckets/HOVER_SELECTED';
        ActionType.HOVER_NON_SELECTED = 'frost-buckets/HOVER_NON_SELECTED';
        ActionType.HOVER_NEXT_ITEM = 'frost-buckets/HOVER_NEXT_ITEM';
        ActionType.HOVER_PREV_ITEM = 'frost-buckets/HOVER_PREV_ITEM';
        ActionType.CLEAR_HOVER = 'frost-buckets/CLEAR_HOVER';
        ActionType.SELECT_HOVER = 'frost-buckets/SELECT_HOVER';
        ActionType.RECEIVED_STATE = 'frost-buckets/RECEIVED_STATE';
        ActionType.REORDER_ITEMS = 'frost-buckets/REORDER_ITEMS';
    })(ActionType = exports.ActionType || (exports.ActionType = {}));
    function simpleAction(action) {
        var actionObj = {
            get type() {
                return action;
            }
        };
        return function () {
            return actionObj;
        };
    }
    exports.simpleAction = simpleAction;
    function clickItem(index, isSelectedItem) {
        if (isSelectedItem) {
            return hoverSelected(index);
        }
        return hoverNonSelected(index);
    }
    exports.clickItem = clickItem;
    function doubleClickItem(isSelectedItem, index) {
        if (isSelectedItem) {
            return deselectItem(index);
        }
        return selectItem(index);
    }
    exports.doubleClickItem = doubleClickItem;
    function selectItem(index) {
        return {
            type: ActionType.SELECT_ITEM,
            index: index
        };
    }
    exports.selectItem = selectItem;
    function deselectItem(index) {
        return {
            type: ActionType.DESELECT_ITEM,
            index: index
        };
    }
    exports.deselectItem = deselectItem;
    function hoverSelected(index) {
        return {
            type: ActionType.HOVER_SELECTED,
            index: index
        };
    }
    exports.hoverSelected = hoverSelected;
    function hoverNonSelected(index) {
        return {
            type: ActionType.HOVER_NON_SELECTED,
            index: index
        };
    }
    exports.hoverNonSelected = hoverNonSelected;
    function receivedState(state) {
        return {
            type: ActionType.RECEIVED_STATE,
            state: state
        };
    }
    exports.receivedState = receivedState;
    function reorderItems(newOrder, item) {
        return {
            type: ActionType.REORDER_ITEMS,
            newOrder: newOrder,
            item: item
        };
    }
    exports.reorderItems = reorderItems;
    exports.hoverNextItem = simpleAction(ActionType.HOVER_NEXT_ITEM);
    exports.hoverPrevItem = simpleAction(ActionType.HOVER_PREV_ITEM);
    exports.clearHover = simpleAction(ActionType.CLEAR_HOVER);
    exports.selectHover = simpleAction(ActionType.SELECT_HOVER);
});
