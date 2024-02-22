import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset,incrementByAmount } from './redux/counterSlice'



function Counter() {

  const dispatch= useDispatch()

const count = useSelector((state)=>state.counter.count)
const [amount,setAmount] = useState("")

const handleIncrement=()=>{
    if(amount==""){
      alert("Please provide a value")
    }else{
      //update state in store
      dispatch(incrementByAmount(Number(amount)))
    }
}

  return (
    <>

    <div style={{height:'70vh'}} className='w-100 d-flex justify-content-center align-items-center'>
        <div className="d-flex justify-content-center align-items-center border rounded p-5 w-50 flex-column">
            <h1 style={{fontSize:'100px'}}>{count}</h1>
        <div>
        <div className="btn btn-warning" onClick={()=>dispatch(increment())}>Increment</div>
        <div className="btn btn-danger" onClick={()=>dispatch(reset())}>Reset</div>
        <div className="btn btn-success" onClick={()=>dispatch(decrement())}>Decrement</div>
        </div>
        <div className="d-flex mt-5">
            <input onChange={e=>setAmount(e.target.value)} type="text" className='form-control' placeholder='enter amount to be incremented' />
            <button onClick={handleIncrement} className='btn btn-primary ms-3'>Increment Amount</button>
        </div>
 </div>
 </div>

 </>
  )
}

export default Counter