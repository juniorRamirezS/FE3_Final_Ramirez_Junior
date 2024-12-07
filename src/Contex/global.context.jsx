import axios from "axios";

import { createContext, useContext, useEffect, useMemo, useReducer } from "react";
import { reducer } from "../reducers/reducer";

export const ContextGlobal = createContext();

const lsFavs = JSON.parse(localStorage.getItem("favs")) || [];

export const initialState = {
  favs: lsFavs,
  chars: [],
  theme: "light",
}

export const ContextProvider = ({ children }) => {


  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";


  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      dispatch({ type: "GET_CHARS", payload: res.data });
    })
  }, []);

  return (
    <ContextGlobal.Provider value={{ state, dispatch }}>
      {children}
    </ContextGlobal.Provider>
  );
};

export const useCharStates = () => {
  const context = useContext(ContextGlobal);
  if (!context) {
    throw new Error("useCharStates debe ser usado dentro de un ContextProvider");
  }
  return context;
};

export default ContextProvider;

