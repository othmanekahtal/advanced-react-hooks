// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'
const reduceFunction = (state, {type, step}) => {
  console.log({state, type, step})
  switch (type) {
    case 'INCREMENT':
      return {...state, count: state.count + step}
    case 'DECREMENT':
      return {...state, count: state.count - step}
    default:
      throw new Error(`unsupported action type:${type}`)
  }
}
function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(reduceFunction, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'DECREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
