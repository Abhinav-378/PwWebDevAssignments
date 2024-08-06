import React from 'react'

function SeachBar( {setSearch} ) {
    
  return (
    <div>
      <input type="text" 
      placeholder='Enter github username'
      className='p-3 px-5 text-lg bg-slate-100 rounded-lg my-12'
      onChange={(e)=>setSearch(e.target.value)}
       />
    </div>
  )
}

export default SeachBar
