import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/instaLogo.jpg'
function App() {
  const [signIn, setSignIn] = useState(true)
  function toggle(){
    setSignIn(!signIn)
  }
  return (
    <div className='bg-slate-100 flex justify-center items-center min-h-screen'>
      <div className='flex flex-col gap-4 justify-center items-center w-96 rounded-lg px-12 py-20 border-2 '>
        <img src={logo} alt="" className='h-20 rounded' />
        {!signIn && <input type="text" name="" id=""  placeholder='Full Name' className='w-72 p-2 rounded-lg'/>}
        {!signIn && <input type="text" name="" id="" placeholder='Mobile Number or Email' className='w-72 p-2 rounded-lg'/>}
        <input type="text" name="" id="" placeholder='Phone number, username or email' className='w-72 p-2 rounded-lg'/>
        <input type="text" name="" id="" placeholder='Password' className='w-72 p-2 rounded-lg'/>
        {signIn && <button className='bg-sky-400 text-white font-semibold w-full p-2 rounded '>Sign In</button>}
        {!signIn && <button className='bg-sky-400 text-white font-semibold w-full p-2 rounded '>Sign Up</button>}
          {signIn && <div>Don't have account? <button onClick={toggle} className='text-sky-500 px-2'>Sign up</button></div>}
          {!signIn && <div>Have an account? <button onClick={toggle} className='text-sky-500 px-2'>Sign In</button></div>}
      </div>
    </div>
  )
}

export default App
