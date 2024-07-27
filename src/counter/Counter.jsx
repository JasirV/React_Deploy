import React from 'react'
import { decrement, increment, reset } from '../redux/slice'
import { useDispatch } from 'react-redux'

const Counter = () => {
    const dispatch=useDispatch()
  return (
    <div>
        <button onClick={()=>{dispatch(increment())}}>+</button>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        <button onClick={()=>{dispatch(reset())}}>reset</button>
    </div>
  )
}

export default Counter