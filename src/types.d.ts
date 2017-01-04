
export interface State<T> {
  hoveredItem: T | null;
  selectedItems: T[];
  nonSelectedItems: T[];
  allItems: T[];
  titleAttr: keyof T;
  subtitleAtrr?: keyof T,
  valueAttr: keyof T
}

export type StatePartial<T> = {
  [K in keyof State<T>]?:State<T>[K]
}