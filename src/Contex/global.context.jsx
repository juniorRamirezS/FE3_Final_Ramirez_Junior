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

  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo

  const [state, dispatch] = useReducer(reducer, initialState);

  const url = "https://jsonplaceholder.typicode.com/users";

  console.log("Estado inicial:", initialState);

  useEffect(() => {
    localStorage.setItem("favs", JSON.stringify(state.favs));
  }, [state.favs]);

  useEffect(() => {
    axios(url).then((res) => {
      console.log(res.data);
      dispatch({ type: "GET_CHARS", payload: res.data });
    })
  }, []);
  console.log("Estado actual:", state);

  const contextValue = useMemo(
    () => ({ state, dispatch })
    [state, dispatch] // Recalcular solo si `state` o `dispatch` cambian
  );

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

