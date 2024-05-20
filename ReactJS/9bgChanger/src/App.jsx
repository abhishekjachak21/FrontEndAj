import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
      <div className='w-full h-screen duration-1000' style={{backgroundColor:color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12'>
          <div className='flex flex-wrap justify-center gap-3  bg-white px-3 py-2 rounded-3xl'>                 
              <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "red"}}>Red</button>   
              <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "green"}}>Green</button>   
              <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "blue"}}>Blue</button>   
              <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "orange"}}>Orange</button>   
              <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "yellow"}}>yellow</button>   
              <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "purple"}}>purple</button>   
              <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "pink" }}>Pink</button>
              <button onClick={() => setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "teal" }}>Teal</button>
              <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "brown" }}>Brown</button>
              <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "cyan" }}>Cyan</button>
              <button onClick={() => setColor("magenta")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "magenta" }}>Magenta</button>
              <button onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "lime" }}>Lime</button>
          </div>
        </div>
      </div>
  )
}

export default App



// return (
//   <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
//     <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-12'>
//       <div className='flex flex-wrap justify-center gap-3  bg-grey px-3 py-2 rounded-3xl'>                 
//           <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "red"}}>Red</button>   
//           <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "green"}}>Green</button>   
//           <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "blue"}}>Blue</button>   
//           <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "orange"}}>Orange</button>   
//           <button onClick={()=>setColor("yellow")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "yellow"}}>yellow</button>   
//           <button onClick={()=>setColor("purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{backgroundColor: "purple"}}>purple</button>   
//           <button onClick={() => setColor("pink")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "pink" }}>Pink</button>
//           <button onClick={() => setColor("teal")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "teal" }}>Teal</button>
//           <button onClick={() => setColor("brown")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "brown" }}>Brown</button>
//           <button onClick={() => setColor("cyan")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "cyan" }}>Cyan</button>
//           <button onClick={() => setColor("magenta")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "magenta" }}>Magenta</button>
//           <button onClick={() => setColor("lime")} className='outline-none px-4 py-1 rounded-full text-white shadow-sm' style={{ backgroundColor: "lime" }}>Lime</button>
//       </div>
//     </div>
//   </div>
// )