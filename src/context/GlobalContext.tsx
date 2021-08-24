import React, { createContext, useReducer } from "react";
import reducer from "./reducer";

interface MyContext {
  state: any;
  dispatch: React.Dispatch<any>;
}

const initialState: any = {
  users: [],
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
