import React, { useReducer, useContext, Dispatch, Reducer } from "react";

import { initState, reducer, State, Action } from "./appReducer";

type ContextType = {
  state: State,
  dispatch: Dispatch<Action>
} | null;

const AppContext = React.createContext<ContextType>(null);

const Provider:React.FC = ({ children }) => {

  const [state, dispatch] = useReducer<Reducer<State,Action>>(reducer, initState);

  return(
    <AppContext.Provider value={{
      dispatch,
      state
    }}>
      {children}
    </AppContext.Provider>
  );
}

const useDispatch = ():Dispatch<Action> | undefined => {
  return useContext<ContextType>(AppContext)?.dispatch;
}

const useStore = ():State | undefined => {
  return useContext<ContextType>(AppContext)?.state
};

export {
  AppContext,
  Provider,
  useDispatch,
  useStore
};