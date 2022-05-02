import { createContext, useContext, useEffect, useReducer } from "react";
import Loader from "../components/Loader";
import { AuthReducer } from "../reducers/AuthReducer";
import { httpGet } from "../utils/httpRequest";
import { ToastContext } from "./ToastProvider";

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
  const { showToast } = useContext(ToastContext);

  const [state, dispatch] = useReducer(AuthReducer, initialState);

  const getAuthStatus = async () => {
    try {
      const res = await httpGet("/user/me", true);
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data.user });
    } catch (err: any) {
      if (err.response?.status === 401) {
        return dispatch({ type: "LOGOUT" });
      }
      dispatch({ type: "LOGIN_ERROR", payload: err.response?.data?.message || err.message });
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return dispatch({ type: "LOGOUT" });
    getAuthStatus();
  }, []);

  const login = async (token: string) => {
    try {
      localStorage.setItem("token", token);
      dispatch({ type: "RESET" });
      let { data } = await httpGet("/user/me", true);
      showToast({
        message: "Login successful",
        duration: 3000,
        type: "success",
        open: true,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: data.user });
    } catch (err: any) {
      if (err.response?.status === 401) {
        logout();
      }
      dispatch({ type: "LOGIN_ERROR", payload: err.response?.data?.message || err.message });
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
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
