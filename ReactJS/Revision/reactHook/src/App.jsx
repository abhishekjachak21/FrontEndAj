
import './App.css'
import React, { useState, useEffect, useContext, createContext, useReducer, useRef, useCallback, useMemo } from 'react';




// ///--------------------------------------------------------
// function TreasureBox() {
//   const [treasure, setTreasure] = useState("Gold Coins");

//   return (
//     <div>
//       <h1>My Treasure: {treasure}</h1>
//       <button onClick={() => setTreasure("Diamonds")}>Change Treasure</button>
//     </div>
//   );
// }

// export default TreasureBox
// ///--------------------------------------------------------








// ///--------------------------------------------------------

// function SpellBook() {
//   const [treasure, setTreasure] = useState("Gold Coins");

//   useEffect(() => {
//     console.log(`A spell is cast because the treasure changed to ${treasure}`);
//   }, [treasure]);

//   return (
//     <div>
//       <h1>My Treasure: {treasure}</h1>
//       <button onClick={() => setTreasure("Diamonds")}>Change Treasure</button>
//     </div>
//   );
// }
// export default SpellBook

// ///--------------------------------------------------------









// ///--------------------------------------------------------
// // 1. Create a Walkie-Talkie
const MagicWalkieTalkie = createContext();

function Friend() {
  // 3. Receive Information
  const message = useContext(MagicWalkieTalkie);
  return <h1>Friend's Message: {message}</h1>;
}

function WalkieTalkieGame() {
  return (
    // 2. Share Information
    <MagicWalkieTalkie.Provider value="Hello, Friend!, this is shared ">
      <Friend />
    </MagicWalkieTalkie.Provider>
  );
}
export default WalkieTalkieGame

// ///--------------------------------------------------------











// ///--------------------------------------------------------
// // 1. Set Up the Reducer Function
// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { count: state.count + 1 };
//     case 'decrement':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// };

// // 2. Define the Initial State
// const initialState = { count: 0 };

// const CounterApp = () => {
//   // 3. Use the `useReducer` Hook
//   const [state, dispatch] = useReducer(reducer, initialState);

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       {/* 4. Handle Actions */}
//       <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//     </div>
//   );
// };

// export default CounterApp;
// // ///--------------------------------------------------------




// ///--------------------------------------------------------
// function Bookmark() {
//   const treasureRef = useRef();

//   const handleClick = () => {
//     treasureRef.current.focus();
//   };

//   return (
//     <div>
//       <input ref={treasureRef} placeholder="Type your treasure here" />
//       <button onClick={handleClick}>Focus on Treasure</button>
//     </div>
//   );
// }

// export default Bookmark
// ///--------------------------------------------------------





// ///--------------------------------------------------------
// function SpellBook() {
//   const [count, setCount] = useState(0);

//   // 2. Store the Spell
//   const castSpell = useCallback(() => {
//     console.log(`Casting spell with count: ${count}`);
//   }, [count]);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increase Count</button>
//       {/* 3. Use the Spell */}
//       <button onClick={castSpell}>Cast Spell</button>
//     </div>
//   );
// }

// export default Bookmark
// ///--------------------------------------------------------




// ///--------------------------------------------------------
// function MemoryPotion() {
//   const [number, setNumber] = useState(1);

//   // 2. Store the Result
//   const bigSpellResult = useMemo(() => {
//     console.log('Performing a big spell...');
//     return number * 2;
//   }, [number]);

//   return (
//     <div>
//       <p>Number: {number}</p>
//       <p>Big Spell Result: {bigSpellResult}</p>
//       <button onClick={() => setNumber(number + 1)}>Increase Number</button>
//     </div>
//   );
// }
// export default MemoryPotion
// ///--------------------------------------------------------