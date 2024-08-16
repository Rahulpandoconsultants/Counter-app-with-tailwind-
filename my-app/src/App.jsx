import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
    <div className=" text-3xl  bg-slate-200 text-red-500 font-bold underline border-2 mb-2 p-2 w-full rounded-lg text-center *:">
        Counter App Using Tailwind in React+vite
    </div>
   <div className='block border-2 rounded-lg justify-center m-2 text-center min-h-48 '>
    <h1 className='text-3xl text-black-200 font-bold p-5'>{count}</h1>
    <button className='border-2 hover:bg-slate-500 rounded-lg bg-slate-100 m-0.5 w-1/6' onClick={()=>{setCount(count+1)}}>increment</button>
    <button className='border-2 hover:bg-slate-500 rounded-lg bg-slate-100 m-0.5 w-1/6'onClick={()=>{setCount(0)}}>clear</button>
    <button className='border-2 hover:bg-slate-500 rounded-lg bg-slate-100 m-0.5 w-1/6'  onClick={()=>{setCount(count-1)}}>decrement</button>
    </div>
    <div className="relative  bg-slate-200 text-3xl text-red-500 font-bold underline border-2 mt-2 p-2 rounded-lg text-center">
        Footer
    </div>
    </>
  )
}

export default App
