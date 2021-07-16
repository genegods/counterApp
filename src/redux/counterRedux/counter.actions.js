import {INCREASE_COUNTER, DECREASE_COUNTER} from './counter.actionTypes'

let increaseCounter = () =>{
    return{
        type: INCREASE_COUNTER,
        payload: 'increase'
    }
}

let decreaseCounter = () =>{
    return{
        type: DECREASE_COUNTER,
        payload: 'decrease'
    }
}

export {increaseCounter, decreaseCounter}