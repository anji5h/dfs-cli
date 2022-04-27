import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./AppRoute";
import MUITheme from "./components/MUITheme";
import AuthProvider from "./providers/AuthProvider";

const App = function () {
  return (
    <MUITheme>
      <AuthProvider>
        <Router>
          <AppRoute />
        </Router>
      </AuthProvider>
    </MUITheme>
  );
};

export default App;
