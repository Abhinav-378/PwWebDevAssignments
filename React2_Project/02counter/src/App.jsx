import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function inc(){
    setCount(count+1);
  }
  function dec(){
    setCount(count-1);
  }

  return (
    <>
      <div className='flex justify-center items-center'>
      <div className='h-80 w-64 bg-red-400 flex items-center justify-center flex-col gap-5 rounded'>
        <div className='text-white text-4xl font-bold'>{count}</div>
        
        <button onClick={inc} className='bg-slate-300 p-2 rounded'>Increment</button>
        <button onClick={dec} className='bg-slate-300 p-2 rounded'>Decrement</button>
      </div>
      </div>
    </>
  )
}

export default App
