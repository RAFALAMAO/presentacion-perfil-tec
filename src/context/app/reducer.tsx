// ** React Imports
import { createContext, useReducer, type ReactNode } from 'react';

interface IAppState {
  basePath: string;
}

const initialState: IAppState = {
  basePath: '/presentacion-perfil-tec',
};

const AppContext = createContext<{
  state: IAppState;
}>(null as any);

const reducer = (state: IAppState, action: { type: any; payload: any }) => {
  switch (action.type) {
    default:
      return state;
  }
};

const AppContextProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const data = { state, dispatch };

  return <AppContext.Provider value={data}>{children}</AppContext.Provider>;
};

export default AppContext;
export { AppContextProvider };
