declare namespace TOAST {
  type ToastType = "success" | "error" | "warning" | "info";
  interface IToast {
    open:boolean,  
    message: string;
    type?: ToastType;
    duration?: number;
  }
  interface IToastProvider {
    toast: IToast;
    showToast: (toast: IToast) => void;
  }
}
