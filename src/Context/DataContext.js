import { createContext, useEffect, useReducer, useState } from "react";

import { DataReducer, initialState } from "../Reducer/DataReducer";
import { ActionTypes } from "../Reducer/types";
import { books } from "../Data/books";

export const DataContext = createContext();

export function DataContextProvider({ children }) {
  const [state, dispatch] = useReducer(DataReducer, initialState);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    dispatch({
      type: ActionTypes.InitialFetch,
      payload: { books },
    });

    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <DataContext.Provider
      value={{
        state,
        dispatch,
        loader,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}
