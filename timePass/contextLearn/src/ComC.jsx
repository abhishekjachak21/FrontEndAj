import React, {useContext} from "react"
import { firstname } from "./App"

const ComC = () => {
   
    const fn = useContext(firstname);

    return (
        <>
           <h1>I am {fn}</h1>
           <p>YOU are {fn}, right ?</p>
        </>
    )
}

export default ComC

///using createContext() -> Provider -> Consumer model

// const ComC = () => {
//     return (
//         <>
//         <firstname.Consumer>
//           {(nm)=>{
//            return  <h1>I am {nm}</h1>
//           }}
//         </firstname.Consumer>
//         </>
//     )
// }




