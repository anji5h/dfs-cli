declare namespace Auth {
  enum Role {
    CT_ADMIN,
    SP_ADMIN,
    USER,
    ADMIN,
  }
  interface IUser {
    id: string;
    name: string;
    email: string;
    role: Role;
  }
  interface IAuthState {
    loading: boolean;
    error: string | null;
    user: IUser | null;
  }
  interface ILoginSuccessAction {
    type: "LOGIN_SUCCESS";
    payload: IUser;
  }
  interface ILoginErrorAction {
    type: "LOGIN_ERROR";
    payload: string;
  }
  interface ILogoutAction {
    type: "LOGOUT";
  }
  interface IResetAction {
    type: "RESET";
  }
  type AuthAction = ILoginSuccessAction | ILoginErrorAction | ILogoutAction | IResetAction;
}
