import { useState } from "react";

export const LearnState = ()=>{
    // console.log(useState());
    const [abc,def] = useState(4)
    console.log(abc);

    // const mygod = ()=>{
    //     def((abc)=> {return abc+1})
    // }
    const mygod = () => {
        if (abc < 10) {
            def(abc + 1);
        } else {
            console.log("Maximum value reached");
        }
    };

    function myevil(){
        def((abc)=>abc-1)
    }
    
    
    return(
        <>
            <h1>VAL: {abc} </h1>
            <button onClick={mygod}>INC</button>
            <button onClick={myevil}>DEC</button>
        </>
    )
}

/*
-> only changed element wala component gets re-rendered
 using diffing algorithm(reconcilatn process)
-> we need another function to operate function extracted fro 
usestate, bcz we can use multiple places to it
-> also it provides reusability, indentation 
*/