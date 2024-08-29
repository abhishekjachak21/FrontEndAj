# Notes for IMP Hooks(Aug2024):
1. useState
2. useEffect
3. useContext
4. useReducer
5. useMemo
6. useCallback
7. useRef 


(refer thapa technical videos)
# useContext =>
- for usecontext we need only createContext(). assign it to variable, and then it pass through provider
- then extract passed value, using useContext in consumer component.

# useReducer=>
- syntax:  const [state, dispatch] = useReducer(reducerFun, initialstate),  reducer is function
- usestate is for simpleapp, and this hook is for bit complex applicn
- dispatch function sends action to the reducerfun, in return state gets updated based on action type and payload(data)
- reducerFun takes two arguments 1state and 2action