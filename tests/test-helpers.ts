import {State, StatePartial} from '../src/types'
import * as _ from 'lodash'

export interface DummyType {
    title:string;
    subtitle:string;
    id:string;
}

export const STATE_DEFAULTS:State<DummyType> = {
  hoveredItem: null,
  selectedItems: [],
  nonSelectedItems: [],
  allItems: [],
  titleAttr: 'title',
  subtitleAtrr: 'subtitle',
  valueAttr: 'id'
}

export function stateFactory<T> (defaultObj:State<T>) {
    return (state:StatePartial<T>):State<T> => {
        return _.defaults(state, defaultObj)
    }
}

export function generateDummyItems (firstIndex:number, numberOfItems:number):DummyType[] {
    const range:number[] = _.range(firstIndex, firstIndex + numberOfItems)
    return _.map(range, (index) => {
        return {
            title: 'Item ' + index,
            subtitle: '',
            id: 'item' + index
        }
    })
}