import {describe, it} from 'mocha'
import {expect} from 'chai'
import reducer from '../src/reducer'
import {doubleClickItem} from '../src/actions'
import {
    stateFactory,
    DummyType,
    STATE_DEFAULTS,
    generateDummyItems
} from './test-helpers'

const createState = stateFactory<DummyType>(STATE_DEFAULTS)

describe('Double click action', function () {
    it('moves a non-selected item to the list of selected items', function () {
        const initialState = createState({
            selectedItems: generateDummyItems(1, 1),
            nonSelectedItems: generateDummyItems(2, 1)
        })
        expect(reducer(initialState, doubleClickItem(false, 0))).to.be.eql(createState({
            nonSelectedItems: [],
            selectedItems:[
                {title:'Item 1' , subtitle: '', id:'item1'},
                {title:'Item 2' , subtitle: '', id:'item2'}
            ]
        }))
    })
    it('moves a selected item to the list of non-selected items', function () {
        const initialState = createState({
            selectedItems: generateDummyItems(1, 1),
            nonSelectedItems: generateDummyItems(2, 1)
        })
        expect(reducer(initialState, doubleClickItem(true, 0))).to.be.eql(createState({
            nonSelectedItems: [
                {title:'Item 2' , subtitle: '', id:'item2'},
                {title:'Item 1' , subtitle: '', id:'item1'}
            ],
            selectedItems:[]
        }))
    })
})