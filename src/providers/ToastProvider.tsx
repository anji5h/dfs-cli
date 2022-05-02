import { createContext, useState } from "react";

const initialState: TOAST.IToast = {
  message: "",
  open: false,
  type: "success",
  duration: 5000,
};

export const ToastContext = createContext<TOAST.IToastProvider>({
  toast: initialState,
  showToast: (toast: TOAST.IToast) => {},
});

export const ToastProvider: ReactFCWithChildren = ({ children }) => {
  const [toast, setToast] = useState(initialState);
  const showToast = (toast: TOAST.IToast) => setToast(toast);

  return <ToastContext.Provider value={{ toast, showToast }}>{children}</ToastContext.Provider>;
};
