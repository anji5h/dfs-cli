import { createContext, useEffect, useReducer } from "react";
import Loader from "../components/Loader";
import { AuthReducer } from "../reducers/AuthReducer";
import { httpGet } from "../utils/httpRequest";

const initialState: Auth.IAuthState = {
  loading: true,
  error: null,
  user: null,
};

export const AuthContext = createContext({
  state: initialState,
  login: async (token: string) => {},
  logout: () => {},
  reset: () => {},
});

const AuthProvider: ReactFCWithChildren = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initialState);

  useEffect(() => {
    dispatch({ type: "LOGOUT" });
  }, []);

  const login = async (token: string) => {
    try {
      localStorage.setItem("token", token);
      dispatch({ type: "RESET" });
      console.log("a")
      let { data } = await httpGet("/user/me", true);
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    } catch (err: any) {
      dispatch({ type: "LOGIN_ERROR", payload: err.response?.data?.message || err.message });
    }
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
      {state.loading ? (
        <Loader text="Loading . . . ." />
      ) : state.error ? (
        <div>{state.error}</div>
      ) : (
        children
      )}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
