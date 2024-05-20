Summary:

-> Setters (setCount, setBakes): These are used to update state and trigger re-renders. They are functions provided by useState.

-> useCallback: This hook is used to memoize functions to prevent unnecessary re-renders of child components by ensuring the function reference remains the same unless its dependencies change....useCallback is all about optimization and ensuring that functions are not recreated unnecessarily, which can help improve performance in React applications, especially when dealing with complex components or a large component tree.







