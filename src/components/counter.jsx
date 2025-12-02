import { useDispatch, useSelector } from "react-redux"
import {plus,minus,reset}from "./counterSlice"

function Counter() {
    const count=useSelector((state)=>state.Counter.count)
      const dispatch = useDispatch()
  return (
    <>
     <h1>Counter:{count}</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        <button onClick={() => dispatch(plus())}>+</button>
        <button onClick={() => dispatch(minus()) }>-</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
      </div>
    
    </>
  )
}

export default Counter