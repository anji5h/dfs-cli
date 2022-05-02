import { Grid } from "@mui/material";
import { lazy, Suspense, useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import NavBar from "./components/NavBar";
import { AuthContext } from "./providers/AuthProvider";

//lazy load route
const LoginPage = lazy(() => import("./pages/LoginPage"));
const HomePage = lazy(() => import("./pages/HomePage"));

const AppRoute: React.FC = () => {
  const { state } = useContext(AuthContext);
  return (
    <Suspense fallback={<Loader text="Loading . . ." />}>
      <Routes>
        <Route element={<PublicRoute isAuth={!!state.user} />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute isAuth={!!state.user} />}>
          <Route path="/" element={<HomePage />}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

//private route wrapper
const PrivateRoute: React.FC<IRouterProps> = function ({ isAuth }) {
  return isAuth ? (
    <Grid container flexDirection="column">
      <Grid item>
        <NavBar />
      </Grid>
      <Grid item>
        <Outlet />
      </Grid>
    </Grid>
  ) : (
    <Navigate to="/login" />
  );
};

//public route wrapper
const PublicRoute: React.FC<IRouterProps> = function ({ isAuth }) {
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default AppRoute;
