import React, { useState } from 'react'

export const  Content = () => {
  const [count, setCount] = useState(5);

   const nxt = ()=>{
      setCount(count*2+234)
   }



  return (
    <>
        <div className='mx-10 text-4xl'>
            <h1>Val : {count}</h1>
            <button className='bg-slate-50 rounded-sm' onClick={nxt}>Press</button>
        </div>
    </>
  )
}

