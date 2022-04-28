import { lazy, Suspense, useContext } from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Loader from "./components/Loader";
import { AuthContext } from "./providers/AuthProvider";
const LoginPage = lazy(() => import("./pages/LoginPage"));

const AppRoute: React.FC = () => {
  const { state } = useContext(AuthContext);
  return (
    <Suspense fallback={<Loader text="Loading . . ." />}>
      <Routes>
        <Route element={<PublicRoute isAuth={!!state.user} />}>
          <Route path="/login" element={<LoginPage />} />
        </Route>
        <Route element={<PrivateRoute isAuth={!!state.user} />}>
          <Route path="/" element={<div>Home</div>}></Route>
        </Route>
      </Routes>
    </Suspense>
  );
};

//private route wrapper
const PrivateRoute: React.FC<IRouterProps> = function ({ isAuth }) {
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

//public route wrapper
const PublicRoute: React.FC<IRouterProps> = function ({ isAuth }) {
  return isAuth ? <Navigate to="/" /> : <Outlet />;
};

export default AppRoute;
