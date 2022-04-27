import { createContext, useEffect, useReducer } from "react";
import { AuthReducer } from "../reducers/AuthReducer";

const initialState: Auth.IAuthState = {
  loading: true,
  error: null,
  user: null,
};

export const AuthContext = createContext({
  state: initialState,
  login: (user: Auth.IUser) => {},
  logout: () => {},
  reset: () => {},
});

const AuthProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  const login = (user: Auth.IUser) => {
    dispatch({ type: "LOGIN_SUCCESS", payload: user });
  };

  const logout = () => {
    localStorage.removeItem("refresh_token");
    sessionStorage.removeItem("access_token");
    dispatch({ type: "LOGOUT" });
  };

  const reset = () => {
    dispatch({ type: "RESET" });
  };

  return (
    <AuthContext.Provider value={{ state, login, logout, reset }}>
      {state.loading ? <div></div> : state.error ? <div>{state.error}</div> : children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
