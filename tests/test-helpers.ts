import {State, StatePartial} from '../src/types'
import * as _ from 'lodash'

export interface DummyType {
    title:string;
    subtitle:string;
    id:string;
}

export function stateDefaults():State<DummyType> {
    return {
        hoveredItem: null,
        selectedItems: [],
        nonSelectedItems: [],
        allItems: [],
        titleAttr: 'title',
        subtitleAtrr: 'subtitle',
        valueAttr: 'id'
    }
}

export function stateFactory<T> (defaultGen:()=>State<T>) {
    return (state:StatePartial<T>):State<T> => {
        return _.defaults(state, defaultGen())
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