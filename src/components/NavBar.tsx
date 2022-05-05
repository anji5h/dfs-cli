import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Clock from "./Clock";

const NavBar = () => {
  const {
    state: { user },
    logout,
  } = useContext(AuthContext);
  return (
    <Grid component="nav" container justifyContent="space-between" alignItems="center">
      <Grid item>
        <Typography variant="h3" fontWeight="bold">
          <Link className="h-link" to="/">
            Deerhold Food System
          </Link>
        </Typography>
      </Grid>
      <Grid item>
        <Grid>
          <Typography variant="body1" fontWeight="bold" textTransform="uppercase">
            {user?.name}
          </Typography>
          <Typography variant="body1" fontWeight="bold">
            DFS ID: {user?.id}
          </Typography>
        </Grid>
        <Grid container spacing={1}>
          <Grid item>
            <Typography variant="body1" fontWeight="bold">
              {new Date().toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </Typography>
          </Grid>
          <Grid item>
            <Clock />
          </Grid>
        </Grid>
        <Grid item>
          <Button variant="contained" color="error" onClick={logout}>
            logout
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default NavBar;
