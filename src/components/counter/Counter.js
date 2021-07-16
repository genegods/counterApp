import React from "react";
import plus from "../../asserts/plus.png";
import minus from "../../asserts/minus.png";
import {useSelector, useDispatch} from 'react-redux'
import { COUNTER_KEY } from "../../redux/counterRedux/counter.reducer";
import { increaseCounter, decreaseCounter } from "../../redux/counterRedux/counter.actions";

const Counter = () => {
  let dispatch = useDispatch()

  // handle click events
  let increaseBtn = () =>{
    dispatch(increaseCounter())
  }

    // handle click events
    let decreaseBtn = () =>{
      dispatch(decreaseCounter())
    }
  
  // view data from store
  let viewCounter = useSelector((state) =>{
    return state[COUNTER_KEY]

  })
  return (
    <React.Fragment>
      <div className="container mt-5">
        <div className="row">
            <div className='col-md-3'></div>
          <div className="col-md-6">
            <div className="card text-center">
              <div className="card-header headerColor">
                <h2 className='font-weight-bold'>COUNTER APP</h2>
              </div>
              <div className="card-body">
                <div className-="table">
                  <tr>
                    <td>
                      <div className="mx-4">
                        <img src={minus} alt="" width="100" height="80" onClick={decreaseBtn} className='clickEffect' />
                      </div>
                    </td>
                    <td>
                      <div className='numberBorder mx-4' >
                      
                        <span>{viewCounter.count}</span>
                      </div>
                    </td>
                    <td>
                      <div className="mx-4">
                        <img src={plus} alt="" width="100" height="80" onClick={increaseBtn} className='clickEffect'/>
                      </div>
                    </td>
                  </tr>
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Counter;
