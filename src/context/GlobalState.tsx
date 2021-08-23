import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

interface MyContext {
  state: any;
  dispatch: React.Dispatch<any>;
}

const initialState: any = {
  users: [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Amanda Holden" },
    { id: 3, name: "Derek Brown" },
  ],
};

export const GlobalContext = createContext<MyContext>(initialState);

export const GlobalProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
