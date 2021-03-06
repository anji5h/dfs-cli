import { useForm } from "react-hook-form";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { httpPost } from "../utils/httpRequest";
import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { ToastContext } from "../providers/ToastProvider";
const LoginPage: React.FC = () => {
  const { login } = useContext(AuthContext);
  const { showToast } = useContext(ToastContext);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login.IInputField>();

  const onSubmit = async (data: Login.IInputField) => {
    try {
      const res = await httpPost("/auth/login", data);
      await login(res.data.token);
    } catch (err: any) {
      showToast({
        message: err.response?.data?.message || err.message,
        duration: 3000,
        type: "error",
        open: true,
      });
    }
  };

  return (
    <Grid container justifyContent="center" alignItems="center" style={{ height: "100%" }}>
      <Grid container direction="column" maxWidth="450px">
        <Grid item>
          <Typography variant="h4" align="center">
            Login
          </Typography>
        </Grid>
        <Grid item>
          <form className="form" onSubmit={handleSubmit(onSubmit)}>
            <Grid container direction="column" spacing={2}>
              <Grid item>
                <TextField
                  fullWidth
                  margin="normal"
                  label="Email"
                  id="email"
                  error={!!errors.email}
                  helperText={errors.email?.message}
                  {...register("email", { required: "* required" })}
                />
                <TextField
                  type="password"
                  margin="normal"
                  fullWidth
                  label="Password"
                  id="password"
                  error={!!errors.password}
                  helperText={errors.password?.message}
                  {...register("password", { required: "* required" })}
                />
              </Grid>
              <Grid container item justifyContent="flex-end">
                <Button color="primary" disabled={isSubmitting} type="submit" variant="outlined">
                  Submit
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
