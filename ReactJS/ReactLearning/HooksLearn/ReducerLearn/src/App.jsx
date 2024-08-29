
import './App.css'
import { useReducer } from 'react'

function App() {
  // const [count, setCount] = useState(0)
  const initstate = {
    car : 45,
    bike : 140,
    count : 11,
  }

   const reduceBro = (state, action) => {  //action comes from stateDispatch, action decides further state 
    
      console.log(state.count, action);
      
      // if(action.type === "INC")  return state+10;
      // else if(action.thopo === "DEC") return state-10;
      // else return state=0;

      switch (action.type) {
        // case "INC":
        //    return state+10;
        //    break;
        case "INC":
           return {
            ...state,
            count:state.count+10}

        case "DEC":
          return {
            ...state,
            bike:state.bike*2,  //we can update many var, if we use state, one word
            count:state.count-10}

        case "RST":
          return {
            ...state, count:0}
          
        default:
          return state;

      }
   }

   const [state, stateDispatch] = useReducer(reduceBro, initstate)  //reducebro is fun, and 12 is initial state

  return (
    <>
    <div>
        <h1>helo bhai</h1>
        <h1><strong>VALUE: {state.count}</strong></h1> 
        <button onClick={()=>stateDispatch({type:"INC"})}>INC </button>
        <button onClick={()=>stateDispatch({type:"DEC"})}>DEC </button>
        <button onClick={()=>stateDispatch({type:"RST"})}>Reset </button>
    </div>
    </>
  )
}

export default App

/*
YOU CAN DO THINGS TO IMPROVE

-> you can set variable for initial state instead of assinging direct '0'
-> you can use default name STATE for variable as there will be multiple values defined in 
initial state object,  which will be fetched by state variable from initstate obj.
-> you can use switch case for if-else
-> you are using obj, so you need to operate on obj value, like state.count, and also need to return obj only
-> if u hv more data, then you can set multiple rest operator, like ...state,
 baki ka waise hi rakho sirf count modify karo, state.count+1

*/
// https://youtu.be/i8D7v_7xyBY?t=438 refer this video, best !!
