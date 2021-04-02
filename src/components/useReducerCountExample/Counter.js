import React, { useReducer } from 'react'

const initialState = {
    count: 0,
  };

const decrementFun = (num) => num - 1;
const incrementFun = (num) => num + 1;
const duplicateFun = (num) => num * 2;

  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment': {
        return { ...state, count: incrementFun(state.count) };
      }
      case 'decrement': {
        return { ...state, count: decrementFun(state.count) };
      }      
      case 'duplicate': {
        return { ...state, count: duplicateFun(state.count) };
      }
      case 'reset': {
          return initialState;
      }        
      default: {
        return state;
      }
    }
  };
  
export const Counter = () => {
  const [{ count }, dispatch] = useReducer(reducer, initialState);
  
  const onHandleIncrement = async () => {
    dispatch({ type: 'increment' });
  };
  const onHandleDecrement = async () => {
    dispatch({ type: 'decrement' });
  };
  const onHandleDuplicate = async () => {
    dispatch({ type: 'duplicate' });
  };
  const onHandleReset = async () => {
    dispatch({ type: 'reset' });
  };

  return (
    <div>
      <p>Count {count}</p>
      <button type="button" onClick={onHandleIncrement}>
        +
      </button>
      <button type="button" onClick={onHandleDecrement}>
        -
      </button>
      <button type="button" onClick={onHandleDuplicate}>
        x2
      </button>
      <button type="button" onClick={onHandleReset}>
        reset
      </button>
    </div>
  );
}