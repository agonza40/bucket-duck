# bucket-duck
Based on this [Modular Reducer Proposal](https://github.com/erikras/ducks-modular-redux/blob/master/README.md)

## Actions
| Action Name | Intended usage |
| - | - |
| CLICK_ITEM | A user single clicks an item |
| DOUBLE_CLICK_ITEM | A user double clicks an item |
| SELECT_ITEM | An item is selected by its index |
| DESELECT_ITEM | A selected item is deselected by its index |
| HOVER_NEXT_ITEM | Hover the next item in the list |
| HOVER_PREV_ITEM | Hover the previous item in the list |
| CLEAR_HOVER | Clears the currently hovered item |
| SELECT_ITEM | Moves the currently hovered item to the opposite list |