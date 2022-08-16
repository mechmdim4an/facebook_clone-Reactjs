import React, { createContext, useContext, useReducer } from 'react';

//creating Context

export const StateContext = createContext();

//Higher order component ... use to rap the app.... and it allow as to state provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
)

// to pull some value from the data we use useStateValue hook
export const useStateValue = () => useContext(StateContext)






