// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
import { useReducer } from 'react'

function countReducer(state, action) {
    switch (action.type) {
      case 'INCREMENT': {
        return { count: state.count + action.step}
      }

      case 'DECREMENT': {
        return { count: state.count - action.step}
      }

      default: {
        throw new Error(`Unsupported action type: ${action.type}`)
      }
    }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = useReducer(countReducer, { count: initialCount });

  const {count} = state;
  const increment = () => dispatch({type: 'INCREMENT', step});
  const decrement = () => dispatch({type: 'DECREMENT', step});

  return <div>
            {count}
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
        </div>
}

function App() {
  return (<Counter />)
}

export default App
