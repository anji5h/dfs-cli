import { useForm } from "react-hook-form";
import { TextField, Button, Grid, Typography } from "@mui/material";
import { httpPost } from "../utils/httpRequest";
const LoginPage: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login.IInputField>();

  const onSubmit = async (data: Login.IInputField) => {
    try {
      const res = await httpPost("/auth/login", data);
      console.log(res);
    } catch (err: any) {
      console.log(err.response);
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
