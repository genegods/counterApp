import {combineReducers} from 'redux'
import {counterReducer, COUNTER_KEY} from './counterRedux/counter.reducer'

let rootReducer = combineReducers({
    counterStore : counterReducer
})

export {rootReducer}