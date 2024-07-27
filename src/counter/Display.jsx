import React from 'react'
import { useSelector } from 'react-redux'

const Display = () => {
    const count=useSelector((state)=>state.count.count)
    console.log(count);
  return (
    <div>
        <h1>{count}</h1>
    </div>
  )
}

export default Display