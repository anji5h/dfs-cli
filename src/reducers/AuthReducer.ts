export const AuthReducer = (state: Auth.IAuthState, action: Auth.AuthAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      return { loading: false, error: null, user: action.payload };
    case "LOGIN_ERROR":
      return { loading: false, error: action.payload, user: null };
    case "LOGOUT":
      return { loading: false, error: null, user: null };
    case "RESET":
      return { loading: true, error: null, user: null };
    default:
      return state;
  }
};
