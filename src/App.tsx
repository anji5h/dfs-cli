import { BrowserRouter as Router } from "react-router-dom";
import AppRoute from "./AppRoute";
import MUITheme from "./components/MUITheme";
import ToastMessage from "./components/ToastMessage";
import AuthProvider from "./providers/AuthProvider";

import { ToastProvider } from "./providers/ToastProvider";

const App = function () {
  return (
    <MUITheme>
      <ToastProvider>
        <AuthProvider>
          <ToastMessage />
          <Router>
            <AppRoute />
          </Router>
        </AuthProvider>
      </ToastProvider>
    </MUITheme>
  );
};

export default App;
