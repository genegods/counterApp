import {INCREASE_COUNTER, DECREASE_COUNTER} from './counter.actionTypes'


export const COUNTER_KEY   = 'counterStore'

let initialState = {
    count: 10
}

let counterReducer = (state = initialState, action) =>{
    let {type, payload} = action

    switch(type){
        case INCREASE_COUNTER:
            return{
                count: state.count + 1
            }

            case DECREASE_COUNTER:
                return{
                    count: (state.count - 1 > 0)? state.count - 1 : 1
                }
                default: return state
    }

}

export {counterReducer}