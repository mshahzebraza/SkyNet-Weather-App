// The value of the provider is set to global state & dispatch bcz

// 1. Global State can allow the access to the data.

// 2. Dispatch allows you to make changes in the state based on some condition input

//    a. Whenever you want to import the contents of the context, you make use of useContext(), in which you pass in the context from you want your data.
//    b. In this case, we skip the step of using the `useContext` hook and `passing the context` in it, by combining it all in one hook we made ourselves. (useStore)
//    c. When we get the value from the context, by useContext(CONTEXT_NAME) or by useStore(), we fetch the returned data in the same form as we passed it in the value prop of our Context.Provider component.
//    d. Here, we pass an array containing state & dispatchFn, which means the use of the hook will return the data in same way. i.e
//    value={[state, dispatchFn]} ------> [state, dispatchFn] = useStore()
//    value={{state, dispatchFn}} ------> {state, dispatchFn} = useStore()

import { createContext, useContext, useReducer } from "react";

// Step 1: Create a React Context and save it in a variable
const StoreCtx = createContext();
StoreCtx.displayName = 'StoreCtx';

// Step 2: Create a hook for convenient use of `React.useContext(CtxName)`. Saves much time
export default function useStore() {
  return useContext(StoreCtx)
}

// Step 3: Like Step#2, it saves time and adds convenience while utilizing the store data in the components. With this wrapping becomes just like any hoc.
export const StoreProvider = ({ children, initialState, reducer }) => {

  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreCtx.Provider value={{ state, dispatch }}>
      {children}
    </StoreCtx.Provider>
  )
}
