import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

export const StateProvider = (
  { reducer, initialState, children } //tutaj mają być nawiasy okrągłe
) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
