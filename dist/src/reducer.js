"use strict";
var lodash_1 = require("lodash");
var ACTIONS = require("./actions");
exports.INITIAL_STATE = {
    hoveredItem: null,
    selectedItems: [],
    nonSelectedItems: [],
    allItems: [],
    titleAttr: '',
    subtitleAtrr: '',
    valueAttr: ''
};
function selectItem(state, action) {
    var nonSelectedItems = state.nonSelectedItems, selectedItems = state.selectedItems;
    var item = nonSelectedItems[action.index];
    selectedItems.push(item);
    return {
        selectedItems: selectedItems,
        nonSelectedItems: lodash_1.default.without()
    };
}
function deselectItem() {
}
var actionFunctions = (_a = {},
    _a[ACTIONS.DOUBLE_CLICK_ITEM] = function (state, _a) {
        var isSelectedItem = _a.isSelectedItem, index = _a.index;
        var nextState = {
            hoveredItem: null
        };
        if (isSelectedItem) {
            deselectItem;
        }
        else {
            selectItem;
        }
        return nextState;
    },
    _a[ACTIONS.CLICK_ITEM] = function (state, action) {
    },
    _a[ACTIONS.HOVER_NEXT_ITEM] = function (state, action) {
    },
    _a[ACTIONS.HOVER_PREV_ITEM] = function (state, action) {
    },
    _a[ACTIONS.SELECT_ITEM] = function (state, action) {
    },
    _a[ACTIONS.DESELECT_ITEM] = function (state, action) {
    },
    _a[ACTIONS.REDUX_INIT] = lodash_1.default.noop,
    _a);
function reducer(state, action) {
    var reducerFunction = actionFunctions[action.type];
    if (reducerFunction === undefined) {
        throw new Error("Action " + action.type + " unrecognized");
    }
    return lodash_1.default.defaults(reducerFunction(state, action), state);
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = reducer;
var _a;
