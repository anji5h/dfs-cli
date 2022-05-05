export const AuthReducer = (state: Auth.IAuthState, action: Auth.AuthAction) => {
  switch (action.type) {
    case "LOGIN_SUCCESS": {
      state.loading = false;
      state.error = null;
      state.user = action.payload;
      break;
    }
    case "LOGIN_ERROR": {
      state.loading = false;
      state.error = action.payload;
      state.user = null;
      break;
    }
    case "LOGOUT": {
      state.loading = false;
      state.error = null;
      state.user = null;
      break;
    }
    case "RESET": {
      state.loading = true;
      break;
    }
    default:
      return state;
  }
};
