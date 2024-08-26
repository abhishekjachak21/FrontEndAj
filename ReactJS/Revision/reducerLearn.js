

const { useReducer } = React;

        const initState = 0;

        const reducer = (state, action) => {
            switch (action.type) {
                case "INC": 
                    console.log(state);
                    return state + 1;
                case "DEC":  console.log(state);
                    return state - 1;
                default:
                    return state;
            }
        };

        const UseReducer = () => {
            const [state, dispatch] = useReducer(reducer, initState);

            return (
                <> 
                    <div>
                        <p>{state}</p>
                        <div className="arecha">
                            <button onClick={() => dispatch({ type: "INC" })}>Increase</button>
                            <button onClick={() => dispatch({ type: "DEC" })}>Decrease</button>
                        </div>
                    </div>
                </>
            );
        };

        // Render the component to the root element
        ReactDOM.render(<UseReducer />, document.getElementById('root'));















// import react, {useReducer} from react

// initState = 0;

// const reducer = (state, action) =>{
//     if(action.type === "INC") 
//         return state;
//     return state;
// }

// const UseReducer = () => {

//     const [state, dispatch] = useReducer(reducer, initState);

//     return(
//         <> 
//           <div>
//             <p>{state}</p>
//                <div className = "arecha">
//                     <button onClick={()=> dispatch({type:"INC"})} ></button>
//                     <button onClick={()=> dispatch({type:"DEC"})} ></button>
//                </div>
//           </div>
          
//         </>
//     )
// }

// export default UseReducer;