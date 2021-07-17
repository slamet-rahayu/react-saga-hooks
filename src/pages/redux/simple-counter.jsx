import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import counterAct from '../../redux/actions/counter';
import { INCREMENT_REQ, DECREMENT_REQ } from '../../redux/constant/counter';

export default function SimpleCounter() {
  const [count, setCount] = useState(0);
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  const increment = () => dispatch(counterAct.increment());
  const decrement = () => dispatch(counterAct.decrement());

  const incrementSaga = () => dispatch({type: INCREMENT_REQ});
  const decrementSaga = () => dispatch({type: DECREMENT_REQ});

  return (
    <div>
      <div>
        <h1>with redux</h1>
        <h2>{counter}</h2>
        <div>
          <button onClick={increment} type="button">+</button>
          <button onClick={decrement} type="button">-</button>
        </div>
      </div>
      <hr />
      <div>
        <h1>with redux saga</h1>
        <h2>{counter}</h2>
        <div>
          <button onClick={incrementSaga} type="button">+</button>
          <button onClick={decrementSaga} type="button">-</button>
        </div>
      </div>
      <div>
        <h1>with state</h1>
        <h2>{count}</h2>
        <div>
          <button onClick={() => setCount((prev) => prev + 1)} type="button">+</button>
          <button onClick={() => setCount((prev) => prev > 0 ? prev - 1 : prev)} type="button">-</button>
        </div>
      </div>
    </div>
  )
}