
import React,{createContext} from "react"
import ComA from "./ComA"

var firstname = createContext();

const App = () => {
  // return < ComA />
  
  return(<>
   <firstname.Provider value={"abhii"}>
    <ComA />
   </firstname.Provider>
  </>)
}

export default App
export {firstname};




