
export interface State<T> {
  hoveredItem:{index:number, isSelected:boolean} | null
  selectedItems:T[]
  nonSelectedItems:T[]
  allItems:T[]
  titleAttr?:keyof T
  subtitleAttr?:keyof T
  valueAttr?:keyof T
  selectedChanged:boolean
}

export type StatePartial<T> = {
  [K in keyof State<T>]?:State<T>[K]
}
