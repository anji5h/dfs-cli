import Snackbar from "@mui/material/Snackbar";
import { forwardRef, useContext, useEffect } from "react";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { ToastContext } from "../providers/ToastProvider";

const Alert = forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const ToastMessage: React.FC = () => {
  const { toast, showToast } = useContext(ToastContext);

  useEffect(() => {}, [toast]);

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    showToast({ ...toast, open: false });
  };

  return (
    <Snackbar
      open={!!toast.open}
      onClose={handleClose}
      autoHideDuration={toast.duration}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert onClose={handleClose} severity={toast.type} sx={{ minWidth: "280px" }}>
        {toast.message}
      </Alert>
    </Snackbar>
  );
};

export default ToastMessage;
