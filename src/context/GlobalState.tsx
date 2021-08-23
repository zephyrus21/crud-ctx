import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

interface GlobalProviderProps {}

const initialState = {
  users: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Amanda Holden" },
    { id: 3, name: "Derek Brown" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider: React.FC<GlobalProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ users: state.users }}>
      {children}
    </GlobalContext.Provider>
  );
};
